import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton.js";
import { PhotographyCard } from "../components/ItemCard/PhotographyCard.js";
import { getPhotos } from "../components/CategoryList/PhotographyList.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
export function Photography({ navigation }) {
  function renderPhoto({ item: photo }) {
    return (
      <PhotographyCard
        {...photo}
        onPress={() => {
          navigation.navigate("ListingDetails", {
            photoId: photo.id,
          });
        }}
      />
    );
  }

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(getPhotos());
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
      <FlatList
        style={styles.listings}
        keyExtractor={(item) => item.id.toString()}
        data={photos}
        renderItem={renderPhoto}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
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
    backgroundColor: "#C0C0C0",
  },
  listings: {
    backgroundColor: "#C0C0C0",
  },
  productsListContainer: {
    backgroundColor: "#FFA500",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
