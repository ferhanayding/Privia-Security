import React from "react";
import Footer from "../footer/Footer";
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
