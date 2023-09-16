//  Layouts
import AlunoLayout from '../../core/layouts/AlunoLayout'
//  Pages
import PerfilPage from '../../components/pages/PerfilPage/PerfilPage'
//  Types
import type { ReactElement } from 'react'

const Perfil = () => {
  return <PerfilPage />
}

Perfil.getLayout = (page: ReactElement) => {
  return <AlunoLayout>{page}</AlunoLayout>
}

export default Perfil
