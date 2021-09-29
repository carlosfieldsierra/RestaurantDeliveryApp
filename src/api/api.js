import firebase from "firebase/app";
require("firebase/auth");
import "firebase/firestore";
import { DataContext } from "../store/UserProvider";

import React, { useEffect } from "react";

// config
const firebaseConfig = {
  apiKey: "AIzaSyBk7sHiW7lXZzWTstDEXyEncdCDJjqa2FY",
  authDomain: "ruderestaurant-e21b.firebaseapp.com",
  databaseURL: "https://ruderestaurant-e21b.firebaseio.com",
  projectId: "ruderestaurant-e21b",
  storageBucket: "ruderestaurant-e21b.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:948919900781:android:ff70a8e205efef4174bd64",
  measurementId: "G-measurement-id",
};

// initilize app
// this is hoisted
export let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// supported types:
//  silent login
//  username and password
module.exports.LoginType = {
  Silent: 0,
  UsernamePassword: 1,
};

// for LoginType.UsernamePassword, data is data.username and data.password
// TODO: something on error
export const Login = (type, data = undefined) => {
  // force silent for null type
  if (type == null || type == undefined) type = module.exports.LoginType.Silent;
  // login silent if type is silent, if data is undefined, or if data.username or data.password is undefined
  if (
    type == module.exports.LoginType.Silent ||
    (type == module.exports.LoginType.UsernamePassword &&
      (data == undefined
        ? true
        : data.username == undefined || data.password == undefined))
  ) {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  } else {
    // login username pass

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.username, data.password)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }
};

// TODO do something
export const Logout = () => {
  firebase.auth().signOut();
};

export const db = app.firestore();
