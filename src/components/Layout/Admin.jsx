import React from 'react';
import { Button } from '@mui/material'
import { authAction } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authAction.logOut({cb: redirectAfterLogout}))
  }

  const redirectAfterLogout = () => {
    navigate("/login", {state: null})
  }
  return (
    <>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="secondary"
          
          sx={{ mb: 2 }}
          onClick={handleLogout}
        >
          LogOut
        </Button>
    </>
  )
}
