import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  con: {
    justifyContent: "center",
    width: "90%",
    margin: "auto",
  },
  cardCart: {
    border: "solid 2px darkgrey",
    padding: "0.6rem",
    borderRadius: "1rem",
    marginBottom: "1rem",
    position: "relative",
    overflow: "hidden",
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  autoCenter: {
    margin: "auto",
    textAlign: "center",
  },
  imgSize: {
    width: "20%",
    borderRadius: "25%",
  },
  nameLeft: {
    marginLeft: "1rem",
  },
  quantity: {
    borderStyle: "groove",
    backgroundColor: "#fff",
    padding: "0.2rem",
  },
  table: {
    border: "solid 2px #a9a9a9",
    borderRadius: "1rem",
  },
  tabeleBtn: {
    width: "90%",
    margin: "auto",
    justifyContent: "flex-end",
  },
  handleBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginRight: "1rem",
  },
  check: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1rem",
    marginBottom: "3rem",
  },
  deleteBtn: {
    position: "absolute",
    top: "0",
    right: "0",
  },
});

export default useStyles;
