import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from "../screens/LoginScreen";
import UserRegistrationScreen from "../screens/UserRegistrationScreen";
import UserFeed from "../screens/UserFeed";
import CreateEventScreen from "../screens/CreateEventScreen";
import VendorRegistrationScreen from "../screens/VendorRegistrationScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
    <Stack.Screen name="UserFeed" component={UserFeed} />
    <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen
      name="VendorRegistration"
      component={VendorRegistrationScreen}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
