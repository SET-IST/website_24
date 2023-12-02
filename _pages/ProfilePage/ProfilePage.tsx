import { UserCard, UserTabs } from './components'
import { useMediaQuery, useSetState } from '@mantine/hooks'
import { Modal, em } from '@mantine/core'
import { useState } from 'react'
import {
  StudentSettingsForm,
  CompanySettingsForm,
} from '@/components/SettingsForms'

interface ProfilePageProps {
  isCompany: boolean
}

enum ProfileView {
  TABS,
  SETTINGS,
  DETAILS,
}

interface IDetails {
  context?: string
  objectId?: string
}

const ProfilePage = ({ isCompany }: ProfilePageProps) => {
  const [currentView, setCurrentView] = useState<ProfileView>(ProfileView.TABS)
  const [details, setDetails] = useSetState<IDetails>({})
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const selectCallback = (context: string, objectId: string) => {
    setDetails({
      context: context,
      objectId: objectId,
    })
    setCurrentView(ProfileView.DETAILS)
  }

  const detailsCloseCallback = () => {
    setCurrentView(ProfileView.TABS)
    setDetails({
      context: '',
      objectId: '',
    })
  }

  const settingsCloseCallback = () => {
    setCurrentView(ProfileView.TABS)
    window.scrollTo(0, 0)
  }

  return (
    <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4">
      {(currentView !== ProfileView.SETTINGS || !isMobile) && (
        <UserCard
          isPreview={false}
          isCompany={isCompany}
          openSettings={() => {
            setCurrentView(ProfileView.SETTINGS)
            window.scrollTo(0, 0)
          }}
        />
      )}

      {currentView !== ProfileView.SETTINGS && (
        <UserTabs isCompany={isCompany} selectCallback={selectCallback} />
      )}

      {currentView === ProfileView.SETTINGS &&
        (isCompany ? (
          <CompanySettingsForm onCancel={settingsCloseCallback} />
        ) : (
          <StudentSettingsForm onCancel={settingsCloseCallback} />
        ))}

      <Modal.Root
        opened={currentView === ProfileView.DETAILS && !!isMobile}
        onClose={detailsCloseCallback}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body p={0}>
            <UserCard
              userId={details.objectId}
              closeCallback={detailsCloseCallback}
              isPreview={true}
              isCompany={true}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      {currentView === ProfileView.DETAILS && !isMobile && (
        <UserCard
          userId={details.objectId}
          closeCallback={detailsCloseCallback}
          isPreview={true}
          isCompany={true}
        />
      )}
    </div>
  )
}

export default ProfilePage
