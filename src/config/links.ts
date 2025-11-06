// Centralized application links (internal routes and external URLs)
// Update values here to reflect across the app.

export const ROUTES = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  howItWorks: "/how-it-works",
  bookDemo: "/book-demo",
} as const;

export const EXTERNAL_LINKS = {
  signIn: "https://ng-app.pulsepro.ai/login",
  register: "https://ng-app.pulsepro.ai/register?plan=PROM",
  howItWorks: "https://www.pulsepro.ai/how-it-works/",
  blog: "https://blog.pulsepro.ai",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
