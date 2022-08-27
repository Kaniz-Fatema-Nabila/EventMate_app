import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#000",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "#FFA500",
    },
    targetScreen: "Messages",
  },
];

function AccountScreen(navigation) {
  return (
    <Screen style={styles.screen}>
      {/* <Text>Hello</Text> */}
      <View style={styles.container}>
        <ListItem
          title="Kaniz Fatema"
          subTitle="kaniz.fatema@gmail.com"
          image={require("../assets/starlights.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
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

export default AccountScreen;
