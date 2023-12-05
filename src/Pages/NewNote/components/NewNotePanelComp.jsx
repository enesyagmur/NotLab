import React from "react";
import "./newNotePanelComp.scss";
import ColorsComp from "./ColorsComp";
import FontComp from "./FontComp";

const NewNotePanelComp = () => {
  return (
    <div className="new-note-panel">
      <ColorsComp />
      <FontComp />
    </div>
  );
};

export default NewNotePanelComp;
