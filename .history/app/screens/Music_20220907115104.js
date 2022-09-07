import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton.js";
import { MusicCard } from "../components/ItemCard/MusicCard.js";
import { getMusics } from "../components/CategoryList/MusicList.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
export default function Music({ navigation }) {
  function renderMusic({ item: music }) {
    return (
      <MusicCard
        {...music}
        onPress={() => {
          navigation.navigate("ListingDetails", {
            musicId: music.id,
          });
        }}
      />
    );
  }

  const [musics, setMusics] = useState([]);

  useEffect(() => {
    setMusics(getMusics());
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
        data={musics}
        renderItem={renderMusic}
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
