import { UserCard, UserTabs } from './components'
import { useMediaQuery } from '@mantine/hooks'
import { em } from '@mantine/core'
import { useState } from 'react'
import {
  StudentSettingsForm,
  CompanySettingsForm,
} from '@/components/SettingsForm'

interface ProfilePageProps {
  isCompany: boolean
}

const ProfilePage = ({ isCompany }: ProfilePageProps) => {
  const [showSettings, setShowSettings] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const settingsCloseCallback = () => {
    setShowSettings(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4">
      {(!showSettings || !isMobile) && (
        <UserCard
          isCompany={isCompany}
          openSettings={() => {
            setShowSettings(true)
            window.scrollTo(0, 0)
          }}
        />
      )}
      {showSettings ? (
        isCompany ? (
          <CompanySettingsForm onCancel={settingsCloseCallback} />
        ) : (
          <StudentSettingsForm onCancel={settingsCloseCallback} />
        )
      ) : (
        <UserTabs />
      )}
    </div>
  )
}

export default ProfilePage
