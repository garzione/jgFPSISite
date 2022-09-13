import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [con, setCon] = useState({
    name: "",
    email: "",
    message: "",
  });
  const footerSty = {
    position: "fixed",
    bottom: 5,
    fontSize: "20px",
    marginLeft: "10px",
  };
  const divW = {
    width: "50%",
    marginLeft: "25%",
    marginTop: "5%",
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Conntrol-Allow-Origin": "*",
      },
      body: JSON.stringify({ con }),
    };
    fetch(process.env.REACT_APP_FETCH, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.hasOwnProperty("error")) {
          toast.error("Error! Please try again.");
        } else {
          toast.success("Message sent!");
          setCon({
            name: "",
            email: "",
            message: "",
          });
        }
      });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const val = e.target.value;
    switch (e.target.id) {
      case "email":
        setCon({ ...con, email: val });
        break;

      case "name":
        setCon({ ...con, name: val });
        break;

      case "message":
        setCon({ ...con, message: val });
        break;

      default:
        break;
    }
    console.log(con);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={divW}>
        <h1> Contact </h1>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Form onSubmit={handleSubmission}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={con.name}
              id="name"
              type="text"
              placeholder="Sam Bankman-Fried"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={con.email}
              id="email"
              type="email"
              placeholder="sbf@ftx.com"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={con.message}
              id="message"
              as="textarea"
              rows={15}
              placeholder="My goal is just to figure out how I can have the most impact on the world, whatever that means."
              onChange={changeHandler}
            />
          </Form.Group>

          <Button
            style={{
              backgroundColor: "#1ae96c",
              borderColor: "#1ae96c",
              color: "black",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
      <footer style={footerSty}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </footer>
    </div>
  );
};

export default Contact;
