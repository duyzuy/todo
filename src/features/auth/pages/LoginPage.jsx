import React, { useCallback, useState, useMemo, useEffect } from "react";
import Container from "@mui/material/Container";
import { Typography, Avatar, Box, Paper } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./styles.scss";
import { authAction } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { isValidEmail, isPassWordValid } from "../../../utils/validation";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (name, value) => {
      setLoginData((prevState) => ({ ...prevState, [name]: value }));
    },
    [loginData]
  );

  let isValidFormSubmit = useMemo(() => {
    if (isValidEmail(loginData.email) && isPassWordValid(loginData.password)) {
      return true;
    }
    return false;
  }, [loginData]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (isValidFormSubmit) {
       
      dispatch(
        authAction.login({
          data: loginData,
          onSuccess: () => navigate("/admin/dashboard", { state: loginData }),
          onError: () => {
            console.log("error");
          },
        })
      );
    }


  };
  return (
    <Container component="main" maxWidth="sm" className="login">
      <Paper elevation={3} className="login__wrapper">
        <Box
          className="login__inner"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Box className="login__header" sx={{ mb: 3 }}>
            <Avatar
              sx={{ ml: "auto", mr: "auto", mb: 1, bgcolor: "secondary.main" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>

          <LoginForm
            onSubmitLogin={handleSubmitLogin}
            loginData={loginData}
            onChange={handleChange}
            isLoading={isLoading}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
