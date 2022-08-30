import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import UserRegistrationScreen from "../screens/UserRegistrationScreen";
import UserFeed from "../screens/UserFeed";
import CreateEventScreen from "../screens/CreateEventScreen";
import VendorRegistrationScreen from "../screens/VendorRegistrationScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingScreen from "../screens/ListingScreen";
import { ListingDetailsScreen } from "../screens/ListingDetailsScreen.js";
import { Cart } from "../screens/Cart.js";
import { CartProvider } from "../components/CartContext.js";
import { CartIcon } from "../components/CartIcon.js";


const Stack = createStackNavigator();

const AuthNavigator = () => (
  <CartProvider>
    {/* <NavigationContainer> */}
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
      {/* <Stack.Screen name="Listings" component={ListingScreen} /> */}
      <Stack.Screen
        name="VendorRegistration"
        component={VendorRegistrationScreen}
      />

      <Stack.Screen
        name="Products"
        component={ListingScreen}
        options={({ navigation }) => ({
          title: "Products",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      {/* <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={({ navigation }) => ({
          title: "Product details",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      /> */}
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "My cart",
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
    {/* </NavigationContainer> */}
  </CartProvider>

);

export default AuthNavigator;

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
