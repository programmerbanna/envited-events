import React from "react";
import { cx } from "../config/constans";

const Button = ({ children, className }) => {
  <button
    className={cx(
      className,
      "w-[320px] h-[55px] rounded-[10px] p-4 bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
    )}
  >
    {children}
  </button>;
};

export default Button;
