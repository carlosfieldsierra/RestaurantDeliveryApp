import React, { Component, useEffect } from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";

//data layer
import { UserContext } from "../store/UserProvider";

export default ShoppingCartScreen = ({ navigation }) => {
  const { currentBowl, restaurant, setBowls, bowls, setCurrentBowl } =
    React.useContext(UserContext);
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "yellow",
          justifyContent: "center",
          allignItems: "center",
        }}
      >
        <Text
          style={{
            paddingBottom: 10,
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            allignItems: "center",
            alignContent: "center",
          }}
        >
          {restaurant.fullAddress}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: "white",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {bowls.map((bowl, index) => {
          return (
            <TouchableHighlight
              onPress={() => {
                setCurrentBowl(index);
                // set current step to 0
                var b = bowls;
                b[index].step = 0;
                setBowls(b);
                navigation.push("StepScreen", {
                  title:
                    "Bowl: " +
                    (currentBowl + 1) +
                    ", Step: " +
                    (bowls[currentBowl].step + 1),
                });
              }}
            >
              <Text>Bowl {index + 1}</Text>
            </TouchableHighlight>
          );
        })}
        <TouchableHighlight
          onPress={() => {
            setCurrentBowl(bowls.length);
            var b = bowls;
            b.push({ step: 0 });
            setBowls(b);
            navigation.push("StepScreen", {
              title:
                "Bowl: " +
                (currentBowl + 1) +
                ", Step: " +
                (bowls[currentBowl].step + 1),
            });
          }}
        >
          <Text>Add New Bowl</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          justifyContent: "center",
          allignItems: "center",
          alignContent: "center",
          flex: 1,
          backgroundColor: "green",
        }}
      >
        <Text style={{ paddingBottom: 10, width: "100%", textAlign: "center" }}>
          Total Price ($9.99 e): {bowls.length * 9.99}
        </Text>
        <Button title={"Order"}></Button>
      </View>
    </View>
  );
};
