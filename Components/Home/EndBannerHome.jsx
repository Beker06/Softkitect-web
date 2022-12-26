import Link from 'next/link'
import React from 'react'

const EndBannerHome = () => {
    return (
        <>
            <div className="end-home-banner">
                <div className="end-home-banner-row">
                        <div className="end-home-banner-text1 right" >
                            LET’S <label>DISCUSS</label> <br/>YOUR PROJECT IDEA
                        </div>
                        <div className="end-home-banner-text-container2">
                            <div className="end-home-banner-text2">
                                In case you don’t know where to start your project, you can get in touch with our Business Consultant.
                                <br />
                                <br />
                                We’ll set up a quick call to discuss how to make your project work. <br/> op and tablets using the latest technologies compatible.
                            </div>
                            <Link href="/tech-specialist#contact"><button className="button-banner disappear"  style={{marginTop: "85px", marginRight:"80px"}} >Contact us</button></Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default EndBannerHome