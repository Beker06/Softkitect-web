import Head from "next/head";
import React, { use, useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({ title, children }) {

  useEffect(() => {
    const animacion = document.querySelectorAll('.right')
    console.log(animacion);

    window.addEventListener('scroll', checkBoxes);

    checkBoxes();

    function checkBoxes(){
      const triggerBottom = window.innerHeight / 20 * 18;

      animacion.forEach(box => {
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
        <main className="layout-content">{children}</main>
        <Footer/>
      </div>
    </>
  );
}
