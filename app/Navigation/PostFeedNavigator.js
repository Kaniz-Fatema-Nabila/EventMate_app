import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NewsFeedScreen } from "../screens/NewsFeedScreen";
import AccountNavigator from "./AccountNavigator";
import { SavedPostScreen } from "../screens/SavedPostScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import EventList from "../screens/EventList";

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
      component={EventList}
      options={{
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
      name="Create Event"
      component={CreateEventScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Saved"
      component={SavedPostScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="content-save-edit-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
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
