import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: { absolute: 'Enterprise Deployment & Security | PULSE' },
  description:
    'PULSE deploys on your terms — AWS, Azure, OCI, GCP, or your own on-premise infrastructure. SSO (SAML 2.0 / OAuth 2.0), IAM, RBAC, private subnets, SOC2 practices, and L1–L3 support SLAs.',
  openGraph: {
    title: 'Enterprise Deployment & Security | PULSE',
    description:
      'Dedicated cloud or on-prem deployment with SSO, IAM, RBAC, VPN/IP restrictions, penetration testing support, and L1–L3 SLAs.',
    url: 'https://www.pulsepro.ai/en/enterprise-deployment',
  },
  twitter: {
    title: 'Enterprise Deployment & Security | PULSE',
    description:
      'Deploy PULSE on AWS, Azure, OCI, GCP, or on-prem. SSO, IAM, RBAC, and enterprise SLAs included.',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/enterprise-deployment',
    languages: {
      en: 'https://www.pulsepro.ai/en/enterprise-deployment',
      ar: 'https://www.pulsepro.ai/ar/enterprise-deployment',
    },
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pulsepro.ai/en' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Enterprise Deployment & Security',
      item: 'https://www.pulsepro.ai/en/enterprise-deployment',
    },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
