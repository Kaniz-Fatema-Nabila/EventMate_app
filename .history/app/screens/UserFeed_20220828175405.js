import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
// <<<<<<< HEAD:app/screens/Feed.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// function Feed({ props, navigation }) {
//   // let userData = await AsyncStorage.getItem("userData");
//   // let data = JSON.parse(userData);
//   const [name, setName] = useState("");
//   const [token, setToken] = useState("");

//   async function login() {

//     let token = JSON.parse(await AsyncStorage.getItem("token"));
//     // let data = JSON.parse(userData);
//     setToken(token)
//   }

//   login();
//   console.log(token)
// =======
// import AppNavigator from "../Navigation/AppNavigator";

function UserFeed({ props, navigation }) {
  const [token, setToken] = useState("");

  async function login() {

    let token = JSON.parse(await AsyncStorage.getItem("token"));
    // let data = JSON.parse(userData);
    setToken(token)
  }
  login();
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >
      {/* <<<<<<< HEAD:app/screens/Feed.js */}
      {/* <Text style={styles.heading}>{name} </Text> */}
      {/* <Text style={styles.heading}>{token} </Text> */}
      {/* ======= */}
      <Text style={styles.heading}>{token} </Text>
      {/* >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6:app/screens/UserFeed.js */}

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Create an Event"
          onPress={() => navigation.navigate("CreateEvent")}
        />
        <AppButton
          title="Register A Vendor"
          onPress={() => navigation.navigate("VendorRegistration")}
        />
      </View>
      {/* <AppNavigator /> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  heading: {
    fontStyle: "normal",
    fontSize: 25,
    fontWeight: "bold",
    textAlignVertical: "top",
    textAlign: "center",
    // <<<<<<< HEAD:app/screens/Feed.js
    //     color: "#000"
    // =======
    color: "#000",
    // >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6:app/screens/UserFeed.js
  },
});

export default UserFeed;
