import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import ThanksForThePurchase from "./ThanksForThePurchase";

const Confirmation = () => {
  // state from app.js
  const { order } = useContext(AppContext);

  // if stripe is connected with comerc.js
  const Customer = () => {
    return order.customer ? (
      <>
        <Grid>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname}
            {order.customer.lastname}!
          </Typography>
          <Divider />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </Grid>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    ) : (
      <>
        <CircularProgress />
      </>
    );
  };

  return Object.keys(order).length === 0 ? (
    <ThanksForThePurchase />
  ) : (
    <Customer />
  );
};

export default Confirmation;
