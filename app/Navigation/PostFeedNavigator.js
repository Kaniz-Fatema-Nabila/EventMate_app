import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppNavigator from "./AppNavigator";
import CartNavigator from "./CartNavigator";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import AccountNavigator from "./AccountNavigator";
import CreateEventScreen from "../screens/CreateEventScreen";
import { createNavigator } from "react-navigation";
import { ListingScreen } from "../screens/ListingScreen";

const Tab = createBottomTabNavigator();

const PostFeedNavigator = () => (
  <Tab.Navigator mode="modal">
    <Tab.Screen
      name="Home"
      component={NewsFeedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="List of Events"
      component={ListingScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="wallet-giftcard"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Create an Event"
      component={CreateEventScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Event Saved"
      component={AppNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="content-save-edit-outline"
            color={color}
            size={size}
          />
        ),
      }}
    /> */}
    <Tab.Screen
      name="Profile"
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default PostFeedNavigator;
