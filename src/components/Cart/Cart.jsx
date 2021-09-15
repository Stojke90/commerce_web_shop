import { Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import CartCard from "./CartCard/CartCard.jsx";
import useStyles from "./style";
import useWindowDimensions from "../dimension";

const Cart = () => {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();

  // const for css styles
  const classes = useStyles();

  // const cart get from context
  const { cart } = useContext(AppContext);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.head}
      >
        <Typography className={classes.order} variant="h1" component="h2">
          Your Order
        </Typography>
        <Typography>E-Commerce Web Shop</Typography>
      </Grid>
      {cart.total_items > 0 ? (
        <CartCard cart={cart} />
      ) : (
        <Grid item className={classes.no_item_cart}>
          <Typography
            className={classes.empthy_cart}
            style={{
              display: isDimension ? "flex" : "block",
              flexDirection: isDimension ? "column" : "initial",
            }}
          >
            Your shopping cart is empty,
            <Link className={classes.empthy_cart_link} to={"./"}>
              go back and choose a product ...
            </Link>
          </Typography>
          <img
            className={classes.shop_cart}
            src="shopCart.gif"
            alt="shop cart"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
