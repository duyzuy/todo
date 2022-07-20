import { take, put, fork, delay, call } from "redux-saga/effects"
import { authAction } from "./authSlice"

export function* handleLoginSaga(action) {


  
    //get response from api (fake api)
    yield delay(1000)
    console.log(action)
    const { payload } = action;
    const {cb, data} = payload
    const response = {
        name: "Nguyen van A",
        email: "nguyenvana@gmail.com",
        access_token: "123123123",
    }

    localStorage.setItem("access_token", "secret__token");
    yield put(authAction.loginSuccess(response));

   
  
    //redirect to home page
    if(typeof cb === "function"){
        cb()
    }
}

export function* handleLogOutSaga(action) {
    
    const { payload } = action;
    const { cb } = payload
    localStorage.removeItem("access_token");

    //redirect to login page
    if(typeof cb === "function"){
        cb()
    }
    
}

export function* watchLoginFlow() {

    while(true){
     
        const isLogedIn = Boolean(localStorage.getItem("access_token"))
        if(!isLogedIn){
            const action = yield take(authAction.login().type)
            yield fork(handleLoginSaga, action)
        }
        const action = yield take(authAction.logOut().type)
        yield call(handleLogOutSaga, action)
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow)
}