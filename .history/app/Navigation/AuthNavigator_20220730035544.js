import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import UserRegistrationScreen from "../screens/UserRegistrationScreen";
import Feed from "../screens/Feed";
import CreateEventScreen from "../screens/CreateEventScreen";
import VendorRegistrationScreen from "../screens/VendorRegistrationScreen";

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={UserRegistrationScreen} />
    <Stack.Screen name="Feed" component={Feed} />
    <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
    <Stack.Screen name="VendorRegistration" component={VendorRegistrationScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
