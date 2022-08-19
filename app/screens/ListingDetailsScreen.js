import React from "react";
import { useEffect, useState, useContext } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { getProduct } from "../components/ProductList";
import { CartContext } from "../components/CartContext";

export function ListingDetailsScreen({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
        </View>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{product.title}</AppText>
          <AppText style={styles.vendor}>{product.vendor}</AppText>
          <AppText style={styles.price}>TK {product.price}</AppText>
          <AppText style={styles.description}>{product.description}</AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton onPress={onAddToCart} title="Add to cart" />
        </View>

        <ListItemSeparator />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 7,
    width: "100%",
  },
  container: {
    backgroundColor: "#fff",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  imageContainer: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    //fontWeight: "bold",
    color: "#000",
  },
  price: {
    color: "#FFA500",
    //fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    color: "#3A3B3C",
  },
  vendor: {
    fontSize: 24,
    //fontWeight: "bold",
    color: "#000",
  },
  // userContainer: {
  //   marginVertical: 20,
  // },
});
export default ListingDetailsScreen;
