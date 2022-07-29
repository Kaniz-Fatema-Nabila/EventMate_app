import React from 'react';
import { FlatList,Text,StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';

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
function ListingScreen(props) {
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