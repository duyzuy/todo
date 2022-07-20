import React, { useState } from 'react'
import { FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Button, Grid, Link, Box } from "@mui/material";
import { Visibility, VisibilityOff} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

const LoginForm = ({onSubmitLogin, onChange, loginData, isLoading}) => {

    const [showPassWord, setShowPassWord] = useState(false)

    const handleClickShowPassword = () => {
      setShowPassWord(!showPassWord)
    }
    return (
        <Box 
            component="form" 
            className="login__form"
            onSubmit={onSubmitLogin}>
            <FormControl fullWidth variant="outlined" sx={{mb: 3}}>
                <InputLabel htmlFor="outlined-adornment-email">Email Address *</InputLabel>
                <OutlinedInput
                id="outlined-adornment-email"
                type="text"
                value={loginData.email}
                onChange={(e) => onChange('email', e.target.value)}
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
                onChange={(e) => onChange('password', e.target.value)}
                autoComplete={loginData.password}
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
            >
                {isLoading ? "loading..." : "Login"}
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
    )
}

export default LoginForm