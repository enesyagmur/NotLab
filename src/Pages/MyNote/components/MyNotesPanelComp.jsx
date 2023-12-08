import React from "react";
import "./myNotesPanelComp.scss";
import FilterComp from "./FilterComp";
import ListComp from "./ListComp";

const MyNotesPanelComp = () => {
  return (
    <div className="my-notes-panel">
      <FilterComp />
      <ListComp />
    </div>
  );
};

export default MyNotesPanelComp;
