import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoHorizontal from "../public/img/softkitect-logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className='navbar-container'>
        <div className='logo-container'>
          <Link href="/">
            <Image src={LogoHorizontal} width={"202px"} height={"40px"} alt="softkitec-logo"/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar