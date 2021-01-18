import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { LOGIN, LOGOUT } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";
import Swal from "sweetalert2";
import { notesLogout } from "./notesActions";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));

      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
      Swal.fire("Error", error.message, "error");
    }
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    } catch (error) {
      console.log(error);
      dispatch(finishLoading());
      Swal.fire("Error", error.message, "error");
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (uid, displayName) => ({
  type: LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: LOGOUT,
});
