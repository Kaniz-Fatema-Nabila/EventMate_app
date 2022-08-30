import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import { CartContext } from "../components/CartContext";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";



export function Cart({ navigation }) {
  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>TK {total}</Text>
      </View>
    );
  }
  function renderItem({ item }) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.title} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>TK {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
      <AppButton
        title="Register A Vendor"
        onPress={() => navigation.navigate("VendorRegistration")}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  cartLine: {
    flexDirection: "row",
  },
  cartLineTotal: {
    flexDirection: "row",
    //borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  container: {
    color: "#dddddd",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#000",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#000",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#dddddd",
  },
  itemsListContainer: {
    backgroundColor: "#dddddd",
    marginHorizontal: 8,
  },
});
