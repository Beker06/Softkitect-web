import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoHorizontal from "../public/img/softkitect-logo.png";
import Cellphone from "../public/img/smartphone.png"
import Location from "../public/img/location.png"
import Globe from "../public/img/globe.png"
import Envelope from "../public/img/envelope.png"
import FaLogo from "../public/img/facebook.png"
import InLogo from "../public/img/linkedin.png"

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <nav className='footer-links-container'>
          <div className='footer-logo-container'>
            <Link href="/">
              <Image src={LogoHorizontal} alt="softkitec-logo2" />
            </Link>
          </div>
          <Link href="/" className="inactive">
            HOME
          </Link>
          <Link href="/" className="inactive">
            SERVICES
          </Link>
          <Link href="/#about-us" className="inactive">
            ABOUT US
          </Link>
          <Link href="/it" className="inactive">
            IT TEAMWORKS
          </Link>
          <Link href="/tech-specialist#contact" className="inactive">
            CONTACT US
          </Link>
        </nav>
        <div className='content-footer'>
          <div className='col-footer'>
            <div className='contact-footer-container'>
              <Image className="icon-footer rotado" src={Cellphone} alt="phone-number"/>
              <label className='contact-footer-text'>+52 619.363.8880 ext.120</label>
            </div>
            <div className='contact-footer-container'>
              <Image className="icon-footer" src={Envelope} alt="contact-mail"/>
              <label className='contact-footer-text'>contacto@sofkitect.tech</label>
            </div>
            <div className='contact-footer-container'>
              <Image className="icon-footer" src={Globe} alt="earth-globe"/>
              <label className='contact-footer-text'>www.sofkitect.tech</label>
            </div>
            <div className='contact-footer-container'>
              <Image className="icon-footer" src={Location} alt="address"/>
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
            Copyright Sofkitect © 2023
          </div>
          <div className='icons-footer-container'>
            <Link href="https://www.facebook.com/Softkitect" target="_blank"><Image className="icon-social" src={FaLogo} alt="facebook-ico" /></Link>
            <Link href="https://www.linkedin.com/Softkitect" target="_blank"><Image className="icon-social" src={InLogo} alt="linkedin-ico"/></Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer