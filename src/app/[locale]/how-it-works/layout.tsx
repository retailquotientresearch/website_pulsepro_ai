import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'See how PULSE works in 4 steps: capture findings on mobile, verify results, generate instant reports, and drive continuous improvement across all your sites.',
  openGraph: {
    title: 'How PULSE Works | Enterprise Inspection Platform',
    description:
      'From field capture to corrective action in minutes. The simple 4-step workflow that field teams at 100,000+ sites rely on every day.',
    url: 'https://www.pulsepro.ai/en/how-it-works',
  },
  alternates: {
    canonical: 'https://www.pulsepro.ai/en/how-it-works',
    languages: {
      en: 'https://www.pulsepro.ai/en/how-it-works',
      ar: 'https://www.pulsepro.ai/ar/how-it-works',
    },
  },
};

interface LayoutProps {
  children: ReactNode;
}

export default function HowItWorksLayout({ children }: LayoutProps) {
  return children;
}
