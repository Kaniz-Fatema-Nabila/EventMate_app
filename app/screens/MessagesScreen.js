import React, { useState } from "react";
import { FlatList, StyleSheet, ScrollView, Text, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/woman-icon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/man-icon.png"),
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
      <View style={styles.textContainer}>
        <Text style={styles.text}>Messages</Text>
        <Text></Text>
      </View>
      <ScrollView>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
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
      </ScrollView>
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
