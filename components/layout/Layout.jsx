import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Head from "next/head";

const Layout = ({ children, menuState, setMenuState }) => {
  return (
    <>
      <Head>
        <title>Privia Hub</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="privia hub" />
        <link rel="icon" href="/assets/favico-150x150.png" />
      </Head>
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
