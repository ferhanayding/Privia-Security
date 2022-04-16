import React from "react";
import Footer from "../footer/Footer";
import MenuForResponsive from "../menuForResponsive/MenuForResponsive";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, menuState, setMenuState }) => {
  return (
    <>
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
