import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import Screen from "./app/components/Screen";
// import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import FilterScreen from "./app/screens/FilterScreen";
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

// export default function App() {
//   return (
// <AccountScreen />
// <ListingDetailsScreen/>
// <NavigationContainer>
//   <AuthNavigator />
// </NavigationContainer>
// <FilterScreen />
// <LoginScreen />
// <Drawer />
// );

import { ListingScreen } from "./app/screens/ListingScreen.js";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen.js";
import { Cart } from "./app/screens/Cart.js";
import { CartIcon } from "./app/components/CartIcon.js";
import { CartProvider } from "./app/components/CartContext.js";
import ListItem from "./app/components/ListItem";
import { Decoration } from "./app/screens/Decoration.js";
import { NewsFeedScreen } from "./app/screens/NewsFeedScreen.js";
import { Photography } from "./app/screens/Photography.js";
import { Music } from "./app/screens/Music.js";
import CartNavigator from "./app/Navigation/CartNavigator";

//   export default function App() {
//     return <NewsFeedScreen />;

// }

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <CartNavigator />

    </NavigationContainer>
  );
}

