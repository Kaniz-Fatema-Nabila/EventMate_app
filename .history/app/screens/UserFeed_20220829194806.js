import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

// import AppNavigator from "../Navigation/AppNavigator";

function UserFeed({ props, navigation }) {
  const [token, setToken] = useState("");

  async function getInfo() {

    let token = JSON.parse(await AsyncStorage.getItem("token"));
    // let data = JSON.parse(userData);
    setToken(token)

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      'http://192.168.0.102:8000/api/user',
      config
    ).then(console.log).catch(console.log);


  }
  // getInfo();
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
