//  Layouts
import { StudentLayout } from '@/_pages/layouts'
//  Pages
import ScanPage from '@/components/pages/ScanPage/ScanPage'
//  Types
import type { ReactElement } from 'react'

const Scan = () => {
  return <ScanPage />
}

Scan.getLayout = (page: ReactElement) => {
  return <StudentLayout>{page}</StudentLayout>
}

export default Scan
