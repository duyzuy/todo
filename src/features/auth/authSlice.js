import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogedIn: false,
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      const { payload } = action;
      state = {
        ...state,
        isLoading: false,
        isLogedIn: true,
        user: payload,
      };

      return state;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      console.log("login fail");
    },
    logOut: (state) => {
      state = {
        ...state,
        isLogedIn: false,
        user: null,
      };
      return state;
    },
    register: (state) => {
      state.isLoading = true;
    },
    registerSuccess: () => {},
    getProfile: (state) => {
      console.log("get");
    },
    getProfileSuccess: (state, action) => {
      state = {
        ...state,
        user: {
          email: action.payload.email,
          displayName: action.payload.displayName,
          emailVerified: action.payload.emailVerified,
          photoURL: action.payload.photoURL,
        },
      };
      return state;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
