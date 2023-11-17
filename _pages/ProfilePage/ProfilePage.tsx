import { UserCard, UserTabs } from './components'
import { useMediaQuery } from '@mantine/hooks'
import { SettingsForm } from '@/components/student'
import { em } from '@mantine/core'
import { useState } from 'react'

const ProfilePage = () => {
  const [showSettings, setShowSettings] = useState(false)
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <div className="w-full h-full flex flex-col sm:flex-row sm:gap-4">
      {(!showSettings || !isMobile) && (
        <UserCard
          openSettings={() => {
            setShowSettings(true)
            window.scrollTo(0, 0)
          }}
        />
      )}
      {showSettings ? (
        <SettingsForm
          onCancel={() => {
            setShowSettings(false)
            window.scrollTo(0, 0)
          }}
        />
      ) : (
        <UserTabs />
      )}
    </div>
  )
}

export default ProfilePage
