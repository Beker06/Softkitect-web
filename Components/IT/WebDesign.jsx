import Image from 'next/image'
import React from 'react'
import DevGuyOne from '../../public/img/shutterstock9.jpg'

const WebDesign = () => {
    return (
        <>
            <div className='appointment'>
                <div className='appointment-text'>
                    [ Make an appointment NOW! ]
                </div>
            </div>
            <Image className="devguy1-photo" src={DevGuyOne} alt="dev-guy-one" />
        </>
    )
}

export default WebDesign