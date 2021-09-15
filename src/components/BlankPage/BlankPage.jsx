import { Button, Typography, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function BlankPage() {
  return (
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Typography color="primary" gutterBottom paragraph variant="h2">
        Page under construction
      </Typography>
      <Button variant="contained" color="secondary" component={Link} to={"/"}>
        Go Back
      </Button>
    </Grid>
  );
}

export default BlankPage;
