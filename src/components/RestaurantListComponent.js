import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";

//data layer
import { UserContext } from "../store/UserProvider";

const Restaurants = [
  {
    uid: "abcdefghilkmn",
    latitude: 32.3374669,
    longitutde: 111.0635163,
    fullAddress: "4025 Ina and Thornydale",
    description: "Ina and Thornydlale",
    approxDistance: 12,
  },
  {
    uid: "zyxwvutsrqponmlkijgfedcba",
    latitude: 32.2504013,
    longitutde: -110.9633547,
    fullAddress: "9099 First and Grant",
    description: "First and Grant",
    approxDistance: 14,
  },
];

export default RestaurantListComponent = (props) => {
  const { bowls, currentBowl, restaurant, setRestaurant } =
    React.useContext(UserContext); // read only
  return (
    <View>
      <View
        style={{
          flex: 3,
          backgroundColor: "dark blue",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {Restaurants.map((r) => {
          return (
            <TouchableHighlight
              key={r.uid}
              underlayColor="blue"
              onPress={() => {
                setRestaurant(r);
                props.navigation.navigate("StepScreen", {
                  title:
                    "Bowl: " +
                    (currentBowl + 1) +
                    ", Step: " +
                    (bowls[currentBowl].step + 1),
                });
              }}
            >
              <View>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 48 }}
                >
                  {r.fullAddress}
                </Text>
                <Text style={{ color: "white", fontSize: 36 }}>
                  Approx. {r.approxDistance} Miles
                </Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
