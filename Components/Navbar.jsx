import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import LogoHorizontal from "../public/img/softkitect-logo.png";
import BarsIcon from "../public/img/menu.png"


const Navbar = () => {
  const router = useRouter();
  const [navActive, setNavActive] = useState(false);

  return (
    <header>
      <nav className='navbar-container'>
        <div onClick={() => setNavActive(!navActive)}
          className={`${navActive ? "desplegado" : ""} icon-bars`}>
          <Image className={`${navActive ? 'desplegado' : ''} icon-bars`} src={BarsIcon} alt="bars-icon" />
        </div>
        <Link href="/" className='logo-container'>
          <Image className='logo' src={LogoHorizontal} alt="softkitec-logo" />
        </Link>
        <ul className={`${navActive ? 'desplegado' : ''} navLinksContainer`}>
          <li><Link href="/" >
            HOME
          </Link></li>
          <li>
            <label>SERVICES</label>
            <ul className='submenu-services'>
              <li><Link href="/custom-software-development">CUSTOM SOFTWARE DEVELOPMENT SERVICES</Link></li>
              <li><Link href="/mobile-app">MOBILE APP DEVELOPMENT</Link></li>
              <li><Link href="/tech-specialist">IT CONSULTING</Link></li>
              <li><Link href="custom-software-development#software-support">SOFTWARE SUPPORT</Link></li>
              <li><Link href="/mobile-app#web-development">WEB DEVELOPMENT</Link></li>
            </ul>
          </li>
          <li><Link href="/#about-us" >
            ABOUT US
          </Link></li>
          <li><Link href="/#teamworks" >
            IT TEAMWORKS
          </Link></li>
          <li><Link href="/tech-specialist#contact" >
            CONTACT US
          </Link></li>
          <li><Link href="/tech-specialist#contact" className='get-started-button desplegado'>
            GET STARTED
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar