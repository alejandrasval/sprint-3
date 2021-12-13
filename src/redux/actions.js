import * as types from "./actionTypes";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const addToShoppingCart = (item) => ({
    type: types.ADD_TO_SHOPPINGCART,
    payload: item,
})

export const removeFromShoppingCart = (id) => ({
  type: types.REMOVE_FROM_SHOPPINGCART,
  payload: id,
})

export const getShoppingCartTotal = (shoppingCart) => {
  shoppingCart.reduce((amount, item) => item.price + amount, 0)
}

const signUpStart = () => ({
  type: types.SIGNUP_START,
});

const signUpSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  payload: user,
});

const signUpError = (error) => ({
  type: types.SIGNUP_FAIL,
  payload: error,
});

const logInStart = () => ({
  type: types.LOGIN_START,
});

const logInSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const logInError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logOutStart = () => ({
  type: types.LOGOUT_START,
});

const logOutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
});

const logOutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const signUpInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(signUpStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(signUpSuccess(user));
      })
      .catch((error) => dispatch(signUpError(error.message)));
  };
};

export const logInInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(logInStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(logInSuccess(user));
      })
      .catch((error) => dispatch(logInError(error.message)));
  };
};

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logOutStart());
    signOut(auth)
    .then((resp) => dispatch(logOutSuccess()))
    .catch((error) => dispatch(logOutError(error.message)))
  };
};
