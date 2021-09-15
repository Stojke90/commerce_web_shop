import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  order: {
    color: "#ff8c00",
    fontFamily: "'Allison', cursive",
  },
  head: {
    margin: "0 0 2rem 1rem",
  },
  "@global": {
    html: {
      backgroundColor: "#708090",
    },
  },
  empthy_cart: {
    margin: "auto",
    lineHeight: "5",
    textAlign: "center",
  },
  empthy_cart_link: {
    textDecoration: "none",
  },
  shop_cart: {
    width: "50%",
    margin: "auto",
  },
  no_item_cart: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export default useStyles;
