import React, { useRef } from 'react'

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
    </>
  )
}

export default WhoWeAre