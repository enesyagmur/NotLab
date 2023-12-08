import React, { useState } from "react";
import "./containTextComp.scss";
import { useSelector } from "react-redux";

const ContainTextComp = () => {
  const [color, setColor] = useState("grey");
  const fontFeatures = useSelector(
    (state) => state.fontFeatures.fontFeaturesObject
  );

  const ifSelectTextFunc = () => {
    setColor(fontFeatures.textColor);
  };

  return (
    <div className="contain-text">
      <textarea
        cols="30"
        rows="10"
        placeholder="Metin"
        style={{ color: `${color}` }}
        onClick={ifSelectTextFunc}
      ></textarea>
    </div>
  );
};

export default ContainTextComp;
