import React, { useState, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";

// data
import { UserContext, UserProvider } from "./store/UserProvider";

import LocApi from "../src/api/locapi";

// api's
//import { Api } from "./api/api";
//import { LocApi } from "./api/locapi";

// nav
import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// containers
import ContainerScreen from "./containers/ContainerScreen";
import LoginScreen from "./containers/LoginScreen";
import RestaurantScreen from "./containers/RestaurantScreen";


// <=== Stack & Screens ===>
const Stack = createNativeStackNavigator();
// Them for stack
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
// ===========================


export default function AppScreen(props) {
  return (
    <UserProvider>
      <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="Login Screen"   >
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Restaurant Screen" component={RestaurantScreen} />


          </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
// {/* <ContainerScreen />
// <LocApi /> */}
//AppScreen.contextType = React.useContext(DataContext);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
