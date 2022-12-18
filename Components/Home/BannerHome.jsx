import React, { useRef } from 'react'

const bannerHome = () => {
    const move = useRef(null);

    return (
        <>
            <div className="home-banner">
                <div className="home-banner-row">
                    <div ref={move} className="home-banner-text-container right">
                        <div className="home-banner-text1" >YOUR REMOTE</div>
                        <div className="home-banner-text2">IT TEAMS</div>
                        <div className="home-banner-text3">AWAITS</div>
                        <div className="home-banner-text4">Your ideas can change the world, but you need a team by your side.
                            We will help you DRAFT, train and champion, your next remote
                            IT team.
                        </div>
                    </div>
                    <div  ref={move} className="home-banner-buttons right">
                        <button className="button-banner">Contact us</button>
                        <button className="button-banner">How we work</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bannerHome