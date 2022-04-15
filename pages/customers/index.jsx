import React from "react";
import Card from "../../components/card/Card";
import CustomHeader from "../../components/customHeader/CustomHeader";
import Sliders from "../../components/sliders/Sliders";
import TwitterSection from "../../components/twitterSection/TwitterSection";

const Customers = () => {
  return (
    <div>
      <CustomHeader
        bg="#D1E8FF"
        desc="Hear what 95,000+ brands and businesses love about using Oval"
        text__color="#232E69"
      />
      <Sliders />
      <TwitterSection />
      <Card bg="#fff" />
    </div>
  );
};

export default Customers;
