import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form_con: {
    margin: "4rem auto",
  },
  field: {
    padding: "1rem",
  },
  adress_form: {
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
  },
  text_address: {
    width: "95%",
    marginLeft: "auto",
  },
  btn_address: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "2rem auto",
  },
  loader: {
    position: "relative",
    left: "40%",
    top: "50%",
    margin: "2rem",
  },
  payParagraf: {
    margin: "1rem auto",
  },
  btnPayBack: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
