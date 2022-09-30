import React from "react";
import Banner from "./components/Banner";
import BannerInfo from "./components/BannerInfo";

const Event = () => {
  return (
    <div className="w-full flex flex-col-reverse xl:flex-row items-center justify-between relative">
      <BannerInfo />
      <Banner />
    </div>
  );
};

export default Event;
