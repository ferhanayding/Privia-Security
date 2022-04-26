import Head from "next/head";
import Image from "next/image";
import Analyze from "../components/Analyze/Analyze";
import Collaborate from "../components/Collaborate/Collaborate";
import Featured from "../components/featured/Featured";
import HeroSection from "../components/heroSection/HeroSection";
import Hr from "../components/hr/Hr";
import Info from "../components/info/Info";
import More from "../components/more/More";
import Pricing from "../components/pricing/Pricing";
import Testimonails from "../components/testimonails/Testimonails";
import { useWindowWidth } from "@react-hook/window-size";
import Sliders from "../components/sliders/Sliders";

export default function Home() {
  const windowWidth = useWindowWidth();
  return (
    <div>
      <Head>
        <title>Privia Hub</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,600&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="privia hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Featured />
      <Hr />
      <Analyze />
      <More />
      <Collaborate />
      <Info />
      {windowWidth < 770 ? <Sliders /> : <Testimonails />}
      <Pricing />
      <Hr />
    </div>
  );
}
