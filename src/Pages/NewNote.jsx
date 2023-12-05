import React from "react";
import "./newNote.scss";
import ColorsComp from "../Components/ColorsComp";
import FontComp from "../Components/FontComp";

const NewNote = () => {
  return (
    <div className="new-note">
      <div className="new-note-panel">
        <ColorsComp />
        <FontComp />
      </div>
      <div className="new-note-contain"></div>
    </div>
  );
};

export default NewNote;
