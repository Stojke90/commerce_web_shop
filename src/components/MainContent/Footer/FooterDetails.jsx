import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { conctact, company, help, returns } from "./data";
import useStyles from "./style";
import { Link } from "react-router-dom";

function FooterDetails() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={10} sm={4} md={2} lg={2} xl={2} className={classes.space}>
        <List
          component="ul"
          aria-labelledby="nested-list"
          subheader={<ListSubheader component="div">Contact Us</ListSubheader>}
        >
          {conctact.map((data) => (
            <ListItem
              key={uuidv4()}
              component={Link}
              to={`./BlankPage/${data}`}
            >
              <ListItemText primary={data} className={classes.link_color} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={10} sm={4} md={2} lg={2} xl={2} className={classes.space}>
        <List
          component="ul"
          aria-labelledby="nested-list"
          subheader={
            <ListSubheader component="div">Company Info</ListSubheader>
          }
        >
          {company.map((data) => (
            <ListItem
              key={uuidv4()}
              component={Link}
              to={`./BlankPage/${data}`}
            >
              <ListItemText primary={data} className={classes.link_color} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={10} sm={4} md={2} lg={2} xl={2} className={classes.space}>
        <List
          component="ul"
          aria-labelledby="nested-list"
          subheader={<ListSubheader component="div">Help Center</ListSubheader>}
        >
          {help.map((data) => (
            <ListItem
              key={uuidv4()}
              component={Link}
              to={`./BlankPage/${data}`}
            >
              <ListItemText primary={data} className={classes.link_color} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={10} sm={4} md={2} lg={2} xl={2} className={classes.space}>
        <List
          component="ul"
          aria-labelledby="nested-list"
          subheader={
            <ListSubheader component="div">Returns & Warranty</ListSubheader>
          }
        >
          {returns.map((data) => (
            <ListItem
              key={uuidv4()}
              component={Link}
              to={`./BlankPage/${data}`}
            >
              <ListItemText primary={data} className={classes.link_color} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={10} sm={4} md={2} lg={2} xl={2} className={classes.space}>
        <List
          component="ul"
          aria-labelledby="nested-list"
          subheader={
            <ListSubheader component="div">Customer Service</ListSubheader>
          }
        >
          <ListItem>
            <ListItemText
              style={{ color: "#000" }}
              primary="877-834-1434
                  Brooklyn Army Terminal Building A
                    140A 58th Street, Suite 6N - 6th Floor
                      Brooklyn, NY 11220"
            />
          </ListItem>
        </List>
      </Grid>
    </>
  );
}

export default FooterDetails;
