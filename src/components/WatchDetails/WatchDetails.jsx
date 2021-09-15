import {
  Badge,
  Button,
  CardContent,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import commerce from "../../lib/commerce";
import Description from "./Description";
import FullScreen from "./FullScreen";
import useStyles from "./style";

const WatchDetails = (props) => {
  // const for css styles
  const style = useStyles();

  // state for product with details
  const [watchDetail, setWatchDetail] = useState();

  // state for show btn,if is product by or not
  const [show, setShow] = useState(true);

  // from context states
  const { addToCart, cart } = useContext(AppContext);

  // fun for get all details about product
  const detailsOfWatch = (item) => {
    commerce.products
      .retrieve(item, { type: "id" })
      .then((product) => setWatchDetail(product));
  };

  // initial get all details about product
  useEffect(() => {
    detailsOfWatch(props.match.params.id);
  }, [props.match.params.id]);

  //  fun for add to cart product
  const handleAddToCart = (productId, quantity) => {
    setShow(false);
    addToCart(productId, quantity);
  };

  // initial set btn, if is product in shop cart or not
  useEffect(() => {
    if (cart.line_items !== undefined && watchDetail !== null) {
      cart.line_items.filter((data) => {
        if (data.product_id === watchDetail.id) {
          return setShow(false);
        } else {
          return setShow(true);
        }
      });
    }
  }, [cart.line_items, watchDetail]);

  return watchDetail ? (
    <Grid container className={style.conteiner}>
      <Helmet>
        <title>{watchDetail.name}</title>
        <meta name="description" content={watchDetail.description} />
        <meta
          name="keywords"
          content="Watches, Modern watches, The most beautiful watches, Watches for men, Watches for women"
        />
      </Helmet>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={style.bar_link_con}
      >
        <Typography
          variant="h6"
          component={Link}
          to={"/"}
          className={style.bar_link}
        >
          {document.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          dangerouslySetInnerHTML={{ __html: watchDetail.categories[0].name }}
          className={style.text}
        />
      </Grid>
      <Grid
        className={style.conteiner_media}
        item
        xs={12}
        sm={10}
        md={5}
        lg={5}
        xl={4}
      >
        <FullScreen watchDetail={watchDetail} style={style} />
      </Grid>

      <Hidden smDown>
        <Divider orientation="vertical" flexItem className={style.separator} />
      </Hidden>

      <Grid
        item
        className={style.conteiner_text_btn}
        xs={12}
        sm={10}
        md={5}
        lg={5}
        xl={4}
      >
        <CardContent>
          <Typography
            className={style.text}
            variant="h4"
            component="h2"
            dangerouslySetInnerHTML={{ __html: watchDetail.name }}
          />
          <Typography
            className={style.text}
            variant="h5"
            component="h2"
            dangerouslySetInnerHTML={{
              __html: watchDetail.price.formatted_with_symbol,
            }}
          />
          <Typography
            className={style.text}
            variant="h5"
            component="h2"
            color={watchDetail.inventory.available ? "initial" : "error"}
            dangerouslySetInnerHTML={{
              __html: watchDetail.inventory.available
                ? watchDetail.inventory.available + " watches available"
                : "Sold out",
            }}
          />
        </CardContent>
        <CardContent>
          <Button
            variant="contained"
            color="primary"
            className={style.btn}
            component={Link}
            to={"/"}
          >
            Back
          </Button>
          <Button
            onClick={() => handleAddToCart(watchDetail.id, 1)}
            variant="contained"
            color="secondary"
            disabled={
              watchDetail.inventory.available === 0 ? true : show ? false : true
            }
            style={{ backgroundColor: show ? "none" : "#f50057" }}
          >
            {show ? "Add to cart" : <DoneAllIcon style={{ fill: "#008000" }} />}
          </Button>
        </CardContent>
      </Grid>
      {cart.total_items > 0 && (
        <Grid item className={style.showCart}>
          <IconButton
            component={Link}
            to={"/Shop_Cart"}
            arial-label="Show cart item"
            color="inherit"
          >
            <Badge badgeContent={cart.total_items} color="secondary">
              <ShoppingCartSharpIcon fontSize="large" color="primary" />
            </Badge>
          </IconButton>
        </Grid>
      )}

      <Grid item xs={12} sm={12}>
        <Description watchDetail={watchDetail} />
      </Grid>
    </Grid>
  ) : (
    <Loader
      type="Bars"
      color="#00BFFF"
      secondaryColor="Grey"
      height={"50%"}
      width={"50%"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
      }}
    />
  );
};

export default WatchDetails;
