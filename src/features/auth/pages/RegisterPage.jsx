import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../authSlice";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Paper,
} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import RegisterForm from "../components/RegisterForm";


import "./styles.scss";

const RegisterPage = () => {

  const [reigsterData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = () => {

    dispatch(authAction.register({
      data: reigsterData, 
      onSuccess: (response) => {console.log("register success", response)},
      onError: (error) => {
        console.log(error.code)
      }
    }))
  };

  return (
    <Container component="main" className="register" maxWidth="sm">
      <Paper elevation={3} className="register__wrapper">
        <Box
          className="register__inner"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Box className="register__header" mb={3}>
            <Avatar
              sx={{ ml: "auto", mr: "auto", mb: 1, bgcolor: "secondary.main" }}
            >
              <PersonPinIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          </Box>
          <RegisterForm
            reigsterData={reigsterData}
            onChange={handleChange}
            onSubmitForm={handleSubmitForm}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
