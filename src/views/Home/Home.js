import React from "react";
import Button from "../../components/Button";
import { cx } from "../../config/constans";
// internal imports
import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";

const Home = () => {
  return (
    <div className="w-full flex flex-col-reverse xl:flex-row items-center justify-between relative">
      {/* banner */}
      <Banner />
      <BannerInfo />
    </div>
  );
};

export default Home;
