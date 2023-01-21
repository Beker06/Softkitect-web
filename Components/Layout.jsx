import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import MessengerP from "./MessengerP";
import Navbar from "./Navbar";


export default function Layout({ title, children }) {

  useEffect(() => {
    const animacion = document.querySelectorAll('.right')
    console.log(animacion);

    const animacion2 = document.querySelectorAll('.left')
    console.log(animacion2)

    const animacion3 = document.querySelectorAll('.disappear')
    console.log(animacion3)

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    function checkBoxes(){
      const triggerBottom = window.innerHeight / 40 * 35;

      animacion.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
          box.classList.add('show');
        }else{
          box.classList.remove('show')
        }
      })

      animacion2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
          box.classList.add('show');
        }else{
          box.classList.remove('show')
        }
      })

      animacion3.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
          box.classList.add('show');
        }else{
          box.classList.remove('show')
        }
      })

    }
  }, []);

  return (
    <>
      <Head>
        <title>{title ? title + " | Softkitec" : "Softkitec"}</title>
        <meta name="description" content="Softkitec Web Page" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <div className="layout-container">
        <Navbar/>
        {/* <MessengerP/> */}
        <main className="layout-content">{children}</main>
        <Footer/>
      </div>
    </>
  );
}
