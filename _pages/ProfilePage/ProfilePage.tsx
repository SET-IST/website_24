import { UserCard, UserTabs } from './components'
import { useMediaQuery, useSetState } from '@mantine/hooks'
import { Modal, em } from '@mantine/core'
import {
  StudentSettingsForm,
  CompanySettingsForm,
} from '@/components/SettingsForms'
import { PreviewCard } from './components/UserCard/PreviewCard'
import { useBoundStore } from '@/lib/frontend/store'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { UserType } from '@prisma/client'
import { QRDialog } from '@/components/QRDialog'
import { useEffect } from 'react'

const ProfilePage = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const session = useSession()
  const user: User = session.data?.user

  // Getters
  const profileSettingsVisible = useBoundStore(
    (state) => state.profileSettingsVisible
  )
  const selectedCompany = useBoundStore((state) => state.selectedCompany)

  // Setters
  const selectCompany = useBoundStore((state) => state.selectCompany)

  useEffect(() => {
    if (!profileSettingsVisible) {
      window.scrollTo(0, 0)
    }
  }, [profileSettingsVisible])

  return (
    <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4">
      {(!profileSettingsVisible || !isMobile) && <UserCard />}

      {!profileSettingsVisible && <UserTabs />}

      {profileSettingsVisible &&
        (user.role == UserType.Company ? (
          <CompanySettingsForm />
        ) : (
          <StudentSettingsForm />
        ))}

      <Modal.Root
        opened={!!selectedCompany && !!isMobile}
        onClose={() => selectCompany(undefined)}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body p={0}>
            {' '}
            <PreviewCard data={selectedCompany} />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <QRDialog />

      {!!selectedCompany && !isMobile && <PreviewCard data={selectedCompany} />}
    </div>
  )
}

export default ProfilePage
