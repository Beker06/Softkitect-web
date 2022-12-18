import Image from 'next/image';
import React, { useRef } from 'react'
import WeAddress from "../../public/img/shutterstock1.jpg";

const WhatYouGet = () => {
  const move = useRef(null);

  return (
    <>
        <div className="what-you-get">
          <div className="wyg-text">what you get</div>
        </div>
          <div className="we-address-container">
            <div className="we-address-text">
              We address your software development project in a personalized way.
              We will tailor solutions to your business’ needs, as well as
              integrate it into your ongoing project. Plus, we will guide you
              through the entire development lifecycle.<br/><br/>You can request our
              services at any stage of the project: analysis, design, development,
              testing, implementation or support. At <label>Sofkitect</label>, custom software
              development means that you are in charge of your project; and we
              make sure you are successful.
            </div>
          </div>
          <Image className="we-address-photo" src={WeAddress} alt="we-address" />
          <div className="apply-section">
            <div className="apply-container">
              <div className="apply-text">
              [ Apply for our custom software development services now. ]
              </div>
              <button className="button-banner">Contact us</button>
            </div>
          </div>
    </>
  )
}

export default WhatYouGet