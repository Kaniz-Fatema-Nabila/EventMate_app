import React from 'react';
import { FlatList, Text, StyleSheet, Button } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

function FeedScreen({ props, navigation }) {
    return (
        <Screen>
            <Text style={styles.container}> Feed Screen </Text>
            <Text> </Text>

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: "bold",
        //textAlign: "center"
    }
})
export default FeedScreen;