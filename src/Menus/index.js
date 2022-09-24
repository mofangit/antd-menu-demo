import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import './index.css'
const { Header, Sider, Content } = Layout

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('Option 1', 'Option 1', <PieChartOutlined />),
  getItem('Option 2', 'Option 2', <DesktopOutlined />),
  getItem('Option 3', 'Option 3', <ContainerOutlined />),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', 'Option 4'),
    getItem('Option 6', 'Option 5'),
    getItem('Option 7', 'Option 6'),
    getItem('Option 8', 'Option 7'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', 'Option 8'),
    getItem('Option 10', 'Option 9'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 11', 'Option 10'),
      getItem('Option 12', 'Option 11'),
    ]),
  ]),
]

const Menus = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [key, setKey] = useState('Option 1')
  const onClick = ({ item, key, keyPath, domEvent }) => {
    setKey(key)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['Option 1']}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {key}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Menus
