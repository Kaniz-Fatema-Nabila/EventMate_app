import React, { useState } from "react";
import { FlatList, StyleSheet, Image, Text, View } from "react-native";
import Screen from "../components/Screen";
import ListingItem from "../components/ListingItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image:
      "https://www.mezzapica.com.au/wp-content/uploads/2019/06/mezzapica_240519_web_012.jpg",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: "https://cdn-icons-png.flaticon.com/512/163/163828.png",
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListingItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "Can anyone please assist me?",
              image: require("../assets/man-icon.png"),
            },
            {
              id: 1,
              title: "T1",
              description: "Hello. How can I help you?",
              image: require("../assets/woman-icon.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 15,
    marginLeft: 20,
  },
});

export default MessagesScreen;
