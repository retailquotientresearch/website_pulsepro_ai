'use client'

import ICPPage from '@/components/ICPPage'
import { FEATURE_DATA } from '@/data/featureData'

export default function AttendanceTrackingPage() {
  return <ICPPage data={FEATURE_DATA['attendance']} />
}
