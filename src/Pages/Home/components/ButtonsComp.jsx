import React from "react";
import "./buttonsComp.scss";
import { HiPencilAlt } from "react-icons/hi";
import { MdNotes } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomeButtonsComp = () => {
  const navigate = useNavigate();
  return (
    <div className="buttons">
      <button className="btn" onClick={() => navigate("/newnote")}>
        New Note
        <HiPencilAlt className="new-note-comp-btn-icon" />
      </button>
      <button className="btn" onClick={() => navigate("/notes")}>
        My Note
        <MdNotes className="new-note-comp-btn-icon" />
      </button>
    </div>
  );
};

export default HomeButtonsComp;
