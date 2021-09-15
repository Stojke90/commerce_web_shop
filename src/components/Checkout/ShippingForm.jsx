import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { commerce } from "./imports";
import { useStyles } from "./imports";
import { CheckoutContext } from "./Checkout";

const ShippingForm = ({ setShippingData, shippingData }) => {
  const { token } = useContext(CheckoutContext);
  // const for css styles
  const classes = useStyles();
  // state for get countries for shipping
  const [shippingCountries, setShippingCountries] = useState([]);
  // state for set country for shiping
  const [shippingCountry, setShippingCountry] = useState("");
  // state for country subdivisions
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // state for country subdivision
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  // state for options of shiping
  const [shippingOptions, setShippingOptions] = useState([]);
  // state for set option for shipping
  const [shippingOption, setShippingOption] = useState("");

  // fun for get all countries for shipping
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
  };

  // fun for get all subdivisions of selected country
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
  };

  // fun for shipping options
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );
    setShippingOptions(options);
  };

  // initial start fun if token id is exists
  useEffect(() => {
    token.id && fetchShippingCountries(token.id);
  }, [token.id]);

  //initial start fun when country set value
  useEffect(() => {
    shippingCountry && fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  //initial start fun when country set shippingSubdivision, token, shippingCountry
  useEffect(() => {
    shippingSubdivision &&
      fetchShippingOptions(token.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision, token, shippingCountry]);

  // loop trow object took key and value
  const allShippingCountries = Object.entries(shippingCountries).map(
    ([code, name]) => ({ id: code, label: name })
  );

  // loop trow object took key and value
  const allShippingSubdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  // loop trow object took key and value
  const allOptions = shippingOptions.map((op) => ({
    id: op.id,
    label: `${op.description} - ${op.price.formatted_with_symbol}`,
  }));

  const handlerShippingCountry = (e) => {
    setShippingCountry(e);
    setShippingSubdivision("");
    setShippingOption("");
    setShippingData({ ...shippingData, country: e });
  };
  const handlerShippingSubdivision = (e) => {
    setShippingSubdivision(e);
    setShippingOption("");
    setShippingData({ ...shippingData, subdivision: e });
    console.log("handle: ", e);
  };
  const handlerShippingOption = (e) => {
    setShippingOption(e);
    setShippingData({ ...shippingData, option: e });
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.field}>
        <InputLabel>Shipping Country</InputLabel>
        <Select
          value={shippingCountry}
          fullWidth
          onChange={(e) => handlerShippingCountry(e.target.value)}
        >
          {allShippingCountries &&
            allShippingCountries.map((country) => (
              <MenuItem key={uuidv4()} value={country.id}>
                {country.label}
              </MenuItem>
            ))}
        </Select>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.field}>
        <InputLabel>Shipping Subdivision</InputLabel>
        <Select
          value={shippingSubdivision}
          fullWidth
          onChange={(e) => handlerShippingSubdivision(e.target.value)}
        >
          {allShippingSubdivisions &&
            allShippingSubdivisions.map((subdivision) => (
              <MenuItem key={uuidv4()} value={subdivision.id}>
                {subdivision.label}
              </MenuItem>
            ))}
        </Select>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.field}>
        <InputLabel>Shipping Options</InputLabel>
        <Select
          defaultValue=""
          value={shippingOption}
          fullWidth
          onChange={(e) => handlerShippingOption(e.target.value)}
        >
          {allOptions &&
            allOptions.map((option) => (
              <MenuItem key={uuidv4()} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </Grid>
    </>
  );
};

export default ShippingForm;
