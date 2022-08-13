import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

function ListingDetailsScreen(props) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/stagedecoration.jpg")}
          />

          <View style={styles.detailsContainer}>
            <AppText style={styles.title}> Decoration </AppText>
            <AppText style={styles.subTitle}> TK 45000 </AppText>
            <ListItemSeparator />
            <View style={styles.userContainer}>
              <ListItem
                image={require("../assets/starlights.jpg")}
                title="Kaniz Fatema"
                subTitle="5 Listings"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: "fff000",
    //fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});
export default ListingDetailsScreen;
