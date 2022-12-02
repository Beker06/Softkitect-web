import Image from 'next/image'
import React from 'react'
import IconsGrid from "../../public/img/icons-grid.png"

const SoftwareSupport = () => {
  return (
    <>
        <div className='software-grid'>
            <div className='image-grid'>
                <Image src={IconsGrid} alt="software-grid"/>
            </div>
        </div>
    </>
  )
}

export default SoftwareSupport