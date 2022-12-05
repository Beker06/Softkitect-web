import React from 'react'
import BannerAbout from '../Components/AboutUs/BannerAbout'
import Nearshore from '../Components/AboutUs/Nearshore'
import SoftwareSupport from '../Components/AboutUs/SoftwareSupport'
import Layout from '../Components/Layout'

const customSoftwareDeveloment = () => {
  return (
    <>
      <Layout title="Custom Software Development">
        <BannerAbout/>
        <Nearshore/>
        <SoftwareSupport/>
      </Layout>
    </>
  )
}

export default customSoftwareDeveloment