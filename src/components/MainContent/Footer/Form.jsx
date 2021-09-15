import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import useStyles from "./style";

const Form = () => {
  //const for css styles
  const classes = useStyles();
  // state to tur on or turn off loader
  const [loader, setLoader] = useState(false);

  // send mail to admin and auto resend answer to user
  function sendEmail(e) {
    setLoader(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t70pbfs",
        "template_892nky8",
        e.target,
        "user_aHv2rbn79GT0RvWVaC9Bd"
      )
      .then(
        (result) => {
          result.text === "OK" && setLoader(false);
          console.log(result.status);
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      {loader && <CircularProgress className={classes.loader} />}
      <Grid
        item
        xs={8}
        sm={6}
        md={4}
        lg={4}
        xl={3}
        className={classes.form_margin}
      >
        <Typography
          gutterBottom
          paragraph
          variant="subtitle1"
          align="center"
          color="error"
        >
          Sign up for exclusive email offers & more
        </Typography>
        <form
          autoComplete="off"
          className={classes.form_con}
          onSubmit={sendEmail}
        >
          <TextField
            className={classes.input_margin}
            label="Name"
            type="text"
            name="user_name"
            required
          />
          <TextField
            className={classes.input_margin}
            label="Email"
            type="email"
            name="user_email"
            required
          />
          <TextField
            className={classes.input_margin}
            label="Message"
            name="message"
            maxRows={5}
            multiline
            variant="outlined"
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            aria-label="send"
            id="footer"
          >
            Send
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default Form;
