import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'PulsePro.ai — Enterprise Inspection Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFFEB',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: '#16803C',
              borderRadius: 12,
              marginRight: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ color: '#fff', fontSize: 28, fontWeight: 700 }}>P</div>
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: '#111' }}>
            PulsePro.ai
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          Enterprise Inspection Platform
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            color: '#555',
            maxWidth: 800,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          Manage inspections, corrective actions, and field teams across 100,000+ sites.
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 48 }}>
          {[
            { value: '100,000+', label: 'Sites Managed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24hr', label: 'Setup Time' },
          ].map(stat => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 36, fontWeight: 700, color: '#16803C' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 20, color: '#777', marginTop: 4 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
