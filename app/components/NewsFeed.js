import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import Screen from "./Screen";
import Icon from "react-native-vector-icons/Ionicons";

export function NewsFeed({ proImage, name, time, title, image, caption }) {
  return (
    <Screen style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.thumb} source={{ uri: proImage }} />
        <View style={{ flexDirection: "column", marginLeft: 0 }}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.time}>Uploaded at {time}</AppText>
        </View>
      </View>
      <View>
        <AppText style={{ padding: 16 }}> {title}</AppText>
        <Image style={styles.image} source={{ uri: image }} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            //marginTop: 5,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Icon name="heart-outline" size={28} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="chatbubble-outline"
                style={{ marginLeft: 12 }}
                size={26}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="bookmark-outline" size={28} />
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", marginBottom: 15, marginLeft: 15 }}
        >
          {/* <AppText style={{ fontSize: 17, fontWeight: "bold" }}>{name}</AppText> */}
          <AppText>{caption}</AppText>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    elevation: 2,
    marginVertical: 10,
  },
  thumb: {
    height: 60,
    borderRadius: 50,
    width: "16%",
  },
  image: {
    width: "100%",
    height: 190,
  },
  name: {
    marginTop: 15,
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  time: {
    marginTop: 8,
    marginLeft: 5,
    fontSize: 13,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
