import React, { useEffect, useState } from "react";
import { authAction } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import withPageLayout from "../../components/Common/withPageLayout";

const Profile = () => {
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    // dispatch(authAction.getProfile())
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authAction.getProfileSuccess(user));
        setUserProfile({
          email: user.email,
        });
      } else {
      }
    });
    return () => {
      unSubcribe();
    };
  }, []);
  return <div>Profile {userProfile.email}</div>;
};

export default withPageLayout(Profile, {
  title: "Profile",
});
