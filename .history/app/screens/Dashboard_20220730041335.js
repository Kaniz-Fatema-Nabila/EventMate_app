import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function Dashboard({props, navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >

      <View style={styles.buttonsContainer}>
      <Text style={styles.heading}>Vendor Registration </Text>
        <AppButton title="Add A Service" onPress={() => navigation.navigate("ServicesEditList")} />
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: "top",
        textAlign: "center",
        color: "#000"
    },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default Dashboard;
