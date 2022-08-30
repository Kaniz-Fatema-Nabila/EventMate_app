import { ListingScreen } from "./app/screens/ListingScreen.js";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen.js";
import { Cart } from "./app/screens/Cart.js";
import { CartIcon } from "./app/components/CartIcon.js";
import { CartProvider } from "./app/components/CartContext.js";

const Stack = createStackNavigator();
export default function CartNavigator() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Products"
                        component={ListingScreen}
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
            </NavigationContainer>
        </CartProvider>
    );
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
    },
});