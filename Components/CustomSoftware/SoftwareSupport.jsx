import Image from 'next/image'
import React from 'react'
import IconsGrid from "../../public/img/icons-grid.png"
import Laptop from "../../public/img/laptop.png"

const SoftwareSupport = () => {
  return (
    <>
      <div id='software-support' className='software-support-container'>
        <div className='software-support-row'>
          <div className='software-support-title disappear'>
            <div><label>SOFTWARE</label> SUPPORT</div>
          </div>
        </div>
        <div className='software-support-row'>
          <div className='software-support-text right'>
          Constant monitoring ensures that you avoid 
          expensive downtime because issues can be fixed 
          before they become a problem. At DevCom, we seek 
          to help businesses make the right investments 
          through our expert IT consulting and access to a 
          wide range of IT services. 
          <br/><br/>
          Our mission is to be your IT partner for the long 
          term. That is why we seek to understand your 
          business inside out. We can fully diagnose your 
          system and operations, understand your every need, 
          and work towards building the right solution. As a 
          full-service IT company, we manages your network 
          system and offer a comprehensive array of managed 
          IT support services. Our team of professionals can 
          deliver IT support for your desktop, mobile and web 
          applications. We offer you the services of our 
          software consultants as well as our best experts in 
          QA, security, DevOps, cloud and databases.
          </div>
          <div className='software-support-laptop left'>
            <Image src={Laptop} alt="laptop"/>
          </div>
        </div>
      </div>
      <div className='get-visually disappear'>
        [ Get a visually stunning & functionally 
        effective mobile app for Android, iOS or 
        Windows. ]
      </div>
      <div className='software-grid'>
        <div className='image-grid disappear'>
          <Image src={IconsGrid} alt="software-grid" />
        </div>
      </div>
    </>
  )
}

export default SoftwareSupport