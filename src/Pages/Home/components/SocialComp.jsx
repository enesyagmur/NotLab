import React from "react";
import "./socialComp.scss";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const HomeSocialComp = () => {
  return (
    <div className="social">
      <FaInstagram className="icon" /> <IoLogoGithub className="icon" />{" "}
      <FaLinkedin className="icon" />
    </div>
  );
};

export default HomeSocialComp;
