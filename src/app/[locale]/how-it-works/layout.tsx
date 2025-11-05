import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Pulse Pro AI',
  description: 'Learn how Pulse Pro AI works - from field capture to insights and action. A simple flow that teams love.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function HowItWorksLayout({ children }: LayoutProps) {
  return children;
}
