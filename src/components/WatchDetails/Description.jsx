import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

// fun from material ui for tab Panel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography
            dangerouslySetInnerHTML={{ __html: children }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Description = ({ watchDetail }) => {
  // const for css styles
  const classes = useStyles();
  // state for show panel
  const [value, setValue] = React.useState(0);
  // handle change view tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} />
          <Tab label="About" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {watchDetail.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        rem impedit molestiae ratione laborum laudantium deleniti illo voluptate
        quo consequatur voluptates esse explicabo adipisci doloribus atque,
        sequi, cumque alias similique! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Perspiciatis rem impedit molestiae ratione laborum
        laudantium deleniti illo voluptate quo consequatur voluptates esse
        explicabo adipisci doloribus atque, sequi, cumque alias similique! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis rem
        impedit molestiae ratione laborum laudantium deleniti illo voluptate quo
        consequatur voluptates esse explicabo adipisci doloribus atque, sequi,
        cumque alias similique! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Perspiciatis rem impedit molestiae ratione laborum
        laudantium deleniti illo voluptate quo consequatur voluptates esse
        explicabo adipisci doloribus atque, sequi, cumque alias similique!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        rem impedit molestiae ratione laborum laudantium deleniti illo voluptate
        quo consequatur voluptates esse explicabo adipisci doloribus atque,
        sequi, cumque alias similique! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Perspiciatis rem impedit molestiae ratione laborum
        laudantium deleniti illo voluptate quo consequatur voluptates esse
        explicabo adipisci doloribus atque, sequi, cumque alias similique! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis rem
        impedit molestiae ratione laborum laudantium deleniti illo voluptate quo
        consequatur voluptates esse explicabo adipisci doloribus atque, sequi,
        cumque alias similique!
      </TabPanel>
    </div>
  );
};

export default Description;
