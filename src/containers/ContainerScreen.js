import React, { Component } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../store/UserProvider";

import HomeScreen from "../../src/containers/HomeScreen";
import LoginScreen from "../../src/containers/LoginScreen";

export default ContainerScreen = () => {
  const { loggedIn, setLoggedIn } = React.useContext(UserContext); // read only
  return loggedIn ? <HomeScreen /> : <LoginScreen />;
};
