import { take, put, fork, delay, call } from "redux-saga/effects"
import { authAction } from "./authSlice"

export function* handleLoginSaga(payload) {


  
    //get response from api (fake api)
    yield delay(1000)
    console.log("handle login")
    const response = {
        name: "Nguyen van A",
        email: "nguyenvana@gmail.com",
        access_token: "123123123",
    }

    localStorage.setItem("access_token", "secret__token");
    yield put(authAction.loginSuccess(response));

    //redirect to home page
}

export function* handleLogOutSaga() {

    localStorage.removeItem("access_token");
    console.log('handle logout')

    //redirect to login page
}

export function* watchLoginFlow() {

    while(true){
        const isLogedIn = Boolean(localStorage.getItem("access_token"))
        console.log("watch action")
        if(!isLogedIn){
            const { payload } = yield take(authAction.login().type)
            yield fork(handleLoginSaga, {payload})
        }
        yield take(authAction.logOut().type)
        yield call(handleLogOutSaga)
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow)
}