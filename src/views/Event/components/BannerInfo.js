import React from "react";
import CalendarInfo from "../partials/CalendarInfo";
import HeaderInfo from "../partials/HeaderInfo";
import LocationInfo from "../partials/LocationInfo";

const BannerInfo = () => {
  return (
    <div className="xl:w-[45%] flex flex-col h-full self-start">
      {/* header */}
      <HeaderInfo />
      {/* calenda */}
      <CalendarInfo />
      {/* location */}
      <LocationInfo />
    </div>
  );
};

export default BannerInfo;
