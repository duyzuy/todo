import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogedIn: false,
    isLoading: false,
    user: null,
}


export const authSlice = createSlice({
    name: 'auth',
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
                user: payload
            }

            return state
        },
        loginFailed: (state, action) => {

        },
        logOut: (state) => {
            state = {
                ...state, 
                isLogedIn: false,
                user: null
            }
            return state;
        }
    }
})

export const authAction = authSlice.actions
export default authSlice.reducer