export const siteConfig = {
  name: "Next Design",
  url: "https://www.nextdesign.dev",
  email: "hello@nextdesign.dev",
  location: "Asheville, North Carolina",
  description:
    "Asheville web design and development studio creating premium websites, custom applications, and AI-powered digital experiences.",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
