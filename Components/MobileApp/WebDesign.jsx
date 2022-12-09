import Image from 'next/image'
import React from 'react'
import DevGuyOne from '../../public/img/shutterstock9.jpg'
import Developer from '../../public/img/developer2.png'

const WebDesign = () => {
    return (
        <>
            <div id="" className='web-design-container'>
                <div className='web-row'>
                    <div className='web-col'>
                        <div className='web-title'>
                            WEB DESIGN
                        </div>
                        <div className='web-text'>
                            In the digital age, your website is 
                            the first impression of your company. 
                            It tells the world what you stand for 
                            as an organization, and it’s the first 
                            place where your future customers will 
                            look to find about your products and the 
                            services your offer. 
                            <br/><br/>
                            Our team of designers and software 
                            developers will merge your ideas with 
                            technology and Web Design to build a 
                            website that delivers the amazing 
                            experience you want for your customers. 
                            <br/><br/>
                            We work close to you in order to better 
                            understand your ideas and create a 
                            unique and innovative web user 
                            experience that converts your visitors 
                            into leads. Our goal is to build 
                            something that is visually pleasing but 
                            also delivers financially. 
                            <br/><br/>
                            Work with a creative website development 
                            company. Invest in something valuable 
                            and unique. 
                            <br/><br/>
                            Let’s create amazing interactive web 
                            experiences for your customers on mobile, 
                            desktop and tablets using the latest 
                            technologies compatible.
                        </div>
                    </div>
                    <div className='web-photo-container'>
                        <Image  src={Developer} alt="developer" />
                    </div>
                </div>
                <div className='appointment'>
                    <div className='appointment-text'>
                        [ Make an appointment NOW! ]
                    </div>
                </div>
                <Image className="devguy1-photo" src={DevGuyOne} alt="dev-guy-one" />
            </div>
        </>
    )
}

export default WebDesign