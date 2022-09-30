import React from "react";
import Button from "../../../components/Button";
import { cx } from "../../../config/constans";

const BannerInfo = () => {
  const bspan = `font-bold text-[64px] text-[#240D57] leading-[64px]`;
  const pspan = `font-light text-2xl leading-[28px] text-[#4F4F4]`;
  return (
    <div className="flex flex-col w-[574px] gap-4">
      <h1 className="flex flex-col text-right">
        <span className={bspan}>Imagine if</span>
        <span
          className={cx(
            bspan,
            "bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-transparent"
          )}
        >
          Snapchat
        </span>
        <span className={bspan}>had events.</span>
      </h1>
      <h4 className="flex flex-col text-right">
        <span className={pspan}>
          Easily hosts and share your friends with your friends
        </span>
        <span className={pspan}>accros any social media</span>
      </h4>
      <button
        className={cx(
          "w-[320px] h-[55px] rounded-[10px] p-4 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white self-end mt-[36px] flex item-center justify-center text-xl leading-[23px] font-bold"
        )}
      >
        🎉 Create my event
      </button>
    </div>
  );
};

export default BannerInfo;
