import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton.js";
import { ListItem } from "../components/ListItem.js";
import { getProducts } from "../components/ProductList.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
export function ListingScreen({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <ListItem
        {...product}
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <Screen style={styles.container}>
      {/* <> */}
      <FlatList
        style={styles.listings}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
      />

      {/* <ListItemSeparator />
      <View style={styles.buttonsContainer}>
        <AppButton title="Order" /> */}
      {/* onPress={() => navigation.navigate("Feed")}  */}
      {/* </View> */}
      {/* </> */}
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
    backgroundColor: "#eeeeee",
  },
  listings: {
    backgroundColor: "#fff",
  },
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
