import { NextResponse } from "next/server";

export const runtime = "nodejs";

const PROJECT_TYPES = new Set([
  "Real Estate Website",
  "Music / Creative Platform",
  "Boutique Brand Website",
  "Technology / SaaS",
  "Custom Application",
  "Free Mini Review",
  "$499 Professional Audit",
  "Redesign Strategy",
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AUDIT_TYPES = new Set(["Free Mini Review", "$499 Professional Audit", "Redesign Strategy"]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  details?: unknown;
  siteUrl?: unknown;
  businessGoal?: unknown;
  concern?: unknown;
  website?: unknown;
  turnstileToken?: unknown;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[char] || char
  );
}

function isSafeWebsiteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const turnstileSecret = process.env.TURNSTILE_SECRET;
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!turnstileSecret || !resendKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      {
        message:
          "Contact delivery is not configured yet. Please email info@nextdesign.dev.",
      },
      { status: 503 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid form submission." },
      { status: 400 }
    );
  }

  if (clean(payload.website, 200)) {
    return NextResponse.json({ message: "Inquiry received." });
  }

  const name = clean(payload.name, 100);
  const email = clean(payload.email, 254).toLowerCase();
  const company = clean(payload.company, 120);
  const projectType = clean(payload.projectType, 80);
  const details = clean(payload.details, 5000);
  const siteUrl = clean(payload.siteUrl, 500);
  const businessGoal = clean(payload.businessGoal, 2500);
  const concern = clean(payload.concern, 2500);
  const token = clean(payload.turnstileToken, 2048);
  const isAuditRequest = AUDIT_TYPES.has(projectType);

  if (
    !name ||
    !EMAIL_PATTERN.test(email) ||
    !PROJECT_TYPES.has(projectType) ||
    details.length < 20 ||
    !token ||
    (isAuditRequest && (!isSafeWebsiteUrl(siteUrl) || businessGoal.length < 10 || concern.length < 10))
  ) {
    return NextResponse.json(
      { message: "Please complete every required field." },
      { status: 400 }
    );
  }

  const remoteIp =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const verifyBody = new URLSearchParams({
    secret: turnstileSecret,
    response: token,
  });

  if (remoteIp) {
    verifyBody.set("remoteip", remoteIp);
  }

  let verification: {
    success?: boolean;
    hostname?: string;
    action?: string;
  };

  try {
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: verifyBody,
        signal: AbortSignal.timeout(8000),
      }
    );

    verification = (await verifyResponse.json()) as typeof verification;
  } catch {
    return NextResponse.json(
      {
        message:
          "The security check is temporarily unavailable. Please try again.",
      },
      { status: 502 }
    );
  }

  const expectedHostnames = [
    "nextdesign.dev",
    "www.nextdesign.dev",
  ];

  if (
    !verification.success ||
    verification.action !== "contact" ||
    !expectedHostnames.includes(verification.hostname || "")
  ) {
    return NextResponse.json(
      {
        message:
          "The security check expired or failed. Please try again.",
      },
      { status: 403 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeProject = escapeHtml(projectType);
  const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");
  const safeSiteUrl = escapeHtml(siteUrl || "Not provided");
  const safeBusinessGoal = escapeHtml(businessGoal).replace(/\n/g, "<br />");
  const safeConcern = escapeHtml(concern).replace(/\n/g, "<br />");

  const subject = `New ${projectType} inquiry from ${name}`.replace(
    /[\r\n]/g,
    " "
  );

  const idempotencyKey = crypto.randomUUID();

  let emailResponse: Response;

  try {
    emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text: `New Next Design project inquiry

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Project type: ${projectType}
Website: ${siteUrl || "Not provided"}
${businessGoal ? `Business goal: ${businessGoal}` : ""}
${concern ? `Biggest concern: ${concern}` : ""}

Project details:
${details}`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#171717">
<p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#7048ff">
Next Design project inquiry
</p>

<h1 style="font-size:30px;margin:16px 0 28px">
${safeProject}
</h1>

<table style="width:100%;border-collapse:collapse">
<tr>
<td style="padding:10px 0;color:#666">Name</td>
<td style="padding:10px 0"><strong>${safeName}</strong></td>
</tr>

<tr>
<td style="padding:10px 0;color:#666">Email</td>
<td style="padding:10px 0">
<a href="mailto:${safeEmail}">${safeEmail}</a>
</td>
</tr>

<tr>
<td style="padding:10px 0;color:#666">Company</td>
<td style="padding:10px 0">${safeCompany}</td>
</tr>
<tr>
<td style="padding:10px 0;color:#666">Website</td>
<td style="padding:10px 0">${siteUrl ? `<a href="${safeSiteUrl}">${safeSiteUrl}</a>` : safeSiteUrl}</td>
</tr>
</table>

${businessGoal ? `<div style="margin-top:28px;padding:22px;background:#f5f3ff;border-radius:12px;line-height:1.65"><strong>Business goal</strong><p>${safeBusinessGoal}</p><strong>Biggest concern</strong><p>${safeConcern}</p></div>` : ""}

<div style="margin-top:28px;padding:22px;background:#f5f3ff;border-radius:12px;line-height:1.65">
<strong>Project details</strong>
<p>${safeDetails}</p>
</div>
</div>
`,
        tags: [
          {
            name: "source",
            value: "website-contact",
          },
        ],
      }),
      signal: AbortSignal.timeout(10000),
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Email delivery is temporarily unavailable. Please email info@nextdesign.dev.",
      },
      { status: 502 }
    );
  }

  if (!emailResponse.ok) {
    return NextResponse.json(
      {
        message:
          "Your inquiry could not be delivered. Please email info@nextdesign.dev.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Inquiry sent.",
  });
}
