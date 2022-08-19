import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { NewsFeed } from "../components/NewsFeed";
import { getFeedFields } from "../components/NewsFeedField.js";
export function NewsFeedScreen(props) {
  function renderNewsFeed({ item: feedfield }) {
    return <NewsFeed {...feedfield} />;
  }

  const [feedfields, setFeedFields] = useState([]);
  useEffect(() => {
    setFeedFields(getFeedFields());
  });

  return (
    <FlatList
      style={styles.newsFeedList}
      contentContainerStyle={styles.newsFeedListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={feedfields}
      renderItem={renderNewsFeed}
    />
  );
}
const styles = StyleSheet.create({
  newsFeedList: {
    backgroundColor: "#eeeeee",
  },
  newsFeedListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
