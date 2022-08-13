import React from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import AppButton from "../components/AppButton";

const listings = [
  {
    id: 1,
    title: "Decoration",
    price: 45000,
    image: require("../assets/stagedecoration.jpg"),
  },
  {
    id: 2,
    title: "Lights",
    price: 300,
    image: require("../assets/starlights.jpg"),
  },
  {
    id: 3,
    title: "Cake",
    price: 1900,
    image: require("../assets/Celebration-Cake.jpg"),
  },
];
function ListingScreen({ props, navigation }) {
  return (
    <Screen style={styles.container}>
      {/* <View style={styles.textContainer}>
        <Text style={styles.text}>Listings</Text>
        <Text></Text>
      </View> */}
      <ScrollView>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"TK " + item.price}
              image={item.image}
              onPress={() => navigation.navigate("Listing Details", item)}
            />
          )}
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <AppButton title="Order" onPress={() => navigation.navigate("Feed")} />
      </View>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 15,
    marginLeft: 20,
  },
});
export default ListingScreen;
