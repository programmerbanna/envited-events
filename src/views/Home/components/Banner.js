// external imports
import React from "react";
import { Link } from "react-router-dom";

// internal imports
import { cx } from "../../../config/constans";

const Banner = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[166px] h-[292px] sm:w-[311px] sm:h-[548px] xl:w-[440px] xl:h-[776px] self-center">
        <img
          src="/image/banner.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <button
        className={cx(
          "w-[187px] sm:w-[320px] h-[55px] rounded-[10px] p-4 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white self-center xl:self-end mt-[36px] flex xl:hidden item-center justify-center text-base sm:text-xl leading-[18px] sm:leading-[23px] font-bold"
        )}
      >
        <Link to="/event" className="w-full h-full">
          🎉 Create my event
        </Link>
      </button>
    </div>
  );
};

export default Banner;
