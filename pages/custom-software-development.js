import React from 'react'
import BannerAbout from '../Components/CustomSoftware/BannerAbout'
import Nearshore from '../Components/CustomSoftware/Nearshore'
import SoftwareSupport from '../Components/CustomSoftware/SoftwareSupport'
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