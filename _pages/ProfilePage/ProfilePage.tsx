import { UserCard, UserTabs } from './components'
import { useMediaQuery, useSetState } from '@mantine/hooks'
import { Modal, em } from '@mantine/core'
import { useState } from 'react'
import {
  StudentSettingsForm,
  CompanySettingsForm,
} from '@/components/SettingsForms'
import { PreviewCard } from './components/UserCard/PreviewCard'
import { useBoundStore } from '@/lib/frontend/store'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { UserType } from '@prisma/client'


const ProfilePage = () => {
  

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const session = useSession()
  const user: User = session.data?.user

  //Getters
  const profileSettingsVisible = useBoundStore((state) => state.profileSettingsVisible)

  //Setters
  const showSettings = useBoundStore((state) => state.showSettings)

  const settingsCloseCallback = () => {
    showSettings(false)
    window.scrollTo(0, 0)
  } 
  return (
    <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4">
      {(!profileSettingsVisible || !isMobile) && <UserCard />}

      {!profileSettingsVisible && (
        <UserTabs isCompany={false} selectCallback={(context,objectId)=> {}} />
      )}

      {profileSettingsVisible &&
        (user.role == UserType.Company ? (
          <CompanySettingsForm onCancel={settingsCloseCallback} />
        ) : (
          <StudentSettingsForm onCancel={settingsCloseCallback} />
        ))}

      <Modal.Root
        opened={false && !!isMobile}
        onClose={()=> {}}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body p={0}>
            <PreviewCard />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      {false && !isMobile && <PreviewCard />}
    </div>
  )
}

export default ProfilePage
