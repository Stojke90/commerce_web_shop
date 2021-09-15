import { Button, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";
import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product/Product";

const useStyles = makeStyles(() => ({
  main_con: {
    width: "100%",
  },
  product_con: {
    flexWrap: "flex-wrap",
    margin: "0",
    width: "100%",
    justifyContent: "center",
  },
  con_btn_show: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: "1rem",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Products = ({ filtredWatches }) => {
  // const for css styles
  const classes = useStyles();

  // state for show a certain number of products
  const [showProducts, setShowProducts] = useState(12);

  // fun for show less products
  const less = () => {
    window.scrollTo({
      top: window.innerWidth <= 959 ? 950 : 420,
      behavior: "smooth",
    });
    setShowProducts(12);
  };
  return (
    <>
      <section className={classes.main_con}>
        <Grid className={classes.product_con} container spacing={4}>
          {!filtredWatches.length ? (
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
          ) : (
            filtredWatches.slice(0, showProducts).map((item) => (
              <Grid key={uuidv4()} item xs={10} sm={5} md={4} lg={3} xl={3}>
                <Product item={item} />
              </Grid>
            ))
          )}
        </Grid>

        {filtredWatches.length && (
          <Grid item className={classes.con_btn_show}>
            <Typography
              variant="caption"
              component="p"
              style={{ marginBottom: "0.25rem" }}
            >
              {showProducts > filtredWatches.length
                ? setShowProducts(filtredWatches.length)
                : showProducts}{" "}
              of {filtredWatches.length}
            </Typography>
            <Button
              id="about"
              onClick={() =>
                filtredWatches.length > showProducts
                  ? setShowProducts(showProducts + 12)
                  : less()
              }
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ marginBottom: "1rem" }}
              startIcon={
                <DoubleArrowRoundedIcon
                  style={{
                    transform:
                      filtredWatches.length > showProducts
                        ? "rotate(90deg)"
                        : "rotate(-90deg)",
                  }}
                />
              }
              endIcon={
                <DoubleArrowRoundedIcon
                  style={{
                    transform:
                      filtredWatches.length > showProducts
                        ? "rotate(90deg)"
                        : "rotate(-90deg)",
                  }}
                />
              }
            >
              {filtredWatches.length > showProducts ? "Show more" : "Show less"}
            </Button>
          </Grid>
        )}
      </section>
    </>
  );
};
export default Products;
