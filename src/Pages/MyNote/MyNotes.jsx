import React from "react";
import "./myNotes.scss";
import MyNotesPanelComp from "./components/MyNotesPanelComp";
import SingleNoteComp from "./components/SingleNoteComp";

const MyNotes = () => {
  return (
    <div className="my-notes">
      <MyNotesPanelComp />
      <SingleNoteComp />
    </div>
  );
};

export default MyNotes;
