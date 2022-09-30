import React from "react";

const HeaderInfo = () => {
  const h1 = `font-bold text-[36px] sm:text-[48px] text-[#240D57] leading-[41px] sm:leading-[64px]`;
  return (
    <div className="flex flex-col self-start w-full">
      <h1 className={h1}>Birthday Bash</h1>
      <h4 className="flex">
        <span>
          Hosted by <b>Elysia</b>
        </span>
      </h4>
    </div>
  );
};

export default HeaderInfo;
