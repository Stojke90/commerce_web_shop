import { Grid, IconButton, makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

const useStyles = makeStyles((theme) => ({
  con: {
    flexDirection: "column",
  },
  icon: {
    transform: "scale(1) rotate(0deg)",
    transition: "1s ease-out",
    "&:hover": {
      transform: "scale(1.5) rotate(360deg)",
    },
  },
}));

function Social() {
  // const for css styles
  const classes = useStyles();

  return (
    <Grid container className={classes.con}>
      <IconButton href="https://material-ui.com/api/svg-icon/">
        <FacebookIcon
          className={classes.icon}
          color="primary"
          fontSize="large"
        />
      </IconButton>
      <IconButton href="https://material-ui.com/api/svg-icon/">
        <InstagramIcon
          className={classes.icon}
          color="error"
          fontSize="large"
        />
      </IconButton>
    </Grid>
  );
}

export default Social;
