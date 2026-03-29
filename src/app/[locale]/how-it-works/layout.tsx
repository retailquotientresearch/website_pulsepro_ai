import { ReactNode } from 'react';
import { Metadata } from 'next';

const BASE_URL = 'https://www.pulsepro.ai';

export const metadata: Metadata = {
  title: 'How PULSE Works | 5-Step Inspection Workflow',
  description:
    'From template to insight in one shift. See how enterprise teams use PULSE to build checklists, assign inspections, capture in the field, close corrective actions, and get real-time analytics.',
  openGraph: {
    title: 'How PULSE Works | Enterprise Inspection Workflow',
    description:
      'Five simple steps that turn field chaos into operational clarity. Trusted by teams at 100,000+ sites worldwide.',
    url: `${BASE_URL}/en/how-it-works`,
  },
  twitter: {
    title: 'How PULSE Works | Enterprise Inspection Workflow',
    description: 'Five simple steps that turn field chaos into operational clarity. Trusted by teams at 100,000+ sites worldwide.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/how-it-works`,
    languages: {
      en: `${BASE_URL}/en/how-it-works`,
      ar: `${BASE_URL}/ar/how-it-works`,
      'x-default': `${BASE_URL}/en/how-it-works`,
    },
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function HowItWorksLayout({ children }: LayoutProps) {
  return children;
}
