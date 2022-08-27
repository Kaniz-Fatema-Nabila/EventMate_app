// import React from 'react';
// import { FlatList, Text, StyleSheet, Button } from 'react-native';
// import Screen from '../components/Screen';
// import Card from '../components/Card';
// import AppButton from '../components/AppButton';

// function FeedScreen({ props, navigation }) {
//     return (
//         <Screen>
//             <Text style={styles.container}> Feed Screen </Text>
//             <Text> </Text>

//         </Screen>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         fontSize: 20,
//         fontWeight: "bold",
//         //textAlign: "center"
//     }
// })
// export default FeedScreen;

import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import Screen from '../components/Screen';
import DecorationList from "../components/DecorationList";
import PhotographyList from "../components/PhotographyList";
import MusicList from "../components/MusicList";

const TabNavigator = createMaterialTopTabNavigator(
    {
        Profile: {
            screen: DecorationList,
            navigationOptions: {
                tabBarLabel: "Decoration",
                showLabel: ({ focused }) => {
                    console.log(focused);
                    return focused ? true : false;
                },
                tabBarIcon: (tabInfo) => (
                    <Ionicons
                        name="ios-person-circle-outline"
                        size={tabInfo.focused ? 25 : 20}
                        color={tabInfo.tintColor}
                    />
                ),
            },
        },
        Images: {
            screen: PhotographyList,
            navigationOptions: {
                tabBarLabel: "Photograp...",
                tabBarIcon: (tabInfo) => (
                    <Ionicons
                        name="ios-images-outline"
                        size={tabInfo.focused ? 24 : 20}
                        color={tabInfo.tintColor}
                    />
                ),
            },
        },
        Video: {
            screen: MusicList,
            navigationOptions: {
                tabBarLabel: "Music",
                tabBarIcon: (tabInfo) => (
                    <Ionicons
                        name="ios-videocam-outline"
                        size={tabInfo.focused ? 25 : 20}
                        color={tabInfo.tintColor}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            showIcon: true,

            style: {
                backgroundColor: "#0D5BE1",
                marginTop: 28,
            },
        },
    }
);

const Navigator = createAppContainer(TabNavigator);

export default function FeedScreen() {

    const drawer = useRef(null);

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );
    return (
        <Screen>
            <Navigator>
                <DrawerLayoutAndroid
                    ref={drawer}
                    drawerWidth={300}
                    drawerPosition={"left"}
                    renderNavigationView={navigationView}
                >
                    <View style={styles.container}>
                        <Button
                            title="Filter"
                            onPress={() => drawer.current.openDrawer()}
                        />
                    </View>
                </DrawerLayoutAndroid>
                <DecorationList />
            </Navigator>
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: 16,
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});
