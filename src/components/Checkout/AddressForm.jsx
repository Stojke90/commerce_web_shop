import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { FormInput, ShippingForm, inputForm, useStyles } from "./imports";
import { CheckoutContext } from "./Checkout";

const AddressForm = () => {
  const { nextField } = useContext(CheckoutContext);
  // const for css styles
  const classes = useStyles();

  // state for shipping data
  const [shippingData, setShippingData] = useState({
    country: "",
    subdivision: "",
    option: "",
  });

  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom className={classes.text_address}>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            nextField({
              ...data,
              ...shippingData,
            })
          )}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={8}
            xl={8}
            className={classes.adress_form}
          >
            {inputForm.map((data) => (
              <FormInput
                key={uuidv4()}
                required
                name={data.name}
                label={data.label}
              />
            ))}

            <ShippingForm
              setShippingData={setShippingData}
              shippingData={shippingData}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className={classes.btn_address}
          >
            <Button component={Link} variant="contained" to="/Shop_Cart">
              Back to Cart
            </Button>
            <Button
              type="submit"
              disabled={
                shippingData.country &&
                shippingData.subdivision &&
                shippingData.option
                  ? false
                  : true
              }
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
