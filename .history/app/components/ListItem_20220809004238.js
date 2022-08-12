// import React from 'react';
// import {View,StyleSheet, Image} from 'react-native';
// import { TouchableHighlight } from 'react-native';
// import AppText from './AppText';
// import  Swipeable from 'react-native-gesture-handler/Swipeable';

// function ListItem({title, subTitle,image,ImageComponent,onPress, renderRightActions}) {
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//         <TouchableHighlight underlayColor={"#6e6969"} onPress={onPress}>
//             <View style={styles.detailsContainer}>
//                 {ImageComponent}
//                 {image &&<Image style={styles.image} source={image}/>}
//                 <View style={styles.container}>
//                     <AppText style={styles.title}>{title}</AppText>
//                     {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
//                 </View>
//             </View>
//         </TouchableHighlight>
//         </Swipeable> 
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection:'row',
//         padding: 15,
//     },
//     detailsContainer:{
//         marginRight:10,
//         justifyContent: 'center'
//     },
//     image:{
//         width: 70,
//         height: 70,
//         borderRadius: 35,
        
//     },
//     subTitle:{
//         color: "#6e6969",
//     },
//     title:{
//         fontWeight: 500,

//     }
    
// })
// export default ListItem;


import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

// import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={"#6e6969"} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: "#6e6969",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
