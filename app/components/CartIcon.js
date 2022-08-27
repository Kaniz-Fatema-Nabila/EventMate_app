import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "./CartContext";
export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "#FFA500",
    height: 40,
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
});
