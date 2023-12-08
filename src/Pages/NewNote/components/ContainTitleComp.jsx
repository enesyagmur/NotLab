import React, { useEffect } from "react";
import "./containTitleComp.scss";
import { useSelector } from "react-redux";

const ContainTitleComp = () => {
  const fontFeatures = useSelector(
    (state) => state.fontFeatures.fontFeaturesObject
  );

  return (
    <div className="contain-title">
      <input
        type="text"
        placeholder="Başlık"
        style={{ color: `${fontFeatures.titleColor}` }}
      />
    </div>
  );
};

export default ContainTitleComp;
