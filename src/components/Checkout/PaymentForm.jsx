import React, { useContext } from "react";
import { Typography, Button, Divider, Grid } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Reviwe, useStyles } from "./imports";
import { AppContext } from "../../App";
import { CheckoutContext } from "./Checkout";

const PaymentForm = () => {
  const { shippingData, token, backStep, nextStep } =
    useContext(CheckoutContext);
  // const for css styles
  const classes = useStyles();
  // fun from app.js
  const { handleCaptureCheckout } = useContext(AppContext);
  // fr stipe key
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  // fun for get all data of shipping and data of customer,using stripe and commerc.js to set payment method
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      alert(error.message);
    } else {
      const orderData = {
        line_items: token.live.line_items,
        customer: {
          firstname: shippingData.first_Name,
          lastname: shippingData.last_Name,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.subdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.country,
        },
        fulfillment: { shipping_method: shippingData.option },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCaptureCheckout(token.id, orderData);
      nextStep();
    }
  };

  return (
    <>
      <Reviwe />
      <Divider />
      <Typography variant="h6" className={classes.payParagraf}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <Grid item className={classes.btnPayBack}>
                <Button variant="outlined" onClick={() => backStep()}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {token && token.live.subtotal.formatted_with_symbol}
                </Button>
              </Grid>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
