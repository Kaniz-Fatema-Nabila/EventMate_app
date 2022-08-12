import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import AppText from "./AppText";
import ListItem from "./ListItem";

function ListingDetailsScreen(props) {
    return(
        <View>
            <Image style={styles.image} source={require('../assets/')}/>
            
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> </AppText>
                <AppText style={styles.subTitle}> </AppText>
                <View style={styles.userContainer}>
                    <ListItem
                    image={require("../assets/")}
                    title=" "
                    subTitle=" "
                />
                </View>
                
            </View>
          
        </View>
    );
}

const styles=StyleSheet.create({
    detailsContainer: {
        padding:20,
    },
    image:{
        width:'100%',
        height:300
    },
    title: {
        fontSize:24,
        fontWeight: 500
    },
    subTitle:{
        color: 'fff000',
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer:{
        marginVertical: 40,
    }

})
export default ListingDetailsScreen;