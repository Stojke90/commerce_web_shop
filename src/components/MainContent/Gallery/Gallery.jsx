import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import { v4 as uuidv4 } from "uuid";
import images from "../../../assets";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "../../dimension";

const useStyles = makeStyles(() => ({
  sliderImg: {
    width: "100%",
    borderRadius: "2rem",
  },
  slider_con: {
    width: "90%",
    margin: "2rem auto 0 auto",
  },
}));

const Gallery = () => {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();
  // const for css styles
  const classes = useStyles();

  return (
    <section className={classes.slider_con} id="slider">
      <div className="slide-container">
        <Zoom
          scale={0.2}
          arrows={false}
          autoplay={true}
          easing="linear"
          infinite={true}
          defaultIndex={0}
          duration={3000}
          transitionDuration={1500}
        >
          {images.map((item) => (
            <img
              key={uuidv4()}
              src={item}
              className={classes.sliderImg}
              style={{ height: isDimension ? "14rem" : "19rem" }}
              alt="slide watch"
            />
          ))}
        </Zoom>
      </div>
    </section>
  );
};

export default Gallery;
