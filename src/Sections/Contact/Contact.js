import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import Envelope from "../../assets/envelope.png";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.contact} id="contact"> 
      <div className={style.contactContainer}>
        <div className={style.contactLeft}>
            <img className={style.envelope} src={Envelope} alt="Envelope"/>
        </div>
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
            />
            <TextField
              className={style.input}
              name="name"
              type="email"
              size="small"
              label="Email address"
              variant="filled"
            />
            <TextField
              variant="filled"
              label="Message"
              className={style.input}
              multiline
              rows="6"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button className={style.submitBtn} variant="contained" color="secondary">Submit</Button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
