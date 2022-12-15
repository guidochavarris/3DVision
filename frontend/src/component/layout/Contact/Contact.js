import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:gabriel.cordova@tecsup.edu.pe">
        <Button>Contact: gabriel.cordova@tecsup.edu.pe</Button>
      </a>
      <a className="mailBtn" href="guido.lucana@tecsup.edu.pe">
        <Button>Contact: guido.lucana@tecsup.edu.pe</Button>
      </a>
      <a className="mailBtn" href="Luis.rivera@tecsup.edu.pe">
        <Button>Contact: Luis.rivera.go@tecsup.edu.pe</Button>
      </a>
    </div>
  );
};

export default Contact;
