import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useWindowDimensions from "../dimension";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  soldOut: {
    width: "50%",
    backgroundColor: "red",
    position: "absolute",
    transform: "rotate(325deg)",
    textAlign: "center",
  },
}));

export default function FullScreen({ style, watchDetail }) {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();

  // const for css styles
  const classes = useStyles();

  // state for show or close modal of img product
  const [open, setOpen] = React.useState(false);

  // fun for open modal
  const handleOpen = () => {
    setOpen(true);
  };

  // fun for close modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.center}>
      {watchDetail.inventory.available === 0 && (
        <div
          className={classes.soldOut}
          style={{
            top: isDimension ? "18px" : "33px",
            left: isDimension ? "-43px" : "-63px",
          }}
        >
          Sold Out
        </div>
      )}
      <img
        style={{ cursor: "zoom-in" }}
        onClick={handleOpen}
        className={style.media}
        src={watchDetail.media.source}
        alt={watchDetail.categories[0].name + "watch"}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img
              style={{
                cursor: "zoom-out",
                width: "80%",
                margin: "auto",
                display: "block",
              }}
              onClick={() => handleClose()}
              src={watchDetail.media.source}
              alt={watchDetail.categories[0].name + "watch"}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
