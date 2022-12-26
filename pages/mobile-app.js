import React from 'react'
import WebDesign from '../Components/MobileApp/WebDesign'
import Layout from '../Components/Layout'
import BannerMobile from '../Components/MobileApp/BannerMobile'

const it = () => {
  return (
    <>
      <Layout title="Mobile App">
        <BannerMobile/>
        <WebDesign/>
      </Layout>
    </>
  )
}

export default it