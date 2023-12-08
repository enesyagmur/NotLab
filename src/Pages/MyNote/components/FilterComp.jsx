import React from "react";
import "./filterComp.scss";
import NoteCountComp from "./NoteCountComp";
import FilterButtonComp from "./FilterButtonComp";
import { CgNotes } from "react-icons/cg";

const FilterComp = () => {
  return (
    <div className="filter">
      <p className="filter-title">
        <CgNotes className="filter-title-icon" /> Notlarım
      </p>
      <div className="filter-companents">
        <NoteCountComp />
        <FilterButtonComp />
      </div>
    </div>
  );
};

export default FilterComp;
