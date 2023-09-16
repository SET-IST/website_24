//  Layouts
import EmpresaLayout from '@/core/layouts/EmpresaLayout'
//  Pages
import EmpresaPerfilPage from '@/components/pages/EmpresaPerfilPage/EmpresaPerfilPage'
//  Types
import type { ReactElement } from 'react'

const Perfil = ({}) => {
  return <EmpresaPerfilPage />
}

Perfil.getLayout = (page: ReactElement) => {
  return <EmpresaLayout>{page}</EmpresaLayout>
}

export default Perfil
