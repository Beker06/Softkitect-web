import React, { useRef } from 'react'
import Transformation from "../../public/img/digital-icon-gray.png"

const WhoWeAre = () => {
  const move = useRef(null);
  return (
    <>
      <div id="about-us" className="who-we-are">
        <div className="wwa-photo"></div>
        <div ref={move} className="wwa-info right">
          <div className="wwa-title">WHO WE ARE</div>
          <div className="wwa-text">
            We are a trusted technology partner to leading enterprises, SMBs
            and technology innovators. <br />
            <br />
            We are here to help you solve your business´s challenges with
            innovative technology solutions, product design, DevOps, quality
            assurance, testing, and IT consulting services.
          </div>
        </div>
      </div>
      <div className="advantages-container">
        <div className="features-card">
          <div className='features-photo digital'></div>
          <div className="features-card-title">
            digital <br/>transformation
          </div>
          <div className="features-card-text">
          <br/>Surf the digital wave! No matter the size of your company, we can help you reimagine your business in the digital age and digitalize 
          all business´s processes to meet customer and market expectations. Small businesses, Startups and Entrepreneurs are welcome.
          </div>
        </div>
        <div className="features-card">
          <div className='features-photo multiplatform'></div>
          <div className="features-card-title">
            multi-platform <br/>software solutions
          </div>
          <div className="features-card-text">
          <br/>At Softkitect we develop software solutions that work on multiple platforms. We will help you 
          design and create tailored software that smoothly adapts to the needs of your busines and all the 
          different mobile devices.
          </div>
        </div>
        <div className="features-card">
          <div className='features-photo business'></div>
          <div className="features-card-title">
            business intelligence services
          </div>
          <div className="features-card-text">
          <br/>We help you create and implement business intelligence solutions that will help your 
          business unlock the power of making data-driven decision. Data sources, Analytics, and much more.
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre