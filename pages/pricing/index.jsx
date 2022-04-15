import React from "react";
import CampanyInfo from "../../components/campanyInfo/CampanyInfo";
import Contactus from "../../components/contactus/Contactus";
import Pricing from "../../components/pricing/Pricing";

const PricingPage = () => {
  return (
    <div>
      <Pricing />
      <CampanyInfo />
      <Contactus />
    </div>
  );
};

export default PricingPage;
