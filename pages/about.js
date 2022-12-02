import React from 'react'
import BannerAbout from '../Components/AboutUs/BannerAbout'
import SoftwareSupport from '../Components/AboutUs/SoftwareSupport'
import Layout from '../Components/Layout'

const about = () => {
  return (
    <>
      <Layout title="About us">
        <BannerAbout/>
        <SoftwareSupport/>
      </Layout>
    </>
  )
}

export default about