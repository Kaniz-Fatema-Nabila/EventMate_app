import React from 'react';
import { FlatList,Text,StyleSheet, Button } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

const listings=[
    {
    id:1,
    title: 'Decoration',
    price: 45000,
    image: require('../assets/stagedecoration.jpg')

},
{
    id:2,
    title: 'Lights',
    price: 300,
    image: require('../assets/starlights.jpg')

},
{
    id:3,
    title: 'Cake',
    price: 1900,
    image: require('../assets/Celebration-Cake.jpg')

}
];
function ListingScreen({props, navigation}) {
    return (
        <Screen>
            <Text style= {styles.container}>   Services </Text>
            <Text> </Text>
            <FlatList
            data={listings}
            keyExtractor={listing=> listing.id.toString()}
            renderItem={({item}) =>
            <Card 
            title={item.title}
            subTitle={"TK "+item.price}
            image={item.image}
            />
            }
            />
            <Button
          title="Select"
          onPress={() => navigation.navigate("Servicedetails")}
        />
            <AppButton
          title="Order"
          onPress={() => navigation.navigate("Feed")}
        />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        fontSize:20,
        fontWeight: "bold",
        //textAlign: "center"
    }
})
export default ListingScreen;