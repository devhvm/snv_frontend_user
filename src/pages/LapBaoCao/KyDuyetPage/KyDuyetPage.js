import React, { useEffect } from 'react'
import { Layout } from 'antd'
import TabsList from '../../../components/MauPhatHanh/TabsList'
import KyDuyetMenuSider from '../../../components/MauPhatHanh/MenuSider/kyDuyet'

export default function KyDuyetPage ({
  data,
  tab,
  fecthTab,
  addNewTab,
  removeTab,
  changeActiveTab,
  getCoQuanChuTri,
  getMauPhatHanh,
  getLoaiBaoCao,
  getTieuChi
}) {
  // console.log('data', data)

  useEffect(() => {
    // getMauPhatHanh()
  })

  return (
    <Layout>
      <Layout.Content style={{ background: '#fff' }}>
        <TabsList
          tab={tab}
          fecthTab={fecthTab}
          removeTab={removeTab}
          changeActiveTab={changeActiveTab}
        />
      </Layout.Content>
      <Layout.Sider
        width={300}
        style={{
          borderLeft: '1px solid #e8e8e8',
          marginLeft: '10px',
          background: '#fff'
        }}
        // collapsed={collapsed}
      >
        <Layout.Content>
          <KyDuyetMenuSider
            getCoQuanChuTri={getCoQuanChuTri}
            addNewTab={addNewTab}
            tabList={tab.tabList}
            changeActiveTab={changeActiveTab}
            getLoaiBaoCao={getLoaiBaoCao}
          />
        </Layout.Content>
      </Layout.Sider>
    </Layout>
  )
}