import { ListingDetailsScreen } from "../screens/ListingDetailsScreen.js";
import { Cart } from "../screens/Cart.js";
import { CartIcon } from "../components/CartIcon.js";
import { CartProvider } from "../components/CartContext.js";
import ListingEditScreen from "../screens/ListingEditScreen.js";

const Stack = createStackNavigator();
export default function CartNavigator() {
    return (
        <CartProvider>
            {/* <NavigationContainer> */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Products"
                    component={ListingEditScreen}
                    options={({ navigation }) => ({
                        title: "Products",
                        headerTitleStyle: styles.headerTitle,
                        headerRight: () => <CartIcon navigation={navigation} />,
                    })}
                />
                <Stack.Screen
                    name="ListingDetails"
                    component={ListingDetailsScreen}
                    options={({ navigation }) => ({
                        title: "Product details",
                        headerTitleStyle: styles.headerTitle,
                        headerRight: () => <CartIcon navigation={navigation} />,
                    })}
                />
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
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
    },
});