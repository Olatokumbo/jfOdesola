import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import Envelope from "../../assets/envelope.png";
import Fade from "react-reveal/Fade";
import axios from "axios";
import style from "./Contact.module.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    axios
      .post("https://jfodesola-api.herokuapp.com/mail", {
        name,
        from: email,
        message
      })
      .then(() => {
        alert("Message was sent");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={style.contact} id="contact">
      <div className={style.contactContainer}>
        <Fade left>
          <div className={style.contactLeft}>
            <img className={style.envelope} src={Envelope} alt="Envelope" />
          </div>
        </Fade>
        <Fade right>
          <div className={style.contactRight}>
            {/* <form> */}
            <Typography className={style.title}>Message Me...</Typography>
            <TextField
              className={style.input}
              name="name"
              type="text"
              size="small"
              label="Full Name"
              variant="filled"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
            <TextField
              className={style.input}
              name="name"
              type="email"
              size="small"
              label="Email address"
              variant="filled"
              onChange={(e)=>setEmail(e.target.value)}
              value={email} 
            />
            <TextField
              variant="filled"
              label="Message"
              className={style.input}
              multiline
              rows="6"
              required
              onChange={(e)=>setMessage(e.target.value)}
              value={message}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              className={style.submitBtn}
              variant="contained"
              color="secondary"
              disabled={
                !(!!name && !!email && !!message)
              }
              onClick={sendMessage}
            >
              Submit
            </Button>
            {/* </form> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
