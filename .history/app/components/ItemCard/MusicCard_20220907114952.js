import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
//import Swipeable from "react-native-gesture-handler/Swipeable";

export function MusicCard({
  title,
  vendor,
  price,
  max_songs,
  time,
  djs,
  image,
  onPress,
}) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={"#6e6969"} onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          {/* <AppText style={styles.title}>{title}</AppText> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <View>
              <AppText style={styles.vendor}>{vendor}</AppText>
              <AppText style={styles.price}>TK {price}</AppText>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="star"
                  style={{ color: "#FFA500" }}
                  size={20}
                />
                <AppText style={styles.rating}> 4.2</AppText>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="comment-text"
                  style={{ color: "#FFA500" }}
                  size={19}
                />
                <AppText style={styles.rating}> 5</AppText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 3,
              paddingRight: 5,
              paddingTop: 8,
              paddingBottom: 5,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="playlist-music"
                style={{ color: "#FFA500" }}
                size={25}
              />
              <AppText style={styles.text}> {max_songs}</AppText>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="clock"
                style={{ color: "#FFA500" }}
                size={20}
              />
              <AppText style={styles.text}> {time} hrs </AppText>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="account-multiple"
                style={{ color: "#FFA500" }}
                size={21}
              />
              <AppText style={styles.text}> {djs} person </AppText>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
    // </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginRight: 13,
    marginLeft: 13,
    overflow: "hidden",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    padding: 10,
  },
  // thumb: {
  //   height: 60,
  //   borderRadius: 50,
  //   width: "16%",
  // },
  image: {
    width: "100%",
    height: 190,
  },
  price: {
    color: "#ffA500",
    fontSize: 18,
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    padding: 10,
    fontSize: 20,
  },
  vendor: {
    color: "#000",
    marginTop: 0,
    fontSize: 20,
  },
});

export default MusicCard;
