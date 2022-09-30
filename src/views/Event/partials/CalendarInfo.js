import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const CalendarInfo = () => {
  return (
    <div className="w-[446px] h-[72px] flex items-center p-5 mt-10 relative">
      <button className="w-[56px] h-[56px] rounded-[10px] p-3 flex items-center justify-center shadow-sm border border-gray-100">
        <FaRegCalendarAlt className="text-2xl text-gray-400" />
      </button>
      <h3 className="flex flex-col pl-3">
        <span className="text-[#240D57] font-bold">18 August 6:00PM</span>
        <div>
          to <b>19 August 1:00PM</b> UTC + 09
        </div>
      </h3>
      <MdKeyboardArrowRight className="absolute right-0 text-2xl text-slate-400" />
    </div>
  );
};

export default CalendarInfo;
