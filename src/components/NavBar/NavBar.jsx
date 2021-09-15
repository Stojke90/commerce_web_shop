import {
  AppBar,
  Badge,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../App.js";
import useStyles from "./style";
import useWindowDimensions from "../dimension";

const NavBar = () => {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();
  // const for css styles
  const classes = useStyles();
  // const for location of route
  const location = useLocation();
  // get cart from context
  const { cart } = useContext(AppContext);

  return location.pathname === "/" ? (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to={"/"}
            className={classes.title}
            style={{ fontSize: isDimension ? "1.1rem" : "1.25rem" }}
          >
            <img src="tabImg.png" alt="logo" className={classes.image} />
            E-Commerce Web Shop
          </Typography>
          <Hidden smDown>
            <Typography style={{ marginRight: "3rem" }}>
              <a href="#root" className={classes.links}>
                Slider
              </a>
              <a href="#products" className={classes.links}>
                Products
              </a>
              <a href="#about" className={classes.links}>
                About
              </a>
              <a href="#offers" className={classes.links}>
                Offers
              </a>
              <a href="#footer" className={classes.links}>
                Footer
              </a>
            </Typography>
          </Hidden>

          <Grid item className={classes.button}>
            <IconButton
              component={Link}
              to={"/Shop_Cart"}
              arial-label="Show cart item"
              color="inherit"
            >
              <Badge
                badgeContent={cart.total_items}
                color="secondary"
                className={classes.cart}
              >
                <ShoppingCart className={classes.cart} />
              </Badge>
            </IconButton>
          </Grid>
        </Toolbar>

        <Hidden mdUp>
          <Typography style={{ margin: "1rem auto" }}>
            <a href="#slider" className={classes.links}>
              Slider
            </a>
            <a href="#products" className={classes.links}>
              Products
            </a>
            <a href="#about" className={classes.links}>
              About
            </a>
            <a href="#offers" className={classes.links}>
              Offers
            </a>
            <a href="#footer" className={classes.links}>
              Footer
            </a>
          </Typography>
        </Hidden>
      </AppBar>
    </>
  ) : (
    <></>
  );
};

export default NavBar;
