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
import { Colors } from "react-native/Libraries/NewAppScreen";
//import Swipeable from "react-native-gesture-handler/Swipeable";

export function DecorationCard({ title, vendor, price, image, onPress }) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={"#6e6969"} onPress={onPress}>
      <View style={styles.container}>
        <AppText style={styles.title}>{title}</AppText>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <AppText style={styles.vendor}>{vendor}</AppText>
              <AppText style={styles.vendor}>{description}</AppText>
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
                  size={20}
                />
                <AppText style={styles.rating}> 5</AppText>
              </View>
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
    fontSize: 20,
    padding: 10,
  },
  vendor: {
    color: "#000",
    marginTop: 0,
    fontSize: 20,
  },
});

export default DecorationCard;
