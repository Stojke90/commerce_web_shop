import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useWindowDimensions from "../../dimension";
function About() {
  // for css style if inner width less then 484 px
  const isDimension = useWindowDimensions();

  return (
    <Grid item style={{ marginTop: "1rem" }}>
      <Typography
        variant="h2"
        paragraph
        gutterBottom
        color="textSecondary"
        align="center"
        style={{ fontSize: isDimension ? "2.5rem" : "3.75rem" }}
      >
        About E-Commerce
      </Typography>
      <Grid
        item
        style={{
          border: "solid 0.2rem darkgrey",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <Typography paragraph>
          An uncompromising effort to exceed expectations. An incredible focus
          on the customers needs. The most competitive pricing you can find
          online.
        </Typography>
        <Typography paragraph>
          E-Commerce is a leading fashion retailer in watches.
        </Typography>
        <Typography paragraph>
          E-Commerce believes that everyone should be able to wear what they
          love, and do so at the right price. Our incredible platform allows
          shoppers to quickly and easily find exactly what they want from over
          650 world renowned brands and 75,000 unique items.
        </Typography>
        <Typography paragraph>
          We pride ourselves on our ability to deliver the best prices, most
          varied selection, and finest customer service. Throughout the past
          three decades we’ve committed to innovation in both the fashion and
          technological landscape.
        </Typography>
        <Typography paragraph>
          Our goal has and always will be to earn the trust and satisfaction of
          our customers. Our customer service specialists are always ready to
          assist, and our state of the art New York City fulfillment center is
          always capable of swiftly delivering products to over 150 countries.
        </Typography>
        <Typography paragraph>
          Should you have any comments or questions, we are available to assist
          via phone, live chat or email!
        </Typography>
        <Typography paragraph id="offers">
          Remember, all transactions are digitally encrypted using the latest
          technologies and we never share your information.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
