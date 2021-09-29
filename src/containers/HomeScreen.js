import React, { Component } from "react";
import { View, Text } from "react-native";

import firebase from "firebase/app";
// import messaging from "@react-native-firebase/messaging";

//data layer
import { UserContext } from "../store/UserProvider";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import ChooseRestaurantScreen from "../containers/ChooseRestaurantScreen";
import StepScreen from "./StepScreen";
import ShoppingCartScreen from "./ShoppingCartScreen";

// request perm and then subscribe to 'weather'
// and listen to messages
// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     const unsubscribe = messaging().onMessage(async (remoteMessage) => {
//       console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));
//     });
//     messaging()
//       .subscribeToTopic("weather")
//       .then(() => console.log("Subscribed to topic Weather!"));
//   }
// }

export default  HomeScreen = (props)=> {
  
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ChooseRestaurant"
            component={ChooseRestaurantScreen}
          ></Stack.Screen>
          <Stack.Screen name="StepScreen" component={StepScreen}></Stack.Screen>
          <Stack.Screen
            name="ShoppingCartScreen"
            component={ShoppingCartScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );

}
