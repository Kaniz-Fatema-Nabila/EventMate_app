import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/Navigation/NavigationTheme";
import { createStackNavigator } from "@react-navigation/stack";
import PostFeedNavigator from "./app/Navigation/PostFeedNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import Screen from "./app/components/Screen";
import AppNavigator from "./app/Navigation/AppNavigator";
// import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import AccountNavigator from "./app/Navigation/AccountNavigator";
import FilterScreen from "./app/screens/FilterScreen";
import Drawer from "./app/components/Drawer";

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

// const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <PostFeedNavigator />
    </NavigationContainer>
  );
}
