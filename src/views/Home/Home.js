import React from "react";
// internal imports
import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* banner */}
      <Banner />
      <BannerInfo />
    </div>
  );
};

export default Home;
