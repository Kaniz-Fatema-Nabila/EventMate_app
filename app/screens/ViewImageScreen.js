import React from 'react';
import {Image,View,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="#C0C0C0" size={20}/>
            </View>
            <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="#C0C0C0" size={20}/>
            </View>
                <Image resizeMode="contain" style={styles.image} source={require('../assets/starlights.jpg')}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: "100%",
    },

    container:{
        backgroundColor: "#000",
        flex: 1
    },
    closeIcon:{
        // width: 50,
        // height:50,
        // color:"#ffffff",
        position:'absolute',
        top:40,
        left: 30
    },
    deleteIcon:{
        // width: 50,
        // height:50,
        // backgroundColor:"#ffffff",
        position:'absolute',
        top:40,
        right: 30
    }
})

export default ViewImageScreen;