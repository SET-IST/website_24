//  Layouts
import { StudentLayout } from '@/_pages/layouts'
//  Pages
import ProfilePage from '@/_pages/ProfilePage'
//  Types
import type { ReactElement } from 'react'

const StudentProfile = () => {
  return <ProfilePage />
}

StudentProfile.getLayout = (page: ReactElement) => {
  return <StudentLayout>{page}</StudentLayout>
}

export default StudentProfile
