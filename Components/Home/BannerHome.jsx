import Link from 'next/link'
import React from 'react'

const bannerHome = () => {

    return (
        <>
            <div className="home-banner">
                <div className="home-banner-row">
                    <div  className="home-banner-text-container">
                        <div className="home-banner-text1" >YOUR REMOTE</div>
                        <div className="home-banner-text2">IT TEAMS</div>
                        <div className="home-banner-text3">AWAITS</div>
                        <div className="home-banner-text4">Your ideas can change the world, but you need a team by your side.
                            We will help you DRAFT, train and champion, your next remote
                            IT team.
                        </div>
                    </div>
                    <div  className="home-banner-buttons left">
                        <Link href="/tech-specialist#contact"><button className="button-banner">Contact us</button></Link>
                        <Link href="/#hww"><button className="button-banner">How we work</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bannerHome