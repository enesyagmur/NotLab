import React from "react";
import "./noteContainComp.scss";
import ContainTitleComp from "./ContainTitleComp";
import ContainTextComp from "./ContainTextComp";

const NewNoteContainComp = () => {
  return (
    <div className="note-contain">
      <ContainTitleComp />
      <ContainTextComp />
    </div>
  );
};

export default NewNoteContainComp;
