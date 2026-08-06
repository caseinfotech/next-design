# Next Design Studio

## Contact form configuration

The project inquiry form validates Cloudflare Turnstile on the server before sending through Resend. Copy `.env.example` to `.env.local` and configure:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: public Turnstile widget key
- `TURNSTILE_SECRET_KEY`: private Turnstile validation key
- `TURNSTILE_EXPECTED_HOSTNAME`: optional production hostname check
- `RESEND_API_KEY`: Resend API key with sending access
- `CONTACT_FROM_EMAIL`: sender on a domain verified in Resend
- `CONTACT_TO_EMAIL`: inbox that receives inquiries

Add the same variables to the production hosting environment. Never expose `TURNSTILE_SECRET_KEY` or `RESEND_API_KEY` as public variables.

Premium Next.js portfolio website for Next Design.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Included

- Immersive responsive homepage
- Selected work and dynamic case-study routes
- Real Estate, Music, Boutique, and Custom Application positioning
- Next.js / TypeScript / Supabase / GitHub / Tailwind / WordPress skill presentation
- About, Lab, and Contact pages
- Vercel Analytics support
