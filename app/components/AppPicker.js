import React from "react";
import { useState } from "react";
import { View, StyleSheet, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Screen from "./Screen";
import { TouchableWithoutFeedback } from "react-native";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} style={styles.icon} />}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={"#736F6E"}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => console.log(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D1D0CE",
    borderRadius: 30,
    flexDirection: "row",
    width: "100%",
    padding: 13,
    marginVertical: 7,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    color: "#736F6E",
  },
});

export default AppPicker;
