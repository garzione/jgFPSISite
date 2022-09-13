import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Principles = () => {
  const outerSty = {
    display: "inlineBlock",
    height: "100vh",
  };
  const innerSty = {
    position: "fixed",
    width: "50%",
    left: 0,
    height: "100vh",
  };
  const innerSty2 = {
    position: "fixed",
    width: "50%",
    right: 0,
    height: "100vh",
  };

  const footSty = {
    position: "fixed",
    bottom: 5,
    left: 5,
    fontSize: "20px",
  };

  const parSty = {
    fontFamily: "Anonymous Pro",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "25px",
  };

  return (
    <div style={outerSty}>
      <div style={innerSty} id="col1">
        <p style={parSty}>
          Although I tend not to trust the use of personality tests, I do deeply
          respect the work of{" "}
          <a href="https://en.wikipedia.org/wiki/Ray_Dalio">
            {" "}
            <i> Ray Dalio </i>
          </a>
          , and his thoughts as they relate to things like macro-economics,
          finance, and organizational behavior. As such, I've decided to include
          my result from his{" "}
          <a href="https://principlesyou.com/">
            {" "}
            <i>Principles You</i>{" "}
          </a>{" "}
          questionaire, in hopes that it might be useful for some professional
          things.
        </p>
        <footer style={footSty}>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </footer>
      </div>
      <div style={innerSty2} id="col2">
        <iframe
          title="Principles"
          src={process.env.REACT_APP_PR}
          width="100%"
          height="100%"
        >
          <p>
            View <a href={process.env.REACT_APP_PR}> Principles Result </a>
          </p>
        </iframe>
      </div>
    </div>
  );
};

export default Principles;
