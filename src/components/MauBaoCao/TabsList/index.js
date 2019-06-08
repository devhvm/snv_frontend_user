import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import TabItem from '../TabItem'

const TabPane = Tabs.TabPane

export default function TabList ({
  tab,
  fecthTab,
  removeTab,
  changeActiveTab
}) {
  const tabList = tab.tabList
  const activeTab = tab.activeTab

  useEffect(() => {
    fecthTab()
  }, [])

  // const [activeTab, setActiveTab] = useState(1)

  const onEdit = (targetKey, action) => {
    if (action === 'remove') remove(targetKey)
  }

  // const add = () => {
  //   const panes = tabList
  //   const activeKey = String(Math.random())
  //   panes.push({ title: tab.tenMau, content: 'Content of new Tab', key: tab.maMau })
  //   changeActiveTab(activeKey)
  //   changeTabList(panes)
  // }

  const remove = targetKey => {
    removeTab(tabList, targetKey, activeTab)
    changeActiveTab(targetKey)
  }

  return (
    <>
      <Tabs defaultActiveKey='1' type='editable-card' hideAdd onEdit={onEdit}>
        {tabList &&
          tabList.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              <TabItem />
            </TabPane>
          ))}
      </Tabs>
    </>
  )
}
