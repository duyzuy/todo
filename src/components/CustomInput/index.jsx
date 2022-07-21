import React from "react";
import { TextField } from "@mui/material";
const CustomInput = (props, { onChange }) => {
  return (
    <TextField
      autoComplete="given-name"
      name="firstName"
      required
      fullWidth
      id="firstName"
      label="First Name"
      autoFocus
      value={reigsterData.firstName}
      onChange={onChange}
    />
  );
};

export default CustomInput;
