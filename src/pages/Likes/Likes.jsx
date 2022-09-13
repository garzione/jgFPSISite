import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import LikesObj from "./likesObj";
import React, { useState } from "react";
import likesObj from "./likesObj";

const Likes = () => {
  const [topic, setTopic] = useState(LikesObj.books);

  const handleOnChange = (e) => {
    e.preventDefault();
    let temp = e.target.value;
    setTopic(LikesObj[temp]);
  };

  const footerSty = {
    position: "fixed",
    bottom: 5,
    fontSize: "20px",
    marginLeft: "10px",
  };

  const topicSty = {
    marginTop: "50px",
    marginBottom: "20px",
    display: "inline",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
  };

  const scrollW = {
    overflow: "scroll",
    height: "91vh",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginLeft: "10%",
  };
  const scrollWindow = {
    height: "91vh",
    marginTop: "20px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  const outer = {
    marginTop: "20px",
    fontFamily: "Anonymous Pro",
  };

  return (
    <div style={outer}>
      <div style={topicSty}>
        {topic && (
          <ButtonGroup>
            {likesObj &&
              Object.keys(likesObj).map((key, i) => {
                return (
                  <Button
                    value={key}
                    variant="dark"
                    size="lg"
                    onClick={handleOnChange}
                    key={i}
                  >
                    {" "}
                    {key}{" "}
                  </Button>
                );
              })}
          </ButtonGroup>
        )}
      </div>
      <div style={scrollWindow}>
        <div style={scrollW}>
          {topic.map((val, i) => {
            return (
              <div
                key={i}
                style={{
                  marginLeft: "30%",
                  marginRight: "30%",
                  marginTop: "20px",
                }}
              >
                <h1>
                  {" "}
                  <a
                    href={val.loc}
                    style={{ textDecoration: "none", color: "#1ae96c" }}
                  >
                    {" "}
                    {val.title}{" "}
                  </a>{" "}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <footer style={footerSty}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </footer>
    </div>
  );
};

export default Likes;
