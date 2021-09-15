import React, { useContext, useState, useEffect } from "react";
import { CheckoutContext } from "./Checkout";
import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from "uuid";
import commerce from "../../lib/commerce";

// if stripe don't connected with comerc.js,if you do not want to provide personal information
const ThanksForThePurchase = () => {
  const { shippingData, token } = useContext(CheckoutContext);
  const { handleEmptyCart, cart } = useContext(AppContext);

  const [timer, setTimer] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSubdivision, setSelectedSubdivision] = useState("");

  setTimeout(() => {
    setTimer(false);
  }, 3000);

  useEffect(() => {
    !timer && window.document.querySelector("#trigger").click();
  }, [timer]);

  useEffect(() => {
    const selectedCounties = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      shippingData.country &&
        setSelectedCountry(
          Object.entries(countries).filter(
            (data) => data[0] === shippingData.country
          )[0][1]
        );
    };
    token.id && selectedCounties(token.id);
  }, [token, shippingData.country]);

  useEffect(() => {
    const selectedSubdivisions = async (countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );
      shippingData.subdivision &&
        setSelectedSubdivision(
          Object.entries(subdivisions).filter(
            (data) => data[0] === shippingData.subdivision
          )[0][1]
        );
    };
    selectedCountry.length && selectedSubdivisions(shippingData.country);
  }, [selectedCountry, shippingData.country, shippingData.subdivision]);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t70pbfs",
        "template_wiywmtg",
        e.target,
        "user_aHv2rbn79GT0RvWVaC9Bd"
      )
      .then(
        (result) => {
          console.log(result.status);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {timer ? (
        <CircularProgress style={{ position: "relative", left: "50%" }} />
      ) : (
        <>
          <Grid>
            <Typography variant="h5">
              Thank you for your purchase, {shippingData?.first_Name}{" "}
              {shippingData?.last_Name}!
            </Typography>
            <Typography>Please check your e-mail.</Typography>
            <Divider style={{ margin: "1rem auto" }} />
            <Typography variant="subtitle2">
              Order ref: {shippingData?.option}
            </Typography>
          </Grid>
          <br />
          <Button
            component={Link}
            onClick={() => handleEmptyCart(cart.id)}
            variant="outlined"
            type="button"
            to="/"
          >
            Back to home
          </Button>

          <form
            style={{ display: "none" }}
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <TextField
              label="first_Name"
              type="text"
              name="first_Name"
              required
              value={shippingData.first_Name}
            />
            <TextField
              label="last_Name"
              type="text"
              name="last_Name"
              value={shippingData.last_Name}
              required
            />
            <TextField
              label="email"
              type="email"
              name="email"
              value={shippingData.email}
              required
            />
            <TextField
              label="country"
              type="text"
              name="country"
              value={selectedCountry}
              required
            />
            <TextField
              label="subdivision"
              type="text"
              name="subdivision"
              value={selectedSubdivision}
              required
            />
            <TextField
              label="address"
              type="text"
              name="address"
              value={shippingData.address}
              required
            />
            {cart.line_items.map((data, i) => {
              return (
                <Grid item key={uuidv4()}>
                  <TextField
                    label="product_name"
                    type="text"
                    name={"product_name_" + [i]}
                    value={data.name}
                    required
                  />
                  <TextField
                    label="quantity"
                    type="text"
                    name={"quantity_" + [i]}
                    value={data.quantity}
                    required
                  />
                  <TextField
                    label="product_price"
                    type="text"
                    name={"product_price_" + [i]}
                    value={data.quantity * data.price.raw + " Euro"}
                    required
                  />
                </Grid>
              );
            })}

            <TextField
              label="subtotal"
              type="text"
              name="subtotal"
              value={cart.subtotal.formatted_with_symbol}
              required
            />
            <TextField
              label="zip"
              type="text"
              name="zip"
              value={shippingData.zip}
              required
            />

            <Button
              variant="outlined"
              color="primary"
              type="submit"
              aria-label="send"
              id="trigger"
            >
              Send
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default ThanksForThePurchase;
