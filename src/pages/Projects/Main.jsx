import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Subjects from "./Subjects";
import Projects from "./Projects";
import Technologies from "./Technologies";
import React, { useState, useEffect } from "react";
import { fsp, dsp, both } from "../../Objects/projects.js";

const Main = () => {
  const [ds, setDS] = useState(true);
  const [fs, setFS] = useState(true);
  const [data, setData] = useState(both);
  const [tech, setTech] = useState(null);

  useEffect(() => {
    if (fs === true) {
      if (ds === true) {
        setData(both);
      } else {
        setData(fsp);
      }
    } else if (ds === true) {
      setData(dsp);
    } else {
      setData(null);
    }
  }, [fs, ds]);

  const footerSty = {
    position: "fixed",
    bottom: 5,
    fontSize: "20px",
    marginLeft: "10px",
  };
  const sty1 = {
    height: "12vh",
    justifyContent: "center",
    alignText: "center",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Anonymous Pro" }}>
      <link
        rel="stylesheet"
        href={process.env.REACT_APP_STR}
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>
      <div style={sty1}>
        <h1> Projects </h1>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-toggle="dropdown"
            style={{ backgroundColor: "#1ae96c", borderColor: "#1ae96c" }}
          >
            (( this ))
          </button>
          <div className="dropdown-menu align-center">
            <ul>
              <li className="dropdown-item">
                <a href="https://reactjs.org/">React</a>
              </li>
              <li className="dropdown-item">
                <a href="https://d3js.org/">D3.js</a>
              </li>
              <li className="dropdown-item">
                <a href="https://nodejs.org/en/docs/">NodeJS</a>
              </li>
              <li className="dropdown-item">
                <a href="https://docs.sendgrid.com/">SendGrid</a>
              </li>
              <li
                className="dropdown-item"
                style={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                <a href={process.env.REACT_APP_PFO}> Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Subjects ds={ds} fs={fs} setDS={setDS} setFS={setFS} />
        <Projects data={data} setTech={setTech} tech={tech} />
        <Technologies tech={tech} />
      </div>

      <footer style={footerSty}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </footer>
    </div>
  );
};

export default Main;
