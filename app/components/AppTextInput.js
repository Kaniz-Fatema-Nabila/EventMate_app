import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={"#736F6E"}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D1D0CE",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: "#000",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
