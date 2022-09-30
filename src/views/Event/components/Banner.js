import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-full sm:w-[593px] sm:h-[593px] xl:w-[500px] xl:h-[500px] self-center">
        <img
          src="/image/event-banner.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
