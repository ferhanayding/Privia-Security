import Layout from "../components/layout/Layout";
import MenuForResponsive from "../components/menuForResponsive/MenuForResponsive";
import "../styles/globals.scss";

import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    if (menuState) {
      setMenuState(false);
    }
  };
  return (
    <Layout menuState={menuState} setMenuState={setMenuState}>
      <MenuForResponsive menuState={menuState} setMenuState={setMenuState} />
      <div
        className={"main" + (menuState ? " opacity" : "")}
        onClick={handleClick}
      >
        <Component
          {...pageProps}
          menuState={menuState}
          setMenuState={setMenuState}
        />
      </div>
    </Layout>
  );
}

export default MyApp;
