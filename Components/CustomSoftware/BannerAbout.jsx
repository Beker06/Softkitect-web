import Image from 'next/image'
import React from 'react'
import SoftkitecTeam from "../../public/img/shutterstock12.jpg"

const BannerAbout = () => {
    return (
        <>
            <div className="about-banner">
                <div className="about-banner-row">
                    <div className="about-banner-text-container">
                        <div className="about-banner-text1" >custom software</div>
                        <div className="about-banner-text2">development</div>
                        <div className="about-banner-text3">services</div>
                        <div className="about-banner-text4">With <label>Sofkitect</label> custom software
                            engineering expertise, industry domain knowledge, and strong
                            scientific proficiency, we create market advantages for our customers worldwide
                        </div>
                    </div>
                </div>
            </div>
            <div className='softkitec-team'>
                <div className='softkitec-team-text'>
                    The Sofkitect team addresses your software development project in a custom manner. 
                    We’re ready to tailor a software solution specific to your business needs as well 
                    as integrate into your ongoing project. Moreover, we’re able to walk you through the 
                    full software development lifecycle. You can request our services at any stage of your 
                    project: analysis, design, development, testing, deployment, or support. At Sofkitect, 
                    custom software development means you are in charge of your project; and we make sure you 
                    succeed. Request our custom software development services now.
                </div>
            </div>
            <Image className="softkitec-team-photo" src={SoftkitecTeam} alt="softkitec-team" />
        </>
    )
}

export default BannerAbout