import {
  CircularProgress,
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../App";
import {
  commerce,
  PaymentForm,
  AddressForm,
  Confirmation,
  useStyles,
} from "./imports";

export const CheckoutContext = createContext(null);

const Checkout = () => {
  // const for css styles
  const classes = useStyles();
  // const get cart item from context
  const { cart } = useContext(AppContext);
  // state for set steps of checkout form
  const [activeStep, setActiveStep] = useState(0);
  // state for set token
  const [token, setToken] = useState(null);
  // state for shipping data
  const [shippingData, setShippingData] = useState({});

  // fun for next step
  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  // fun for previous step
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  // fun for get all shipping data
  const nextField = (data) => {
    setShippingData(data);
    nextStep();
  };

  // steps for checkout
  const steps = ["Shipping address", "Payment details"];

  // initial generate token if cart id exists
  useEffect(() => {
    const getToken = async () => {
      try {
        const takeToken = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setToken(takeToken);
      } catch (error) {
        alert(error.message);
        window.history.back();
      }
    };
    cart.id && getToken();
  }, [cart.id]);

  return (
    <CheckoutContext.Provider
      value={{ token, nextField, shippingData, backStep, nextStep }}
    >
      <Grid
        item
        xs={11}
        sm={9}
        md={8}
        lg={8}
        xl={9}
        className={classes.form_con}
      >
        <Paper>
          <Grid item xs={12} ms={4} style={{ padding: "0.8rem" }}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((step) => (
                <Step key={uuidv4()}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {!token ? (
              <CircularProgress className={classes.loader} />
            ) : activeStep === steps.length ? (
              <Confirmation />
            ) : activeStep === 0 ? (
              <AddressForm />
            ) : (
              <PaymentForm />
            )}
          </Grid>
        </Paper>
      </Grid>
    </CheckoutContext.Provider>
  );
};

export default Checkout;
