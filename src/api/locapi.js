import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

import { UserContext } from "../store/UserProvider";

export default LocApi = (props) => {
  const { location, setLocation } = React.useContext(UserContext); // read only

  useEffect(() => {
    console.log("useEffect!");
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log("granted~! " + JSON.stringify(location));
      setLocation(location.coords);
    })();
  }, []);

  return null;
};
