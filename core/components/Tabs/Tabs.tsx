import { useRef, useState } from 'react'
//  Components
import TabItem from '../TabItem'
//  Types
import type { ReactNode } from 'react'
import classNames from 'classnames'

type TabsProps = {
  defaultTab?: number
  tabsConfig: { title: string; content: ReactNode }[]
  trailingIcon?: ReactNode
  wrapperClassName?: string
}

const Tabs = ({ tabsConfig, defaultTab, trailingIcon, wrapperClassName }: TabsProps) => {
  const tabRefs = useRef<any>([])
  const [activeTab, setActiveTab] = useState(defaultTab || 0)

  const handleClick = (idx: number) => setActiveTab(idx)

  const onKeyDown = (event: KeyboardEvent) => {
    const count = tabsConfig.length
    const nextTab = () => setActiveTab((activeTab + 1) % count)
    const prevTab = () => setActiveTab((activeTab - 1 + count) % count)
    const firstTab = () => setActiveTab(0)
    const lastTab = () => setActiveTab(count - 1)

    const keyMap: { [key: KeyboardEvent['key']]: () => void } = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    }

    const action = keyMap[event.key]

    if (action) {
      event.preventDefault()
      action()
    }
  }

  return (
    <>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={classNames("flex space-x-4", wrapperClassName)}
      >
        {tabsConfig.map((tab, index) => (
          <TabItem
            key={tab.title}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => handleClick(index)}
            role="tab"
            ref={(element: any) => (tabRefs.current[index] = element)}
            aria-controls={`panel-id-${index}`}
            aria-selected={activeTab === index}
            id={`tab-id-${index}`}
            onKeyDown={onKeyDown}
            onFocus={() => setActiveTab(index)}
            tabIndex={activeTab === index ? 0 : -1}
          />
        ))}
        {trailingIcon && <span className="pl-2">{trailingIcon}</span>}
      </div>
      {tabsConfig.map((tab, index) => (
        <section
          key={`tabpanel-${index}`}
          hidden={index !== activeTab}
          role="tabpanel"
          aria-labelledby={`tab-id-${index}`}
          id={`panel-id-${index}`}
          tabIndex={0}
        >
          {tab.content}
        </section>
      ))}
    </>
  )
}

Tabs.displayName = 'Tabs'

export default Tabs
export type { TabsProps }
