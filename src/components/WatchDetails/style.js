import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  media: {
    width: "50%",
  },
  conteiner: {
    padding: "5% 10% 10% 10%",
    margin: "auto",
    justifyContent: "center",
  },
  conteiner_media: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
    border: "ridge",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  conteiner_text_btn: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: "5rem",
  },
  btn: {
    marginRight: "4rem",
  },
  text: {
    marginBottom: "1.5rem",
  },
  separator: {
    alignSelf: "auto",
    margin: "0 1rem 0 1rem",
    width: "3px",
    borderRadius: "10%",
    marginBottom: "5rem",
  },
  showCart: {
    position: "fixed",
    top: "50%",
    right: "2rem",
  },
  bar_link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontFamily: "'Allison', cursive",
    fontSize: "4rem",
  },
  bar_link_con: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
});

export default useStyles;
