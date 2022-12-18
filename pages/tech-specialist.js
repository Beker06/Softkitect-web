import React from 'react'
import Layout from '../Components/Layout'
import BannerTech from '../Components/TechSpecialist/BannerTech'
import Contact from '../Components/TechSpecialist/Contact'
import EndBannerTech from '../Components/TechSpecialist/EndBannerTech'
import Surfer from '../Components/TechSpecialist/Surfer'

const techSpecialist = () => {
  return (
    <>
        <Layout title="Tech Specialist">
            <BannerTech/>
            <Surfer/>
            <EndBannerTech/>
            <Contact/>
        </Layout>
    </>
  )
}

export default techSpecialist