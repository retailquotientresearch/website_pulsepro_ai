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
  enterpriseEssentials: "/enterprise-essentials",
  enterpriseDeployment: "/enterprise-deployment",
  blog: "/blog",
  roiCalculator: "/roi-calculator",
  icpRetail: "/inspection-software-for-retail",
  icpFoodBeverage: "/inspection-software-for-food-beverage",
  icpConstruction: "/inspection-software-for-construction",
  icpHospitality: "/inspection-software-for-hospitality",
  icpHealthcare: "/inspection-software-for-healthcare",
  featureTraining: "/training-management-software",
  featureTasks: "/corrective-action-software",
  featureAttendance: "/attendance-tracking-software",
  featureAnnouncements: "/operations-announcements-software",

  // ── Future industry ICP pages (not yet built) ────────────────────────────
  // These slugs reserve the URL namespace for upcoming SEO/ICP pages.
  // When building a page, move it out of this block and wire up a real layout.
  // Industries sourced from the UseCases component (removed from homepage 2026-03-29).
  icpHospitalityFnb:       "/inspection-software-for-hospitality-food-beverage",   // Hotels, F&B
  icpFinancialServices:    "/inspection-software-for-financial-services",
  icpRetailSupermarkets:   "/inspection-software-for-retail-supermarkets",
  icpElectricVehicles:     "/inspection-software-for-electric-vehicles",
  icpDiagnosticLabs:       "/inspection-software-for-diagnostic-labs",
  icpCloudKitchens:        "/inspection-software-for-cloud-kitchens",
  icpForestryEnvironmental:"/inspection-software-for-forestry-environmental",
  icpManufacturing:        "/inspection-software-for-manufacturing",
  icpFoodProcessing:       "/inspection-software-for-food-processing",
  icpAutomobileDealerships:"/inspection-software-for-automobile-dealerships",
} as const;

export const EXTERNAL_LINKS = {
  signIn: "https://ng-app.pulsepro.ai/login",
  register: "https://ng-app.pulsepro.ai/register?plan=PROM",
  howItWorks: "https://www.pulsepro.ai/how-it-works/",
  twitter: "https://x.com/pulsepro_ai",
  linkedin: "http://linkedin.com/company/pulse-smart-checklists-inspections-audits",
  youtube: "https://www.youtube.com/@pulseproai",
  aribaProfile: "https://discovery.ariba.com/profile/AN11185489216",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
