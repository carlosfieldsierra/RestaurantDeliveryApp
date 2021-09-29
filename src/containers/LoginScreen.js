import React, { Component } from "react";
import { Button, View, Text,TouchableOpacity ,TextInput,Dimensions} from "react-native";

import firebase from "firebase/app";
require("firebase/auth");
import "firebase/firestore";

import {app} from '../api/api'

// data layer
import { UserContext } from "../../src/store/UserProvider";

// api'
import { Login } from "../../src/api/api";
// Width and height of screen
const {width,height} = Dimensions.get("screen")


export default LoginScreen = (props) => {
  // const { loggedIn, setLoggedIn } = React.useContext(UserContext); // read only
  const [loggedIn,setLoggedIn] = React.useState(false)
  

  /**
   * Right now only takes you to the Home screen
   */
  const loginHandler = ()=>{
    // Add wether to login logic here
     firebase.auth().onAuthStateChanged((user) => {
       setLoggedIn(user);
     });

     
     
    // if (true){
    //   props.navigation.replace("Restaurant Screen")
    // }


  }
  React.useEffect(() => {
   loginHandler();
  }, [])


  React.useEffect(()=>{
    if (loggedIn){
       props.navigation.replace("Restaurant Screen")
    }

  },[loggedIn])


  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      {/* Header */}
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:50}}>Rude Ramen</Text>
      </View>
      {/* Login View */}
      <View style={{flex:4}}>
        {/* Inputs */}
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
          
          <TextInput placeholderTextColor="white" style={{margin:10,width:width/2,height:height/20,backgroundColor:"gray",textAlign:"center",borderRadius:width/2+height/2,fontSize:20,color:"white"}} placeholder="Username"></TextInput>
          <TextInput secureTextEntry={true} placeholderTextColor="white" style={{margin:10,width:width/2,height:height/20,backgroundColor:"gray",textAlign:"center",borderRadius:width/2+height/2,fontSize:20,color:"white"}} placeholder="Password"></TextInput>

        </View>
        <View style={{flex:1,alignItems:"center",justifyContent:"flex-start"}}>

            {/* <Button
              title="Login"
              onPress={loginHandler}
            /> */}
            <TouchableOpacity  onPress={()=>{
              app
              .auth()
              .signInAnonymously()
              .then(() => {
               props.navigation.replace("Restaurant Screen")
             })
              .catch((error) => {
                console.error(error);
              });
            }}>
              <View style={{width:width/2,height:height/10,backgroundColor:"blue",borderRadius:width/2+height/2,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:50,color:"white",fontWeight:"bold"}}>LOGIN</Text>
              </View>
            </TouchableOpacity>
        </View>
      

      </View>
    </View>
  );
};
