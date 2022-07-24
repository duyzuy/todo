import React, { useEffect, useState } from "react";
import { authAction } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import withPageLayout from "../../components/Common/withPageLayout";
import {
  Container,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Avatar,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";

const Profile = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector(
    (state) => state.auth.user
  );
  const [allowEmailedit, setAllowEmailEdit] =
    useState(false);
  const [profileData, setprofileData] =
    useState(userProfile);

  console.log(userProfile);
  useEffect(() => {
    // dispatch(authAction.getProfile())
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authAction.getProfileSuccess(user));
      } else {
      }
    });
    return () => {
      unSubcribe();
    };
  }, []);

  const updateProfile = () => {
    console.log(userProfile);
  };

  const handleChange = (name, value) => {
    if (value) {
      setprofileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  return (
    <Container>
      <Box component="form">
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItem: "center",
            justifyContent: "space-between",
            width: 400,
          }}
        >
          {profileData?.photoURL ? (
            <Avatar
              alt="Remy Sharp"
              src={profileData.photoURL}
            />
          ) : (
            <Avatar
              sx={(theme) => ({
                bgcolor: theme.palette.Avatar,
              })}
            >
              N
            </Avatar>
          )}
          <Button variant="outlined" size="small">
            <span style={{ marginRight: "10px" }}>
              Change Avatar
            </span>
            <DriveFileRenameOutlineIcon />
          </Button>
        </Box>

        <FormControl
          sx={{ mb: 2, width: 400 }}
          variant="outlined"
        >
          <InputLabel htmlFor="profile-useremail">
            Email
          </InputLabel>
          <OutlinedInput
            id="profile-useremail"
            type="text"
            value={
              profileData?.email ? profileData.email : "---"
            }
            onChange={(e) =>
              handleChange("email", e.target.value)
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Allow edit email"
                  onClick={() =>
                    setAllowEmailEdit(!allowEmailedit)
                  }
                  edge="end"
                >
                  <DriveFileRenameOutlineIcon />
                </IconButton>
              </InputAdornment>
            }
            disabled={allowEmailedit ? false : true}
            autoFocus
            label="Email"
          />
        </FormControl>
        <FormControl
          sx={{ mb: 2, width: 400 }}
          variant="outlined"
        >
          <InputLabel htmlFor="profile-phone">
            Phone number
          </InputLabel>
          <OutlinedInput
            id="profile-phone"
            type="text"
            value={
              profileData?.phoneNumber
                ? profileData.phoneNumber
                : "---"
            }
            onChange={(e) =>
              handleChange("phoneNumber", e.target.value)
            }
            label="Phone number"
          />
        </FormControl>
        <FormControl
          sx={{ mb: 2, width: 400 }}
          variant="outlined"
        >
          <InputLabel htmlFor="profile-displayName">
            Display name
          </InputLabel>
          <OutlinedInput
            id="profile-displayName"
            type="text"
            value={
              profileData?.displayName
                ? profileData.displayName
                : "---"
            }
            onChange={(e) =>
              handleChange("displayName", e.target.value)
            }
            label="Display name"
          />
        </FormControl>
        <Grid>
          Verified:
          {profileData?.emailVerified ? (
            <VerifiedUserIcon
              color="red"
              sx={(theme) => ({
                color: theme.palette.success.main,
              })}
            />
          ) : (
            <RemoveModeratorIcon
              sx={(theme) => ({
                color: theme.palette.error.main,
              })}
            />
          )}
        </Grid>
        <Button type="button" onClick={updateProfile}>
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default withPageLayout(Profile, {
  title: "Profile",
});
