import React from "react";
import "./fontComp.scss";
import { RxFontBold } from "react-icons/rx";
import { RxFontItalic } from "react-icons/rx";
import { AiOutlineFontColors } from "react-icons/ai";
import { RiFontSize2 } from "react-icons/ri";

const FontComp = () => {
  return (
    <div className="font-comp">
      <RxFontBold className="font-comp-icon" />{" "}
      <RxFontItalic className="font-comp-icon" />{" "}
      <AiOutlineFontColors className="font-comp-icon" />{" "}
      <RiFontSize2 className="font-comp-icon" />
    </div>
  );
};

export default FontComp;
