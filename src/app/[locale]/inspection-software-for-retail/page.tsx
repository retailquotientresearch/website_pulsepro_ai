'use client'
import ICPPage from '@/components/ICPPage'
import { ICP_DATA } from '@/data/icpData'

export default function Page() {
  return <ICPPage data={ICP_DATA['retail']} />
}
