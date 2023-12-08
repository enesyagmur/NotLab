import React from "react";
import "./newNote.scss";
import NoteContainComp from "./components/NoteContainComp";
import NewNotePanelComp from "./components/NewNotePanelComp";
import { useSelector } from "react-redux";

const NewNote = () => {
  const fontFeatures = useSelector(
    (state) => state.fontFeatures.fontFeaturesList
  );
  return (
    <div className="new-note">
      <NewNotePanelComp />
      <NoteContainComp />
    </div>
  );
};

export default NewNote;
