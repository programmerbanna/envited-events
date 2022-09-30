import React from "react";
import { GoLocation } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const LocationInfo = () => {
  return (
    <div className="w-[446px] h-[72px] flex items-center p-5 mt-2 relative">
      <button className="w-[56px] h-[56px] rounded-[10px] p-3 flex items-center justify-center shadow-sm border border-gray-100">
        <GoLocation className="text-2xl text-gray-400" />
      </button>
      <h3 className="flex flex-col pl-3">
        <span className="text-[#240D57] font-bold">Street name</span>
        <div>Subburb, State, Postcode</div>
      </h3>
      <MdKeyboardArrowRight className="absolute right-0 text-2xl text-slate-400" />
    </div>
  );
};

export default LocationInfo;
