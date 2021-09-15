import React from "react";
import FooterDetails from "./FooterDetails";
import Form from "./Form";
import { Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      className={classes.footer_back_color}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.form_space}
      >
        <Form />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Divider variant="fullWidth" />
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={12}
        lg={12}
        xl={12}
        className={classes.details_center}
      >
        <FooterDetails />
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={12}
        lg={12}
        xl={12}
        style={{ margin: "auto" }}
      >
        <Typography
          align="center"
          variant="caption"
          component="p"
          style={{ padding: "1rem" }}
        >
          Terms of use | Privacy Enviromental Policy Copyright © 2021
          {document.title} All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
