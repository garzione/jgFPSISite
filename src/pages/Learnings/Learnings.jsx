import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Learnings = () => {
  const divSty = {
    marginLeft: "10px",
    fontFamily: "Anonymous Pro",
    alignContent: "center",
    justifyContent: "center",
  };

  const footerSty = {
    position: "fixed",
    bottom: 5,
    fontSize: "20px",
  };
  const innerDivSty = {
    alignContent: "center",
    justifyContent: "center",
  };
  return (
    <div style={divSty}>
      <link
        rel="stylesheet"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>
      <div style={innerDivSty}>
        <img
          alt="Bing"
          src="/images/uiuc.png"
          style={{ height: "150px" }}
        ></img>
        <h2>Master of Computer Science, Data Science, August 2022, 3.95</h2>
      </div>

      <div style={innerDivSty}>
        <img
          alt="UIUC"
          src="./images/bing.png"
          style={{ height: "125px" }}
        ></img>
        <h2>Bachelor of Science, Finance, May 2019</h2>
      </div>

      <footer style={footerSty}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </footer>
    </div>
  );
};

export default Learnings;
