import React from "react";
import Articles from "../../components/articles/Articles";
import Card from "../../components/card/Card";
import CarouselArea from "../../components/carouselArea/CarouselArea";
import CustomHeader from "../../components/customHeader/CustomHeader";

const Recources = () => {
  return (
    <div>
      <CustomHeader
        desc={"Resources to help you grow as a creative entrepreneur."}
        isInput
      />
      <CarouselArea />
      <Articles />
      <Card />
    </div>
  );
};

export default Recources;
