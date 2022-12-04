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
          <li className='logo-container'>
            <Link href="/">
              <Image src={LogoHorizontal} alt="softkitec-logo"/>
            </Link>
          </li>
          <li><Link href="/" onClick={() => setNavActive(!navActive)} className={router.pathname == "/" ? "active" : "inactive"}>
            HOME
          </Link></li>
          <li className='si'><Link href="/">SERVICES</Link>
            <ul className='menu-services'>
              <li><Link href="/about">CUSTOM SOFTWARE DEVELOPMENT SERVICES</Link></li>
              <li><Link href="/">MOBILE APP DEVELOPMENT</Link></li>
              <li><Link href="/">IT CONSULTING</Link></li>
              <li><Link href="#">QA AND TESTING SERVICES</Link></li>
              <li><Link href="#">WEB DEVELOPMENT</Link></li>
            </ul>
          </li>
          <li><Link href="/about" onClick={() => setNavActive(!navActive)} className={router.pathname == "/about" ? "active" : "inactive"}>
            ABOUT US
          </Link></li>
          <li><Link href="/it" onClick={() => setNavActive(!navActive)} className={router.pathname == "/it" ? "active" : "inactive"}>
            IT TEAMWORKS
          </Link></li>
          <li><Link href="/contact" onClick={() => setNavActive(!navActive)} className={router.pathname == "/contact" ? "active" : "inactive"}>
            CONTACT US
          </Link></li>
          <li><Link href="/">
            GET STARTED
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar