import React from "react";
import "./newNote.css";
import ColorsComp from "../Components/ColorsComp";

const NewNote = () => {
  return (
    <div className="new-note">
      <div className="new-note-panel">
        <ColorsComp />
      </div>
      <div className="new-note-contain"></div>
    </div>
  );
};

export default NewNote;
