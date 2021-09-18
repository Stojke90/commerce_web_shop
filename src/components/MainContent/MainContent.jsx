import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import commerce from "../../lib/commerce";
import { About, FilterMenu, Footer, Gallery, Products, Social } from "./import";
import useStyles from "./style";
import useWindowDimensions from "../dimension";

const MainContent = () => {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();
  // const for css styles
  const classes = useStyles();
  // state for all product from server
  const [products, setProducts] = useState([]);
  // state for all categories products from server
  const [categorie, setCategorie] = useState([]);
  // state for filter products
  const [filtredWatches, setFiltredWatches] = useState([]);

  // maximum 200 product per call
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 200 });
    setProducts(data);
  };

  // fun for fetch product categories
  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    setCategorie(data.map((name) => name.name));
  };

  // initial get watches and brands
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // state for filter products
  useEffect(() => {
    setFiltredWatches(products);
  }, [products]);

  // filter watches and for reset filter product
  const filterWatches = (filtredArray) => {
    setFiltredWatches(
      products
        .filter((data) =>
          filtredArray.brand
            ? data.categories[0].name === filtredArray.brand
            : data
        )
        .filter((data) =>
          filtredArray.sex ? data.sku === filtredArray.sex : data
        )
        .sort((a, b) =>
          filtredArray.watchPrice
            ? filtredArray.watchPrice === 1
              ? a.price.raw - b.price.raw
              : b.price.raw - a.price.raw
            : a
        )
    );
  };

  return products.length ? (
    <section className={classes.main_con}>
      <Grid container className={classes.grid_con}>
        <Grid
          className={classes.galery_index}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Gallery />
        </Grid>

        <Grid
          item
          className={classes.text_head}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.text_con}
            id="products"
          >
            <Typography
              className={classes.text}
              style={{ fontSize: isDimension ? "3.6rem" : "6rem" }}
            >
              It's up to you to choose
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={10} sm={6} md={3} lg={2}>
          <FilterMenu categorie={categorie} filterWatches={filterWatches} />
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Products filtredWatches={filtredWatches} />
        </Grid>

        <Grid item className={classes.social}>
          <Social />
        </Grid>

        <Grid item xs={11} sm={10} md={10} lg={10} xl={10}>
          <About />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Footer />
        </Grid>
      </Grid>
    </section>
  ) : (
    <Loader
      type="Bars"
      color="#ccc"
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

export default MainContent;
