import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";
import { useStyles } from "./imports";

function FormInput({ name, label, required }) {
  // const for css styles
  const classes = useStyles();
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6} className={classes.field}>
      <Controller
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        defaultValue=""
      />
    </Grid>
  );
}

export default FormInput;
