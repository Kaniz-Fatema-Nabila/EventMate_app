import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import VendorRegistrationScreen from "./app/screens/VendorRegistrationScreen";
import UserRegistrationScreen from "./app/screens/UserRegistrationScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import CreateEventScreen from "./app/screens/CreateEventScreen";
import AccountScreen from "./app/screens/AccountScreen";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import FeedScreen from "./app/screens/FeedScreen";
import Drawer from "./app/components/Drawer";
// export default function App() {
//   //return <WelcomeScreen />;
//   //return <LoginScreen />;
//   //return <VendorRegistrationScreen/>;
//   //return <UserRegistrationScreen/>;
//   //return <ListingScreen/>;
//   //return <ViewImageScreen/>;
//   //return <CreateEventScreen />;
//   //return <ListingEditScreen />;
//   //return <AccountScreen />;
// }
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button title="Click" onPress={() => navigation.navigate(PostDetails)} />
//   );
// };

// const Post = ({ navigation }) => (
//   <Screen>
//     <Text> Post </Text>
//     <Link />
//   </Screen>
// );

// const PostDetails = () => (
//   <Screen>
//     <Text> post deatail </Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Feed" component={Post} />
//     <Stack.Screen name="Account" component={Account} />
//   </Stack.Navigator>
// );

// const Account = () => (
//   <Screen>
//     <Text> Account </Text>
//   </Screen>
// );

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "#FFA500",
//       activeTintColor: "#fff",
//       inactiveBackgroundColor: "##B6B6B4",
//       inactiveTintColor: "#000",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={FeedNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen name="Account" component={AccountNavigator} />
//   </Tab.Navigator>
// );

export default function App() {
  return (
    // <AccountScreen />
    // <ListingDetailsScreen/>
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
    // <FeedScreen />
    <Drawer />
  );
}
