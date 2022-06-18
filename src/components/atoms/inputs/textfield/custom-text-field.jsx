import { Grid, TextField } from "@mui/material";
import React from "react";

export const CustomTextField = ({ required, id, name, label, xs, sm, placeholder, value }) => (
  <Grid item xs={xs} sm={sm}>
    <TextField
      required={required}
      id={id}
      name={name}
      label={label}
      fullWidth
      variant="standard"
      placeholder={placeholder}
      defaultValue={value}
    />
  </Grid>
);
