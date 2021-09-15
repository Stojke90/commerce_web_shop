import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./style";

function FilterMenu({ categorie, filterWatches }) {
  // const for css styles
  const classes = useStyles();

  // state for open and close price range
  const [open, setOpen] = useState(false);

  // state for filter search
  const [filter, setFilter] = useState({
    brand: "",
    sex: "",
    watchPrice: "",
  });

  // fun for close input for price search
  const handleClose = () => {
    setOpen(false);
  };

  // fun for open input for price search
  const handleOpen = () => {
    setOpen(true);
  };

  // fun for reset filter product
  const resetFilter = () => {
    setFilter({
      brand: "",
      sex: "",
      watchPrice: "",
    });
    filterWatches({
      brand: "",
      sex: "",
      watchPrice: "",
    });
  };

  // fun for unckeked radio button brand
  const handleClickBrand = (e) => {
    e.target.value === filter.brand
      ? setFilter({ ...filter, brand: "" })
      : setFilter({ ...filter, brand: e.target.value });
  };

  // fun for unckeked radio button For
  const handleClickSex = (e) => {
    e.target.value === filter.sex
      ? setFilter({ ...filter, sex: "" })
      : setFilter({ ...filter, sex: e.target.value });
  };

  return (
    <Grid container={true} className={classes.grid_con}>
      <Grid item className={classes.filter_con} xs={12} sm={12} md={12} lg={12}>
        <Typography
          onClick={() => resetFilter()}
          className={classes.filter_text}
          variant="body1"
          component="h1"
        >
          Reset filter
        </Typography>
      </Grid>

      <Grid item className={classes.pad} xs={6} sm={6} md={10} lg={10}>
        <Card>
          <CardContent>
            <Typography variant="body2" component="p">
              Brand
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup
                value={filter.brand}
                onChange={(e) =>
                  setFilter({ ...filter, brand: e.target.value })
                }
                aria-label="brand"
                name="brand"
              >
                {categorie &&
                  categorie.map((brandName) => (
                    <FormControlLabel
                      key={brandName}
                      value={brandName}
                      control={<Radio onClick={(e) => handleClickBrand(e)} />}
                      label={brandName}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      <Grid item className={classes.pad} xs={6} sm={6} md={10} lg={10}>
        <Card>
          <CardContent>
            <Typography variant="body2" component="p">
              For
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup
                value={filter.sex}
                onChange={(e) => setFilter({ ...filter, sex: e.target.value })}
                aria-label="sex"
                name="sex"
              >
                {["For Him", "For Her"].map((forHimOrHer) => (
                  <FormControlLabel
                    key={forHimOrHer}
                    value={forHimOrHer}
                    control={<Radio onClick={(e) => handleClickSex(e)} />}
                    label={forHimOrHer}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      <Grid item className={classes.pad} xs={12} sm={12} md={10} lg={10}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Price</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={filter.watchPrice}
            onChange={(e) =>
              setFilter({ ...filter, watchPrice: e.target.value })
            }
          >
            <MenuItem value={1}>From lowest</MenuItem>
            <MenuItem value={2}>From highest </MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid
        item
        className={classes.filter_con}
        style={{ margin: "0 0 1rem 0" }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => filterWatches(filter)}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default FilterMenu;
