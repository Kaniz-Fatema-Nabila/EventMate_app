import React, { useEffect, useState } from "react";
import { View, Text, FlatList, RefreshControl, StyleSheet } from "react-native";
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

  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <FlatList
      style={styles.newsFeedList}
      contentContainerStyle={styles.newsFeedListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={feedfields}
      renderItem={renderNewsFeed}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
      }
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
