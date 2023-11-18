//  Layouts
import { StudentLayout } from '@/_pages/layouts'
//  Pages
import ProfilePage from '@/_pages/ProfilePage'
//  Types
import type { ReactElement } from 'react'

const StudentProfile = () => {
  return <ProfilePage isCompany={false} />
}

StudentProfile.getLayout = (page: ReactElement) => {
  return <StudentLayout>{page}</StudentLayout>
}

export default StudentProfile
