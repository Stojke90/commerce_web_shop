import React, { useContext } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { CheckoutContext } from "./Checkout";

const Reviwe = () => {
  const { token } = useContext(CheckoutContext);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {token?.live.line_items.map((product) => (
          <ListItem key={uuidv4()}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
            {token?.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Reviwe;
