import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  main_con: {
    width: "100%",
    justifyContent: "center",
  },
  grid_con: {
    justifyContent: "center",
  },
  text_head: {
    borderBottomStyle: "groove",
    borderTopStyle: "groove",
    margin: "2rem auto",
    textAlign: "center",
    fontStyle: "italic",

    borderColor: "#f5f5dc",
  },
  text: {
    color: "#51195c",
    padding: "1rem",
    fontFamily: "'Allison', cursive",
  },
  text_con: {
    background: "linear-gradient(2deg, #000000d6, #0000)",
    borderRadius: "1rem",
    boxShadow: "inset 0 0 8px 10px #fff",
  },
  social: {
    position: "fixed",
    right: 0,
    top: "50%",
    zIndex: "2",
  },
  galery_index: {
    position: "relative",
    zIndex: "-7",
  },
  footer_con: {
    justifyContent: "center",
  },
}));

export default useStyles;
