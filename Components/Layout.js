import Head from "next/head";
import React from "react";

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
      <div>
        <header>
          <h2>Header</h2>
        </header>
        <main>{children}</main>
        <footer>
          <h2>Footer</h2>
        </footer>
      </div>
    </>
  );
}
