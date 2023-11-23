import { Paper, Tabs, em, rem } from '@mantine/core'
import { ReactNode, useState } from 'react'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'
import { VisitedStands } from './VisitedStands'
import { UserActivities } from './UserActivities'

interface Tab {
  title: string
  ref: string
  component?: ReactNode
}

interface UserTabsProps {
  selectCallback: (context: string, objectId: string) => void
}

const UserTabs = ({ selectCallback }: UserTabsProps) => {
  const iconStyle = { width: rem(12), height: rem(12) }
  const [activeTab, setActiveTab] = useState<string | null>('visited')
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const [scroll, scrollTo] = useWindowScroll()

  const selectObject = (objectId: string) => {
    activeTab && selectCallback(activeTab, objectId)
  }

  const tabs: Tab[] = [
    {
      title: 'Bancas visitadas',
      ref: 'visited',
      component: <VisitedStands selectCallback={selectObject} />,
    },
    { title: 'Inscrições', ref: 'activities', component: <UserActivities /> },
  ]

  return (
    <Paper
      className="w-full h-fit sm:h-full !rounded-none sm:!rounded-lg"
      radius="md"
      withBorder={!isMobile}
      pt={2}
      bg="var(--mantine-color-body)"
    >
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        variant="default"
        defaultValue="gallery"
        color="blue.6"
        className="h-full"
      >
        <Tabs.List
          className="!sticky top-15 z-20 sm:relative sm:top-0 w-full !bg-[color:var(--mantine-color-white)] rounded-md"
          grow={isMobile}
        >
          {tabs.map((tab, index) => (
            <Tabs.Tab
              className="!text-[color:var(--mantine-color-gray-6)] font-semibold data-[active]:!text-[#00415a] !text-sm"
              key={`tab_${index}`}
              value={tab.ref}
            >
              {tab.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabs.map((tab, index) => (
          <Tabs.Panel
            className="sm:max-h-[calc(100%-2.6rem)] sm:overflow-y-scroll"
            key={`panel_${index}`}
            value={tab.ref}
          >
            {tab.component}
          </Tabs.Panel>
        ))}
      </Tabs>
    </Paper>
  )
}

export { UserTabs }
