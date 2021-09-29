import React from 'react'
import { View, Text } from 'react-native'
import geohash from "ngeohash"
import firebase from "firebase/app";
import {collection, query, where, getDocs} from "firebase/firestore";
import * as Location from "expo-location";

import {app} from '../api/api'
// returns a list of nearby restaurants
// TODO: enforce order by distance
// each restaurant object:
//    name
//    location (geohashed)
//    description
//    address
//    id 
// Calculate the upper and lower boundary geohashes for
// a given latitude, longitude, and distance in miles
export const getGeohashRange = (
    latitude,
    longitude,
    distance, // miles
  ) => {
    const lat = 0.0144927536231884; // degrees latitude per mile
    const lon = 0.0181818181818182; // degrees longitude per mile
   
    const lowerLat = latitude - lat * distance;
    const lowerLon = longitude - lon * distance;
   
    const upperLat = latitude + lat * distance;
    const upperLon = longitude + lon * distance;
   
    const lower = geohash.encode(lowerLat, lowerLon);
    const upper = geohash.encode(upperLat, upperLon);
   
    return {
      lower,
      upper
    };
  };
export const GetNearbyRestaurants = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        console.log("Invalid Location Permissions!");
        return;
    }
    const { latitude, longitude } = await Location.getCurrentPositionAsync({});
     
      const radiusMi = 10;
     
      var arr = [];
      async function getCollectionData(docRef){
        const snapshot = await docRef.get()
        return snapshot.docs.map(doc => console.log(doc.data()));
      }
      const db = app.firestore();
      getCollectionData(db.collection("restaurants"))
     
     
    //   const range = getGeohashRange(latitude, longitude, radiusMi);
    //   const q = query(firebase.app().firestore().collection(firebase.app().firestore(), "restaurants")   );
    //   const snap = await getDocs(q);
    //   snap.ForEach(d => {
    //       console.log("id " + d.id + ", = " + d.data())
    //   });
    //   firebase.app().firestore().getDocs(firebase.app().firestore().collection("restaurants")
    //     .where("location", ">=", range.lower)
    //     .where("location", "<=", range.upper)).forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //       var d = doc.data();
    //       d.id = doc.id;
    //       arr.push(d);
    //   });
    // return arr;
    }

const RestaurantScreen = (props) => {
    React.useEffect(()=>{
        GetNearbyRestaurants();
    },[])
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default RestaurantScreen
