//  Layouts
import EmpresaLayout from '@/core/layouts/EmpresaLayout'
//  Pages
import PlataformaCvPage from '@/components/pages/PlataformaCvPage/PlataformaCvPage'
//  Types
import type { ReactElement } from 'react'

const PlataformaCv = ({}) => {
  return <PlataformaCvPage />
}

PlataformaCv.getLayout = (page: ReactElement) => {
  return <EmpresaLayout>{page}</EmpresaLayout>
}

export default PlataformaCv
