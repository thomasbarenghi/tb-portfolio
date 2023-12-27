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
  <section>
    <Tabs
      variant='underlined'
      classNames={{
        base: 'flex',
        cursor: 'hidden',
        tabList: 'p-0 flex gap-5 overflow-x-auto',
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
  </section>
)

export default TabsContent
