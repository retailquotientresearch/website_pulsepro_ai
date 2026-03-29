import { ReactNode } from 'react'
import { Metadata } from 'next'

const BASE_URL = 'https://www.pulsepro.ai'

export const metadata: Metadata = {
  title: 'API & MCP Integration | PULSE',
  description:
    'Connect PULSE to Claude, Cursor, and any AI tool via the Model Context Protocol. 16 live MCP tools covering inspections, corrective actions, tickets, and analytics. REST API also available.',
  openGraph: {
    title: 'API & MCP Integration | PULSE Inspection Platform',
    description:
      'Ask Claude about your operations data. PULSE exposes 16 real-time MCP tools — inspections, corrective actions, location scores, and more. Plus a full REST API.',
    url: `${BASE_URL}/en/api-integration`,
  },
  twitter: {
    title: 'API & MCP Integration | PULSE',
    description: 'Ask Claude about your operations data. 16 MCP tools + REST API. Connect PULSE to any AI tool in minutes.',
  },
  alternates: {
    canonical: `${BASE_URL}/en/api-integration`,
    languages: {
      en: `${BASE_URL}/en/api-integration`,
      ar: `${BASE_URL}/ar/api-integration`,
      'x-default': `${BASE_URL}/en/api-integration`,
    },
  },
}

export default function ApiIntegrationLayout({ children }: { children: ReactNode }) {
  return children
}
