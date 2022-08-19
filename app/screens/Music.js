import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton.js";
import { ListItem } from "../components/ListItem.js";
import { getProducts } from "../components/ProductList.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
export function Music({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <ListItem
        {...product}
        onPress={() => {
          navigation.navigate("ListingDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.listings}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
      <ListItemSeparator />
      {/* <View style={styles.buttonsContainer}>
        <AppButton title="Order" onPress={() => navigation.navigate("Feed")} />
      </View> */}
    </Screen>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 7,
    width: "100%",
    //marginVertical: 10,
  },
  container: {
    backgroundColor: "#fff",
  },
  listings: {
    backgroundColor: "#fff",
  },
  productsListContainer: {
    backgroundColor: "#FFA500",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
