import React, { useCallback, useState } from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { Typography, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Avatar, Button, Grid, Link } from "@mui/material";
import { Visibility, VisibilityOff} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./styles.scss";
import { authAction } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [showPassWord, setShowPassWord] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassWord(!showPassWord)
  }

  const handleChange = useCallback( (name, value) => {

    setLoginData(prevState => ({...prevState, [name]: value }))


  }, [loginData])
  
  const handleLogin = () => {
    dispatch(authAction.login(loginData))
  }
    
  const handleLogout = () => {
    dispatch(authAction.logOut())
  }


  return (
    
    <Container component="main" maxWidth="sm"
      className="login"
    >
      
        <Paper elevation={3} className="login__wrapper">
              <Box className="login__inner"
               sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4
              }}>
                  <Box className="login__header" sx={{mb: 3}}>
                  <Avatar sx={{ ml: "auto", mr: "auto", mb: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  </Box>
            
                <Box className="login__form">
                  <FormControl fullWidth variant="outlined" sx={{mb: 3}}>
                      <InputLabel htmlFor="outlined-adornment-email">Email Address *</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-email"
                        type="text"
                        value={loginData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="email address"
                              edge="end"
                            >
                            { <EmailIcon />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Email Address *"
                      />
                    </FormControl>

                    <FormControl fullWidth variant="outlined" sx={{mb: 3}}>
                      <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassWord ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassWord ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password *"
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      
                      sx={{ mb: 2 }}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      
                      sx={{ mb: 2 }}
                      onClick={handleLogout}
                    >
                      LogOut
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    
    </Container>
  )
}

export default LoginPage