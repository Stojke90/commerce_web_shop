import {
  Button,
  CardMedia,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
import useStyles from "./style";
import { v4 as uuidv4 } from "uuid";
import useWindowDimensions from "../../dimension";

function CartCard({ cart }) {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();
  // const for css styles
  const classes = useStyles();

  // cosnt get states and fun from context
  const { handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } =
    useContext(AppContext);

  // fun for create data for table
  function createData(name, value) {
    return { name, value };
  }

  // const with data for tabel
  const rows = [
    createData("Items", cart.total_items),
    createData("Discount", cart.discount),
    createData("Total", cart.subtotal.formatted_with_symbol),
  ];

  // initial set border to none of last child
  useEffect(() => {
    window.document.querySelectorAll("th")[2].style.border = "none";
    window.document.querySelectorAll("td")[2].style.border = "none";
  }, [cart]);

  return (
    <Container>
      <Grid container className={classes.con}>
        {cart.line_items &&
          cart.line_items.map((item) => (
            <Grid container key={uuidv4()} className={classes.cardCart}>
              <Grid item sm={6} md={6} className={classes.flexCenter}>
                <CardMedia
                  component="img"
                  alt={item.name + " " + item.sku}
                  image={item.media.source}
                  title={item.name}
                  className={classes.imgSize}
                />
                <Typography
                  className={classes.nameLeft}
                  style={{ fontSize: isDimension ? "0.9rem" : "1rem" }}
                >
                  {item.name}
                </Typography>
              </Grid>

              <Grid item sm={2} md={2} className={classes.flexCenter}>
                <Button
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Typography className={classes.quantity}>
                  {item.quantity}
                </Typography>
                <Button
                  onClick={() =>
                    handleUpdateCartQty(item.id, item.quantity + 1)
                  }
                >
                  +
                </Button>
              </Grid>

              <Grid item sm={1} md={1} className={classes.autoCenter}>
                <Typography>x</Typography>
              </Grid>

              <Grid item sm={1} md={1} className={classes.autoCenter}>
                <Typography>{item.price.formatted_with_symbol}</Typography>
              </Grid>

              <Grid item sm={1} md={1} className={classes.autoCenter}>
                <Typography>=</Typography>
              </Grid>

              <Grid item sm={1} md={1} className={classes.autoCenter}>
                <Typography>&euro;{item.quantity * item.price.raw}</Typography>
              </Grid>
              <Button
                className={classes.deleteBtn}
                onClick={() => handleRemoveFromCart(item.id)}
                variant="contained"
                color="secondary"
                size="small"
                style={{ padding: isDimension ? "0" : "4px 10px" }}
              >
                X
              </Button>
            </Grid>
          ))}
      </Grid>
      <Grid container className={classes.tabeleBtn}>
        <Grid
          item
          xs={isDimension ? 5 : 4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          className={classes.handleBtn}
        >
          <Button
            variant="contained"
            style={{ fontSize: isDimension ? "0.8rem" : "1rem" }}
            onClick={() => handleEmptyCart(cart.id)}
          >
            Empthy Cart
          </Button>
          <Button
            component={Link}
            to={"/"}
            variant="contained"
            color="secondary"
            style={{ fontSize: isDimension ? "0.8rem" : "1rem" }}
          >
            Shop more
          </Button>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.table}>
          <TableContainer>
            <Table aria-label="total">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    style={{ padding: isDimension ? "9px" : "16px" }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ padding: isDimension ? "9px" : "16px" }}
                    >
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          className={classes.check}
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={12}
        >
          <Button
            component={Link}
            to={"/Checkout"}
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartCard;
