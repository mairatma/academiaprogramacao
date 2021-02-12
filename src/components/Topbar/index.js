import { Layout, Menu } from 'antd'
import React from 'react'

import styles from './topbar.module.css'

function Topbar() {
  return (
    <Layout.Header className={styles.main}>
      <Menu mode="horizontal">
        <Menu.Item><a href="/">Home</a></Menu.Item>
        <Menu.Item><a href="#cursos">Cursos</a></Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default Topbar
