import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, DrawerLayoutAndroid, StyleSheet } from "react-native";


const DecorationList = () => {
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
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#006600", fontSize: 40 }}>Profile Screen!</Text>
                    <Ionicons name="ios-person-circle-outline" size={80} color="#006600" />
                </View>
            </View>
        </DrawerLayoutAndroid>

    );
};

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


export default DecorationList;