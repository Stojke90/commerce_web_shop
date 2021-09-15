import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  makeStyles,
  Card,
} from "@material-ui/core";
import { AppContext } from "../../../../App";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: "10rem",
    backgroundSize: "70%",
    transition: "1.8s ease-out",
    borderBottom: "solid 1px #a9a9a9",
    "&:hover": {
      backgroundSize: "100%",
    },
  },
  title: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "250px",
  },
  btn: {
    justifyContent: "space-around",
  },
  soldOut: {
    width: "50%",
    backgroundColor: "red",
    position: "absolute",
    transform: "rotate(325deg)",
    top: "20px",
    left: "-26px",
    textAlign: "center",
  },
});

const Product = ({ item }) => {
  // const for css styles
  const classes = useStyles();

  // const get fun from context
  const { addToCart } = useContext(AppContext);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {item.inventory.available === 0 && (
          <div className={classes.soldOut}>Sold Out</div>
        )}
        <CardMedia
          className={classes.media}
          image={item.media.source}
          title={item.name}
          alt="text"
        />
        <CardContent>
          <Typography
            className={classes.title}
            dangerouslySetInnerHTML={{ __html: item.name }}
            gutterBottom
            variant="h5"
            component="h2"
          />
          <Typography
            dangerouslySetInnerHTML={{
              __html: item.price.formatted_with_symbol,
            }}
            gutterBottom
            variant="h5"
            component="h2"
          />
          <Typography
            className={classes.title}
            dangerouslySetInnerHTML={{ __html: item.sku }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btn}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to={`./WatchDetails/${item.id}`}
        >
          Details
        </Button>
        <IconButton
          arial-label="add to cart"
          onClick={() => addToCart(item.id, 1)}
          disabled={item.inventory.available === 0 ? true : false}
        >
          <AddShoppingCartSharpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
