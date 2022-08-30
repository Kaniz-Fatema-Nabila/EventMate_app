import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Feed({ props, navigation }) {
  // let userData = await AsyncStorage.getItem("userData");
  // let data = JSON.parse(userData);
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  async function login() {

    let token = JSON.parse(await AsyncStorage.getItem("token"));
    // let data = JSON.parse(userData);
    setToken(token)
  }

  login();
  console.log(token)
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >
      {/* <Text style={styles.heading}>{name} </Text> */}
      <Text style={styles.heading}>{token} </Text>

      <View style={styles.buttonsContainer}>
        <AppButton title="Create an Event" onPress={() => navigation.navigate("CreateEvent")} />
        <AppButton
          title="Register A Vendor"
          onPress={() => navigation.navigate("VendorRegistration")}
        />
      </View>
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
    fontStyle: 'normal',
    fontSize: 25,
    fontWeight: 'bold',
    textAlignVertical: "top",
    textAlign: "center",
    color: "#000"
  },
});

export default Feed;
