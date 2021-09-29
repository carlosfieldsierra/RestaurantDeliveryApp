import React, { Component, useEffect } from "react";
import { View, Text, Button } from "react-native";

//data layer
import { UserContext } from "../store/UserProvider";

import Restaurants from "../static/Restaurants";
import RestaurantListComponent from "../components/RestaurantListComponent";

import firebase from "firebase/app";
//const admin = require("firebase-admin");

export default ChooseRestaurantScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "cyan",
      }}
    >
      <Button
        title={"(Admin) SendFCM message"}
        onPress={() => {
          const message = {
            data: {
              type: "warning",
              content: "A new weather warning has been created!",
            },
            topic: "weather",
          };
          /*
          admin
            .messaging()
            .send(message)
            .then((response) => {
              console.log("Successfully sent message:", response);
            })
            .catch((error) => {
              console.log("Error sending message:", error);
            });
            */
        }}
      ></Button>
      <RestaurantListComponent
        navigation={navigation}
        data={Restaurants}
      ></RestaurantListComponent>
    </View>
  );
};
