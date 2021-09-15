import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "0.5rem",
    backgroundColor: "#53195ff5",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    color: "#fff",
  },
  image: {
    marginRight: "10px",
    width: "4rem",
  },
  cart: {
    width: "2rem",
    height: "2rem",
    flexGrow: 1,
  },
  links: {
    color: "#fff",
    textDecoration: "none",
    marginRight: "0.6rem",
    "&:hover": {
      color: "#c39c9c",
    },
  },
}));

export default useStyles;
