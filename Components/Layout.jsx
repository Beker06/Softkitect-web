import Head from "next/head";
import React, { use, useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const move = useRef(null);

useEffect(() => {
  console.log('Contenedor: ', move.current);
});

// const boxes = document.querySelectorAll('.right');

// window.addEventListener('scroll', checkBoxes);

// checkBoxes();

// function checkBoxes(){
//   const triggerBottom = window.innerHeight / 5 * 4;

//   boxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;

//     if(boxTop < triggerBottom){
//       box.classList.add('show');
//     }else{
//       box.classList.remove('show')
//     }
//   })
// }

export default function Layout({ title, children }) {
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
