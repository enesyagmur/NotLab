import React, { useEffect, useState } from "react";
import "./colorsComp.scss";
import { useDispatch } from "react-redux";
import { changeTitleColor, changeTextColor } from "../../../Redux/slice";

const ColorsComp = () => {
  const [selectedColor, setSelectedColor] = useState("whiteGray");
  const dispatch = useDispatch();
  const selectColorFunc = (selectedColor) => {
    dispatch(changeTextColor(selectedColor));
  };

  useEffect(() => {
    selectColorFunc(selectedColor);
  }, [selectedColor]);

  return (
    <select
      name=""
      id=""
      onChange={(e) => setSelectedColor(e.target.value)}
      style={{ backgroundColor: `${selectedColor}` }}
    >
      <option value={"#e02b15"} className="red"></option>
      <option value={"#f9fc69"} className="yellow"></option>
      <option value={"#23eb68"} className="green"></option>
      <option value={"#3471ff"} className="blue"></option>
      <option value={"black"} className="black"></option>
      <option value={"gray"} className="gray"></option>
      <option value={"grey"} className="grey"></option>
      <option value={"white"} className="white"></option>
    </select>
  );
};

export default ColorsComp;
