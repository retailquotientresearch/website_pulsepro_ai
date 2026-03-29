import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const NOTIFICATION_EMAIL = 'neeraj@pulsepro.ai'
const FROM_EMAIL = 'neeraj@pulsepro.ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source = 'website' } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Persist to DB — upsert so duplicate submissions update source + timestamp
    await prisma.lead.upsert({
      where: { email },
      update: { source, updatedAt: new Date() },
      create: { email, source },
    })

    // Send notification email (best-effort — don't fail the request if SendGrid is down)
    const apiKey = process.env.SENDGRID_API_KEY
    if (apiKey) {
      const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
      const emailBody = `New lead captured on PULSE\n\nEmail:     ${email}\nSource:    ${source}\nTime:      ${timestamp}\nURL:       https://www.pulsepro.ai\n\n---\nThis is an automated notification from the PULSE website.`

      await fetch('https://api.sendgrid.com/v3/mail/send', {
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
      }).catch((err) => console.error('[Leads] SendGrid error:', err))
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Leads] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
