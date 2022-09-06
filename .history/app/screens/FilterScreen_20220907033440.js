import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import DecorationList from "../components/DecorationList";
import PhotographyList from "../components/PhotographyList";
import MusicList from "../components/MusicList";
import { Button } from "react-native-paper";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: DecorationList,
      navigationOptions: {
        tabBarLabel: "Decoration",
        showLabel: ({ focused }) => {
          console.log(focused);
          return focused ? true : false;
        },
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-person-circle-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Images: {
      screen: PhotographyList,
      navigationOptions: {
        tabBarLabel: "Photograp...",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-images-outline"
            size={tabInfo.focused ? 24 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Video: {
      screen: MusicList,
      navigationOptions: {
        tabBarLabel: "Music",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="ios-videocam-outline"
            size={tabInfo.focused ? 25 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,

      style: {
        backgroundColor: "#0D5BE1",
        // marginTop: 28,
      },
    },
  }
);

const Navigator = createAppContainer(TabNavigator);

export default function FilterScreen({ navigation }) {
  return (
    <>
      <Button
        title="Filter"
        // onPress={() => drawer.current.openDrawer()}
        onPress={() => navigation.navigate("Login")}

      // color="#fff"
      />
      <Navigator >
        <DecorationList />
      </Navigator>
    </>

  );
}
