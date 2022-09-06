import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ListingItem from "../components/ListingItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "Momtahina's Birthday",
    icon: {
      name: "cake-variant-outline",
      backgroundColor: "#FFA500",
    },
  },
  {
    title: "Farida's Wedding",
    icon: {
      name: "ring",
      backgroundColor: "#FFA500",
    },
  },
  {
    title: "Mahir's Party",
    icon: {
      name: "party-popper",
      backgroundColor: "#FFA500",
    },
  },
];

function EventList(navigation) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          onPress={() => {
            navigation.navigate("FilterScreen");
          }}
          renderItem={({ item }) => (
            <ListingItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}

        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#ffffff",
  },
  container: {
    marginVertical: 20,
  },
});

export default EventList;
