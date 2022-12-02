import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoHorizontal from "../public/img/softkitect-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <nav className='footer-links-container'>
          <div className='footer-logo-container'>
            <Link href="/">
              <Image src={LogoHorizontal} alt="softkitec-logo" />
            </Link>
          </div>
          <Link href="/" className="inactive">
            HOME
          </Link>
          <Link href="/" className="inactive">
            SERVICES
          </Link>
          <Link href="/about" className="inactive">
            ABOUT US
          </Link>
          <Link href="/it" className="inactive">
            IT TEAMWORKS
          </Link>
          <Link href="/contact" className="inactive">
            CONTACT US
          </Link>
        </nav>
        <div className='content-footer'>
          <div className='col-footer'>
            <div className='contact-footer-container'>
              <label className='contact-footer-text'>+52 619.363.8880 ext.120</label>
            </div>
            <div className='contact-footer-container'>
              <label className='contact-footer-text'>contacto@sofkitect.tech</label>
            </div>
            <div className='contact-footer-container'>
              <label className='contact-footer-text'>www.sofkitect.tech</label>
            </div>
            <div className='contact-footer-container'>
              <label className='contact-footer-text'>Calzada Tecnológico 14487 Local A-11 Parque Internacional Industrial Tijuana, Baja California, México</label>
            </div>
          </div>
          <div className="textfield-footer-container" style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              name="email"
              placeholder="YOUR EMAIL"
            />
            <button type="submit">
              SUBMIT
            </button>
          </div>
        </div>
        <div className='copyright-container'>
          <div className='copyright-text'>
            Copyright Sofkitect 2022
          </div>
          <div className='icons-footer-container'>
            si
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer