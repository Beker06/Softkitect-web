import React from 'react'
import BannerAbout from '../Components/AboutUs/BannerAbout'
import Nearshore from '../Components/AboutUs/Nearshore'
import SoftwareSupport from '../Components/AboutUs/SoftwareSupport'
import Layout from '../Components/Layout'

const about = () => {
  return (
    <>
      <Layout title="About us">
        <BannerAbout/>
        <Nearshore/>
        <SoftwareSupport/>
      </Layout>
    </>
  )
}

export default about