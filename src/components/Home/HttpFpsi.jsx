import React, { useState } from "react";

const HttpFpsi = () => {
  const [selected, setSelected] = useState("no");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
    if (selected === "yes") {
      window.open("https://garzione.eth.link");
    } else {
      window.open("https://garzi.one");
    }
  };

  const formStyle = {
    marginRight: "20px",
    fontFamily: "Anonymous Pro",
    fontSize: "25px",
  };

  return (
    <div>
      <div style={formStyle}>
        <div>
          <input
            type="radio"
            id="yes"
            name="choose"
            value="yes"
            checked={selected === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="yes" style={{ marginLeft: "5px" }}>
            {" "}
            <b> Http / Web2</b>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="no"
            name="choose"
            value="no"
            onChange={handleChange}
            checked={selected === "no"}
          />
          <label htmlFor="no" style={{ marginLeft: "5px" }}>
            <b> Fpsi / Web3 </b>
          </label>
        </div>
      </div>
    </div>
  );
};

export default HttpFpsi;
