import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BraveModal = ({ setModalShown }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    handleClick();
    setShow(false);
  };

  const handleClick = () => {
    setModalShown(true);
  };

  const divSty = {
    fontFamily: "Anonymous Pro",
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={divSty}>Greetings!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={divSty}>
          We see you're using some version of the Chrome browser. This site
          defaults to the http/ens bridge, instead of the actual .eth domain. If
          you're using Brave browser and would like to go to the real site, give
          it a shot below!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ fontSize: "20px" }}
          >
            stay here
          </Button>
          <a href="http://garzione.eth" onClick={handleClick}>
            <Button
              style={{
                fontSize: "20px",
                backgroundColor: "#1ae96c",
                borderColor: "#1ae96c",
                color: "black",
                fontFamily: "Anonymous Pro",
              }}
            >
              send it
            </Button>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BraveModal;
