import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import LogoHorizontal from "../public/img/softkitect-logo.png";



const Navbar = () => {
  const router = useRouter();
  const[navActive, setNavActive] = useState(false);

  return (
    <header>
      <nav className='navbar-container'>
        <ul className={`${navActive ? 'desplegado' : ''} navLinksContainer`}>
          <div className='logo-container'>
            <Link href="/">
              <Image src={LogoHorizontal} alt="softkitec-logo"/>
            </Link>
          </div>
          <li><Link href="/" >
            HOME
          </Link></li>
          <li>
            <Link href="">SERVICES</Link>
            <ul className='submenu-services'>
              <li><Link href="/custom-software-development">CUSTOM SOFTWARE DEVELOPMENT SERVICES</Link></li>
              <li><Link href="/mobile-app">MOBILE APP DEVELOPMENT</Link></li>
              <li><Link href="/">IT CONSULTING</Link></li>
              <li><Link href="/">QA AND TESTING SERVICES</Link></li>
              <li><Link href="custom-software-development#software-support">SOFTWARE SUPPORT</Link></li>
              <li><Link href="/mobile-app#web-development">WEB DEVELOPMENT</Link></li>
            </ul>
          </li>
          <li><Link href="/#about-us" >
            ABOUT US
          </Link></li>
          <li><Link href="/" >
            IT TEAMWORKS
          </Link></li>
          <li><Link href="/" >
            CONTACT US
          </Link></li>
          <li><Link href="/" className='get-started-button'>
            GET STARTED
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar