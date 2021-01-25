import { Layout, Menu } from 'antd'
import React from 'react'

import './topbar.css'

function Topbar() {
  return (
    <Layout.Header className="pb-topbar">
      <Menu mode="horizontal">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Cursos</Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default Topbar
