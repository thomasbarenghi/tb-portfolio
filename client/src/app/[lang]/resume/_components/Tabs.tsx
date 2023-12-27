'use client'
import { Tab, Tabs } from '@nextui-org/react'

interface TabContent {
  title: string
  content: React.ReactNode
}

interface Props {
  content: TabContent[]
}

const TabsContent = ({ content }: Props) => (
  <div>
    <Tabs
      variant='underlined'
      classNames={{
        cursor: 'hidden',
        tabList: 'p-0 flex gap-5',
        tab: 'p-0  text-base',
        tabContent: '!px-0 group-data-[selected=true]:font-semibold',
        panel: 'px-0 py-5'
      }}
    >
      {content.map((item, index) => (
        <Tab key={index} title={item.title}>
          <>{item.content}</>
        </Tab>
      ))}
    </Tabs>
  </div>
)

export default TabsContent
