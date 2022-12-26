import React from 'react'
import Image from 'next/image'
import SurferGuy from "../../public/img/surfer.png"
import Gear from "../../public/img/gear.png"
import Saas from "../../public/img/saas.png"
import DevOps from "../../public/img/devops.png"
import ApiCloud from "../../public/img/api.png"
import LinePink from "../../public/img/linepink.png"
import LineOrange from "../../public/img/lineorange.png"
import LineBlue from "../../public/img/lineblue.png"
import LineGreen from "../../public/img/linegreen.png"


const Surfer = () => {
  return (
    <>
      <div className='surfer-container'>
        <div className='surfer-col col-one right'>
          <div className='surfer-card cardOne'>
            <Image className='icon-surfer iconOne' src={Gear} alt="gear-icon"/>
            <Image className='line line-pink' src={LinePink} alt="line-pink"/>
            <div className='surfer-title'>
              Cloud Hosting
            </div>
            <div className='surfer-text'>
              As a dedicated cloud hosting service integrator for Amazon Web Services (AWS) and Microsoft Azure, 
              we apply our significant experience to accomplish your serverless operations goals. Our experts will 
              help with the strategy, timing, and roadmap, making your migration to the Cloud quick and effortless. 
              So you can focus on maximizing competitive capability and innovation.
            </div>
          </div>
          <div className='surfer-card cardTwo'>
            <Image className='icon-surfer iconTwo' src={DevOps} alt="devops-icon"/>
            <Image className='line line-blue' src={LineBlue} alt="line-blue"/>
            <div className='surfer-title'>
              DevOps 
            </div>
            <div className='surfer-text'>
              Our DevOps Consulting Services range from fully autonomous, cross-functional teams to individual 
              DevOps Engineers that can seamlessly integrate into your project to evaluate risks and identify possible 
              roadblocks. We are experts in CI\CD, data maintenance and archiving, network security, migration 
              from on-premise to Cloud, logs processing, and more.
            </div>
          </div>
        </div>
        <Image src={SurferGuy} className="surfer-photo disappear" alt="surfer-guy"/>
        <div className='surfer-col col-two right'>
          <div className='surfer-card cardThree'>
            <Image className='icon-surfer iconThree' src={Saas} alt="saas-icon"/>
            <Image className='line line-orange' src={LineOrange} alt="line-Orange"/>
            <div className='surfer-title'>
              SaaS Development 
            </div>
            <div className='surfer-text'>
              DevCom top talents are passionate about SaaS development, especially ERP and CRM. Our expertise in 
              developing SaaS applications allows us to provide rapid time to market and reduce product development 
              risk. We plan and develop applications using the right architecture for your organization. We relate 
              with your vision and understand the problem you are solving.
            </div>
          </div>
          <div className='surfer-card cardFour'>
            <Image className='icon-surfer iconFour' src={ApiCloud} alt="api-icon"/>
            <Image className='line line-green' src={LineGreen} alt="line-green"/>
            <div className='surfer-title'>
              API Integration 
            </div>
            <div className='surfer-text'>
              Our battle-proven API engineering team develop enterprise-grade APIs that are easy to consume, 
              well documented, and truly reliable. We work with Restful API, OAuth, Open API specification, 
              Single Sign-On, Swagger API documentation, PostMan collections & documentation, BlazeMeter. 
              Our APIs facilitate access to application data, functionality and business logic, as well as web services.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Surfer