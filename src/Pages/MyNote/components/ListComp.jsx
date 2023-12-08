import React from "react";
import "./listComp.scss";
import NoteComp from "./NoteComp";

const ListComp = () => {
  const noteList = [
    " Lorem ipsum dolor sit.",
    " Lorem ipsum dolor sit.",
    " Lorem ipsum dolor sit.",
    " Lorem ipsum dolor sit.",
  ];
  return (
    <div className="list">
      {noteList.map((text) => (
        <NoteComp text={text} />
      ))}
    </div>
  );
};

export default ListComp;
