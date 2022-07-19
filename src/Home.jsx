import React from "react";
import web from "../src/images/Reliance1.png";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Jio Internship"
        imgsrc={web}
        visit="/service"
        visit1="/iframe"
        btname="Get Started"
        btname1="Show iframe"
      />
    </>
  );
};

export default Home;
