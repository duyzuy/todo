import {
  take,
  put,
  fork,
  delay,
  call,
  takeLatest,
} from "redux-saga/effects";
import { authAction } from "./authSlice";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
function* handleLoginSaga(action) {
  //get response from api (fake api)

  const { payload } = action;

  const { onSuccess, onError, data } = payload;

  try {
    const response = yield signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    //save data on local storage
    localStorage.setItem(
      "access_token",
      response.user.accessToken
    );

    //update state after login success
    yield put(authAction.loginSuccess(response.user));

    // redirect to home page
    if (typeof onSuccess === "function") {
      onSuccess();
    }
  } catch (error) {
    console.log(error.message);
    yield put(authAction.loginFailed(error.message));
  }
}

function* handleLogOutSaga(action) {
  const { payload } = action;
  const { onSuccess, onError } = payload;
  try {
    yield signOut(auth);
    localStorage.removeItem("access_token");

    //redirect to login page
    if (typeof onSuccess === "function") {
      onSuccess();
    }
  } catch (error) {
    onError(error);
  }
}

function* watchLoginFlow() {
  while (true) {
    const isLogedIn = Boolean(
      localStorage.getItem("access_token")
    );
    if (!isLogedIn) {
      const action = yield take(authAction.login().type);
      yield fork(handleLoginSaga, action);
    }
    const action = yield take(authAction.logOut().type);
    yield call(handleLogOutSaga, action);
  }
}

function* handleRegisterSaga(action) {
  const { data, onError, onSuccess } = action.payload;

  try {
    const response = yield createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    if (response) {
      if (typeof onSuccess === "function") {
        onSuccess(response);
      }
    }
  } catch (error) {
    if (typeof onError === "function") {
      onError(error);
    }
  }
}

// function* handleGetProfileSaga(action) {
//   try {
//     const user = yield onAuthStateChanged(auth, (user) => {
//       if (user) {
//         return user;
//       } else {
//         return "12312313";
//       }
//     });
//     console.log(user);
//     if (user) {
//       yield put(authAction.getProfileSuccess(), user);
//     }
//   } catch {}
// }

export default function* authSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(
    authAction.register().type,
    handleRegisterSaga
  );
  // yield takeLatest(
  //   authAction.getProfile().type,
  //   handleGetProfileSaga
  // );
}
