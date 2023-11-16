//  Layouts
import AlunoLayout from '@/core/layouts/AlunoLayout'
//  Pages
import ScanPage from '@/components/pages/ScanPage/ScanPage'
//  Types
import type { ReactElement } from 'react'

const Scan = () => {
  return <ScanPage />
}

Scan.getLayout = (page: ReactElement) => {
  return <AlunoLayout>{page}</AlunoLayout>
}

export default Scan
