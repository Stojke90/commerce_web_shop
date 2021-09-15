import React, { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {
  Cart,
  MainContent,
  NavBar,
  WatchDetails,
  BlankPage,
  Checkout,
} from "./imports";
import commerce from "./lib/commerce";

export const AppContext = createContext(null);

const App = () => {
  // state for shop cart
  const [cart, setCart] = useState({});

  // state for order shipping
  const [order, setOrder] = useState({});

  // for error
  const [errorMessage, setErrorMessage] = useState("");

  // fun for get items from shop cart
  const fetchCartProduct = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // fun for add product to shop cart
  const addToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  // fun for update number of product
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  // fun for remove product from shop cart
  const handleRemoveFromCart = async (lineItemId) => {
    const { cart } = await commerce.cart.remove(lineItemId);
    setCart(cart);
  };

  // fun for empty shop cart,remove all products from shop cart
  const handleEmptyCart = async (id) => {
    const { cart } = await commerce.cart.empty(id);
    setCart(cart);
  };

  // initial on load component start fun for get all product from shop cart,and if first time load on website set cart empthy
  useEffect(() => {
    window.history.length === 1 && handleEmptyCart();
    fetchCartProduct();
  }, []);

  // set empty cart after buying products
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  // fun for order products
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleEmptyCart,
        handleCaptureCheckout,
        order,
        errorMessage,
      }}
    >
      <Helmet>
        <title>{document.title}</title>
        <meta
          name="description"
          content="E-Commerce Web Shop provides you with a large selection of state-of-the-art watches!!!"
        />
        <meta
          name="keywords"
          content="Watches, Modern watches, The most beautiful watches, Watches for men, Watches for women"
        />
      </Helmet>
      <NavBar />

      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/WatchDetails/:id" component={WatchDetails} />
        <Route exact path="/Shop_Cart" component={Cart} />
        <Route exact path="/BlankPage/:name" component={BlankPage} />
        <Route exact path="/Checkout" component={Checkout} />
      </Switch>
    </AppContext.Provider>
  );
};

export default App;
