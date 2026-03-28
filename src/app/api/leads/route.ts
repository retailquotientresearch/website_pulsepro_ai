import { NextRequest, NextResponse } from 'next/server'

const NOTIFICATION_EMAIL = 'neeraj@pulsepro.ai'
const FROM_EMAIL = 'neeraj@pulsepro.ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'website' } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const apiKey = process.env.SENDGRID_API_KEY
    if (!apiKey) {
      console.error('[Leads] SENDGRID_API_KEY not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC'

    const emailBody = `New lead captured on PULSE

Email:     ${email}
Source:    ${source}
Time:      ${timestamp}
URL:       https://www.pulsepro.ai

---
This is an automated notification from the PULSE website.`

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: NOTIFICATION_EMAIL }] }],
        from: { email: FROM_EMAIL, name: 'PULSE Website' },
        subject: `New Lead: ${email} (via ${source})`,
        content: [{ type: 'text/plain', value: emailBody }],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[Leads] SendGrid error:', response.status, errorText)
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Leads] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
