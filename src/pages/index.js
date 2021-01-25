import * as React from 'react'
import { Layout } from 'antd'

import MainContent from '../components/MainContent'
import Topbar from '../components/Topbar'

import 'antd/dist/antd.css'
import './page.css'

const { Header, Content } = Layout

const IndexPage = () => {
  return (
    <main className="pb-page">
      <title>Academia de Programacao</title>
      <Layout className="pb-page__layout">
        <Topbar/>
        <Content><MainContent /></Content>
      </Layout>
    </main>
  )
}

export default IndexPage
