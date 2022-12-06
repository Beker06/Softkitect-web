import Image from 'next/image'
import React from 'react'
import DesignTeam from '../../public/img/shutterstock3.jpg'
import  NeedsPhotoOne from '../../public/img/shutterstock4.jpg'
import  NeedsPhotoTwo from '../../public/img/shutterstock7.jpg'

const BannerMobile = () => {
    return (
        <>
            <div className="mobile-banner">
                <div className="mobile-banner-row">
                    <div className="mobile-banner-text-container">
                        <div className="about-banner-text2" >movil app</div>
                        <div className="about-banner-text1">development</div>
                    </div>
                </div>
            </div>
            <div className='some-benefits' style={{backgroundColor: "#F5C742"}}>
                <div className='some-benefits-text'>
                    Some Benefits of Hiring Remote Software
                    Developers in Baja
                </div>
            </div>
            <div className='customers-needs'>
                <div className='needs-col-photos'>
                    <Image className="needs-photo1" src={NeedsPhotoOne} alt="needs-photo-one" />
                    <Image className="needs-photo2" src={NeedsPhotoTwo} alt="needs-photo-two" />
                </div>
                <div className='needs-col-text'>
                    Technology helps us to make things 
                    better and faster. Through it we connect, 
                    we make a difference in other people’s 
                    lives. It also empowers us to transform 
                    our ideas into something amazing and real 
                    to change our worlds. 
                    <br/><br/>
                    Transform your entrepreneurial ideas into 
                    powerful apps An experienced mobile app 
                    development company like us will help you 
                    transform your entrepreneurial ideas into 
                    powerful apps for iOS, Android and the web. 
                    We will help you combine UI/UX design and 
                    mobile app development to improve your 
                    business operations and start creating 
                    amazing experiences for your customers and 
                    the world. 
                    <br/><br/>
                    <label>Meet your customers’ needs.</label>
                    <br/>
                    Move beyond your desktop to meet your 
                    customers’ needs. You can take advantage of 
                    Mobile technology to start connecting and 
                    engaging with the world around you. Rely on 
                    our talented group of mobile app developers 
                    and start launching your own apps in the 
                    Apple and Google Play Stores in a short 
                    period of time. We use the agile software 
                    development lean methodology.
                </div>
            </div>
            <Image className="designteam-photo" src={DesignTeam} alt="design-team" />
        </>
    )
}

export default BannerMobile