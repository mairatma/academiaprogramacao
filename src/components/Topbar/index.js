import { Layout, Menu } from 'antd'
import React from 'react'

import './topbar.css'

function Topbar() {
  return (
    <Layout.Header className="pb-topbar">
      <Menu mode="horizontal">
        <Menu.Item><a href="/">Home</a></Menu.Item>
        <Menu.Item><a href="#cursos">Cursos</a></Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default Topbar
