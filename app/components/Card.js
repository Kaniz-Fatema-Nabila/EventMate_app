import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "./AppText/AppText";
//import {Image} from "react-native-expo-image-cache";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#FFA500",
    marginBottom: 10,
    marginRight: 13,
    marginLeft: 13,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 190,
  },

  subTitle: {
    fontSize: 18,
    color: "#454545",
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    marginTop: 0,
    fontSize: 20,
  },
});

export default Card;
