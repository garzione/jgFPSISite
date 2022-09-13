import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faKaggle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.module.css";
import React from "react";

const Footer = () => {
  const footerObj = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    marginBottom: "0px",
    textDecoration: "none",
  };

  const ftObj = {
    marginRight: "30px",
    height: "35px",
    marginBottom: "0px",
    color: "black",
  };

  const ft1 = {
    marginLeft: "10px",
    float: "left",
    bottom: 0,
  };
  const ft2 = {
    marginRight: "10px",
    float: "right",
  };

  const blu = {
    ...ftObj,
    color: "#1ae96c",
  };

  const numeraiFtObj = {
    ...ftObj,
    marginBottom: "20px",
  };

  const textDec = {
    textDecoration: "none",
  };

  return (
    <footer style={footerObj}>
      <div style={ft1}>
        <a href={process.env.REACT_APP_GITHUB} style={textDec}>
          {" "}
          <FontAwesomeIcon icon={faGithub} style={ftObj} />{" "}
        </a>
        <a href={process.env.REACT_APP_KAGGLE} style={textDec}>
          {" "}
          <FontAwesomeIcon icon={faKaggle} style={ftObj} />{" "}
        </a>
        <a href={process.env.REACT_APP_NUMERAI} style={textDec}>
          {" "}
          <img
            src="/images/numerai.png"
            alt="Numerai"
            style={numeraiFtObj}
          />{" "}
        </a>
        <FontAwesomeIcon icon={faGripLinesVertical} style={blu} />

        <a href={process.env.REACT_APP_TWITTER} style={textDec}>
          {" "}
          <FontAwesomeIcon icon={faTwitter} style={ftObj} />{" "}
        </a>
      </div>
      <div style={ft2}>
        <Link to="learnings">
          <FontAwesomeIcon icon={faGraduationCap} style={ftObj} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
