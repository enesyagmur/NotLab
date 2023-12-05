import React from "react";
import "./newNote.scss";
import NoteContainComp from "./components/NoteContainComp";
import NewNotePanelComp from "./components/NewNotePanelComp";

const NewNote = () => {
  return (
    <div className="new-note">
      <NewNotePanelComp />
      <NoteContainComp />
    </div>
  );
};

export default NewNote;
