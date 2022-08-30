import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

let Username = "k";

async function login() {
  // let userData = await AsyncStorage.getItem("userData");
  // let data = JSON.parse(userData);
  // console.log(data)
  Username = "ok";

}

function Feed({ props, navigation }) {
  // let userData = await AsyncStorage.getItem("userData");
  // let data = JSON.parse(userData);


  // login();
  console.log(Username)
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >
      <Text style={styles.heading}>[data] </Text>

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
