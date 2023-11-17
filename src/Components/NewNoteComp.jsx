import React from "react";
import "./newNoteComp.css";
import { TfiPencil } from "react-icons/tfi";

const NewNoteComp = () => {
  return (
    <div className="new-note-comp">
      <div className="new-note-comp-title">
        <p>Welcome to</p> <p>NotLab Web</p>
      </div>
      <button className="new-note-comp-btn">
        <TfiPencil /> New Note
      </button>
    </div>
  );
};

export default NewNoteComp;
