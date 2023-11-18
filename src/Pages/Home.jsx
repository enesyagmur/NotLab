import React from "react";
import "./home.css";
import { HiPencilAlt } from "react-icons/hi";
import { MdNotes } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <p>Welcome to</p> <p className="second-p">Notlab Web</p>
      </div>
      <button className="home-btn">
        New Note <HiPencilAlt className="new-note-comp-btn-icon" />
      </button>

      <button className="home-btn">
        My Note <MdNotes className="new-note-comp-btn-icon" />
      </button>

      <div className="home-social">
        <FaInstagram className="icon" /> <IoLogoGithub className="icon" />{" "}
        <FaLinkedin className="icon" />
      </div>
    </div>
  );
};

export default Home;
