import React from "react";
import "./Subjects.css";
const Subjects = ({ setDS, setFS, fs, ds }) => {
  const inputSty = {
    verticalAlign: "middle",
    position: "relative",
    color: "#1ae96c",
  };

  return (
    <div style={{ height: "85vh", width: "25%" }}>
      <h1> Subjects </h1>
      <div>
        <label
          style={{
            display: "block",
            textAlign: "left",
            marginLeft: "32%",
            fontSize: "20px",
          }}
        >
          <input
            style={{ inputSty }}
            type="checkbox"
            id="ds"
            name="ds"
            value={ds}
            onChange={() => setDS(!ds)}
            checked={ds}
            className="sub"
          />
          {" Data Science"}
        </label>
        <label
          style={{
            display: "block",
            textAlign: "left",
            marginLeft: "32%",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          <input
            style={{ inputSty }}
            type="checkbox"
            id="fs"
            name="fs"
            value={fs}
            onChange={() => setFS(!fs)}
            checked={fs}
            className="sub"
          />
          {" Full Stack"}
        </label>
      </div>
    </div>
  );
};

export default Subjects;
