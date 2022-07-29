import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import UserRegistrationScreen from "../screens/UserRegistrationScreen";
import Feed from "../screens/Feed";

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
  </Stack.Navigator>
);
export default AuthNavigator;
