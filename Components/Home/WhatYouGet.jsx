import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import WeAddress from "../../public/img/shutterstock1.jpg";

const WhatYouGet = () => {
  const move = useRef(null);

  return (
    <>
        <div className="what-you-get disappear">
          <div className="wyg-text right">what you get</div>
        </div>
          <div className="we-address-container">
            <div className="we-address-text left">
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
          <Image className="we-address-photo disappear" src={WeAddress} alt="we-address"></Image>
          <div id='teamworks' className="apply-section">
            <div className="apply-container">
              <div className="apply-text right"> 
              [ Apply for our custom software development services now. ]
              </div>
              <Link href="/tech-specialist#contact"><button className="button-banner bb-two left">Contact us</button></Link>
            </div>
          </div>
    </>
  )
}

export default WhatYouGet