import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
