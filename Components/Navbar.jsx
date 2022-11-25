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
        <div className={`${navActive ? 'desplegado' : ''} navLinksContainer`}>
          <div className='logo-container'>
            <Link href="/">
              <Image src={LogoHorizontal} alt="softkitec-logo"/>
            </Link>
          </div>
          <Link href="/" onClick={() => setNavActive(!navActive)} className={router.pathname == "/" ? "active" : "inactive"}>
            HOME
          </Link>
          <Link href="/" onClick={() => setNavActive(!navActive)} className={ router.pathname == "/" ? "active" : "inactive" }>
            SERVICES
          </Link>
          <Link href="/about" onClick={() => setNavActive(!navActive)} className={router.pathname == "/about" ? "active" : "inactive"}>
            ABOUT US
          </Link>
          <Link href="/it" onClick={() => setNavActive(!navActive)} className={router.pathname == "/it" ? "active" : "inactive"}>
            IT TEAMWORKS
          </Link>
          <Link href="/contact" onClick={() => setNavActive(!navActive)} className={router.pathname == "/contact" ? "active" : "inactive"}>
            CONTACT US
          </Link>
          <Link href="/" onClick={() => setNavActive(!navActive)} className={router.pathname == "/" ? "active" : "inactive"}>
            GET STARTED
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar