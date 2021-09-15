import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  form_con: {
    display: "flex",
    flexDirection: "column",
  },
  input_margin: {
    marginBottom: "2rem",
  },
  space: {
    margin: "2rem 0 2rem 0",
  },
  form_margin: {
    margin: "auto",
  },
  footer_back_color: {
    backgroundColor: "#a9a9a970",
  },
  form_space: {
    paddingTop: "4rem",
    margin: "4rem 0 4rem 0",
    position: "relative",
  },
  details_center: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "auto",
  },
  loader: {
    position: "absolute",
    left: "50%",
    bottom: "10%",
    width: "5rem !important",
    height: "5rem !important",
  },
  link_color: {
    color: "#000",
    "&:hover": {
      color: "#592164",
    },
  },
}));

export default useStyles;
