import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { ListingScreen } from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
