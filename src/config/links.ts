// Centralized application links (internal routes and external URLs)
// Update values here to reflect across the app.

export const ROUTES = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  howItWorks: "/how-it-works",
  apiIntegration: "/api-integration",
  security: "/security",
  faq: "/faq",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/companies-terms-of-service",
  bookDemo: "/book-demo",
} as const;

export const EXTERNAL_LINKS = {
  signIn: "https://ng-app.pulsepro.ai/login",
  register: "https://ng-app.pulsepro.ai/register?plan=PROM",
  howItWorks: "https://www.pulsepro.ai/how-it-works/",
  blog: "https://blog.pulsepro.ai",
  twitter: "https://x.com/pulsepro_ai",
  linkedin: "https://www.linkedin.com/company/pulsepro-ai/",
  youtube: "https://www.youtube.com/@pulseproai",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
