'use client'

import ICPPage from '@/components/ICPPage'
import { FEATURE_DATA } from '@/data/featureData'

export default function OperationsAnnouncementsPage() {
  return <ICPPage data={FEATURE_DATA['announcements']} />
}
