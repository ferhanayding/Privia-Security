// import { useState } from "react/cjs/react.production.min";
import Layout from "../components/layout/Layout";
import MenuForResponsive from "../components/menuForResponsive/MenuForResponsive";
import "../styles/globals.scss";

import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [menuState, setMenuState] = useState(false);
  return (
    <Layout menuState={menuState} setMenuState={setMenuState}>
      <MenuForResponsive menuState={menuState} setMenuState={setMenuState} />
      <Component
        {...pageProps}
        menuState={menuState}
        setMenuState={setMenuState}
      />
    </Layout>
  );
}

export default MyApp;
