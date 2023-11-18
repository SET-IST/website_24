//  Layouts
import { CompanyLayout } from '@/_pages/layouts'
//  Pages
import ProfilePage from '@/_pages/ProfilePage'
//  Types
import type { ReactElement } from 'react'

const CompanyProfile = () => {
  return <ProfilePage isCompany={true} />
}

CompanyProfile.getLayout = (page: ReactElement) => {
  return <CompanyLayout>{page}</CompanyLayout>
}

export default CompanyProfile
