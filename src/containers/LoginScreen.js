import React, { Component } from "react";
import { Button, View, Text } from "react-native";

import firebase from "firebase/app";
require("firebase/auth");
import "firebase/firestore";

// data layer
import { UserContext } from "../../src/store/UserProvider";

// api'
import { Login } from "../../src/api/api";

export default LoginScreen = () => {
  const { loggedIn, setLoggedIn } = React.useContext(UserContext); // read only
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "cyan",
      }}
    >
      <Text>Rude Ramen</Text>
      <Button
        title="Login"
        onPress={() => {
          firebase.auth().onAuthStateChanged((user) => {
            setLoggedIn(user);
          });
          firebase
            .auth()
            .signInAnonymously()
            .then(() => {
              //setLoggedIn(true);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      ></Button>
    </View>
  );
};
