import React from 'react'
import BannerIT from '../Components/IT/BannerIT'
import WebDesign from '../Components/IT/WebDesign'
import Layout from '../Components/Layout'

const it = () => {
  return (
    <>
      <Layout title="IT Outsourcing">
        <BannerIT/>
        <WebDesign/>
      </Layout>
    </>
  )
}

export default it