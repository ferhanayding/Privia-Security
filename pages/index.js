import Head from "next/head";
import Analyze from "../components/Analyze/Analyze";
import Collaborate from "../components/Collaborate/Collaborate";
import Featured from "../components/featured/Featured";
import HeroSection from "../components/heroSection/HeroSection";
import Hr from "../components/hr/Hr";
import Info from "../components/info/Info";
import More from "../components/more/More";
import Pricing from "../components/pricing/Pricing";
import Testimonails from "../components/testimonails/Testimonails";
import Sliders from "../components/sliders/Sliders";
import {
  testimonials__container,
  slider__container,
} from "../styles/Home.module.scss";
export default function Home() {
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
      <div className={slider__container}>
        <Sliders />
      </div>
      <div className={testimonials__container}>
        <Testimonails />
      </div>
      <Pricing />
      <Hr />
    </div>
  );
}
