import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const RegisterForm = ({ onChange, reigsterData, onSubmitForm }) => {
  const theme = useTheme();
  const { firstName, lastName } = reigsterData;

  const [showPassword, setShowPassWord] = useState(false);
  const [showPasswordConfirm, setShowPassWordConfirm] = useState(false);

  let fullName = useMemo(() => {
    return firstName + lastName;
  }, [firstName, lastName]);

  const onSubmitFormData = useCallback(
    (e) => {
      e.preventDefault();
      const submitData = {
        ...reigsterData,
      };

      onSubmitForm(submitData)
    },
    [reigsterData, fullName]
  );

  const handleClickShowPassword = () => {
    setShowPassWord(!showPassword);
  };

  return (
    <Box
      component="form"
      noValidate
      className="register__form"
      onSubmit={onSubmitFormData}
    >
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete={reigsterData.firstName}
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={reigsterData.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete={reigsterData.lastName}
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            autoFocus
            value={reigsterData.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} mb={3}>
        <TextField
          autoComplete={reigsterData.email}
          name="email"
          required
          fullWidth
          id="email"
          label="Email"
          autoFocus
          value={reigsterData.email}
          onChange={(e) => onChange("email", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} mb={3}>
        <TextField
          autoComplete={reigsterData.phoneNumber}
          name="phoneNumber"
          required
          fullWidth
          id="phoneNumber"
          label="Phone Numbher"
          autoFocus
          value={reigsterData.phoneNumber}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} mb={3}>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={reigsterData.password}
            onChange={(e) => onChange("password", e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} mb={3}>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password-confirm">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-confirm"
            type={showPasswordConfirm ? "text" : "password"}
            value={reigsterData.passwordConfirm}
            onChange={(e) => onChange("passwordConfirm", e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle passwordConfirm visibility"
                  onClick={() => setShowPassWordConfirm(!showPasswordConfirm)}
                  edge="end"
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password Confirm"
          />
        </FormControl>
      </Grid>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        fullWidth
        size="large"
        sx={{ mb: 2 }}
      >
        Register
      </Button>
      <Grid item sx={{ textAlign: "center" }}>
        <Link
          to="/login"
          style={{
            color: theme.palette.primary.main,
            fontFamily: theme.palette.typography.fontFamily,
          }}
        >
          {"Already have account? Sign in"}
        </Link>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
