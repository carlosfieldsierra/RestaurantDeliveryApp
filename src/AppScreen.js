import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";

// data
import { UserContext, UserProvider } from "./store/UserProvider";

import LocApi from "../src/api/locapi";

// api's
//import { Api } from "./api/api";
//import { LocApi } from "./api/locapi";

// nav
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

// containers
import ContainerScreen from "./containers/ContainerScreen";

export default function AppScreen(props) {
  return (
    <UserProvider>
      <ContainerScreen />
      <LocApi />
    </UserProvider>
  );
}
//AppScreen.contextType = React.useContext(DataContext);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
