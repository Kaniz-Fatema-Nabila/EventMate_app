import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ListingScreen } from "./app/screens/ListingScreen.js";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen.js";
import { Cart } from "./app/screens/Cart.js";
import { CartIcon } from "./app/components/CartIcon.js";
import { CartProvider } from "./app/components/CartContext.js";
import ListItem from "./app/components/ListItem";
import { Decoration } from "./app/screens/Decoration.js";
import { NewsFeedScreen } from "./app/screens/NewsFeedScreen.js";
import { Photography } from "./app/screens/Photography.js";
import { AccountScreen } from "./app/screens/AccountScreen.js";
import { Music } from "./app/screens/Music.js";
import AccountNavigator from "./app/Navigation/AccountNavigator";
import AuthNavigator from "./app/Navigation/AuthNavigator.js";
import FeedNavigator from "./app/Navigation/FeedNavigator.js";
import AppNavigator from "./app/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Products"
//             component={ListingScreen}
//             options={({ navigation }) => ({
//               title: "Products",
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <CartIcon navigation={navigation} />,
//             })}
//           />
//           <Stack.Screen
//             name="ListingDetails"
//             component={ListingDetailsScreen}
//             options={({ navigation }) => ({
//               title: "Product details",
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <CartIcon navigation={navigation} />,
//             })}
//           />
//           <Stack.Screen
//             name="Cart"
//             component={Cart}
//             options={({ navigation }) => ({
//               title: "My cart",
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <CartIcon navigation={navigation} />,
//             })}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// }
// const styles = StyleSheet.create({
//   headerTitle: {
//     fontSize: 20,
//   },
// });
