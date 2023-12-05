import React from "react";
import "./home.scss";

import TitleComp from "./components/TitleComp";
import ButtonsComp from "./components/ButtonsComp";
import SocialComp from "./components/SocialComp";

const Home = () => {
  return (
    <div className="home">
      <TitleComp />
      <ButtonsComp />
      <SocialComp />
    </div>
  );
};

export default Home;
