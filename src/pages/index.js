import * as React from 'react'
import { Layout } from 'antd'

import MainContent from '../components/MainContent'
import Topbar from '../components/Topbar'

import 'antd/dist/antd.css'
import styles from './page.module.css'

const IndexPage = () => {
  return (
    <main>
      <title>Academia de Programacao</title>
      <Layout className={styles.layout}>
        <Topbar/>
        <Layout.Content><MainContent /></Layout.Content>
      </Layout>
    </main>
  )
}

export default IndexPage
