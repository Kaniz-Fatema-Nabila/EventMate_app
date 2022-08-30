// <<<<<<< HEAD
// import React from 'react';
// import { FlatList, Text, StyleSheet, Button } from 'react-native';
// import Screen from '../components/Screen';
// import Card from '../components/Card';
// import AppButton from '../components/AppButton';

const listings = [
  {
    id: 1,
    title: 'Decoration',
    price: 45000,
    image: require('../assets/stagedecoration.jpg')

  },
  {
    id: 2,
    title: 'Lights',
    price: 300,
    image: require('../assets/starlights.jpg')

  },
  {
    id: 3,
    title: 'Cake',
    price: 1900,
    image: require('../assets/Celebration-Cake.jpg')

  }
];
// function ListingScreen({ props, navigation }) {
//     return (
//         <Screen>
//             <Text style={styles.container}>   Services </Text>
//             <Text> </Text>
//             <FlatList
//                 data={listings}
//                 keyExtractor={listing => listing.id.toString()}
//                 renderItem={({ item }) =>
//                     <Card
//                         title={item.title}
//                         subTitle={"TK " + item.price}
//                         image={item.image}
//                     />
//                 }
//             />
//             <Button
//                 title="Select"
//                 onPress={() => navigation.navigate("Servicedetails")}
//             />
//             <AppButton
//                 title="Order"
//                 onPress={() => navigation.navigate("Feed")}
//             />
//         </Screen>
// =======
// import React, { useEffect, useState } from "react";
// import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
// import Screen from "../components/Screen.js";
// import AppButton from "../components/AppButton.js";
// import { ListItem } from "../components/ListItem.js";
// import { getProducts } from "../components/ProductList.js";
// import ListItemSeparator from "../components/ListItemSeparator.js";
// export function ListingScreen({ navigation }) {
//   function renderProduct({ item: product }) {
//     return (
//       <ListItem
//         {...product}
//         onPress={() => {
//           navigation.navigate("ListingDetails", {
//             productId: product.id,
//           });
//         }}
//       />
// >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6
//     );
//   }

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setProducts(getProducts());
//   });

//   const [refresh, setRefresh] = useState(false);
//   const pullMe = () => {
//     setRefresh(true);

//     setTimeout(() => {
//       setRefresh(false);
//     }, 2000);
//   };

//   return (
//     <Screen style={styles.container}>
//       <FlatList
//         style={styles.listings}
//         keyExtractor={(item) => item.id.toString()}
//         data={products}
//         renderItem={renderProduct}
//         refreshControl={
//           <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
//         }
//       />

//       {/* <View style={styles.buttonsContainer}>
//           <AppButton
//             title="Order"
//             onPress={() => navigation.navigate("Feed")}
//           /> 
//         </View> */}
//       <ListItemSeparator />
//       <View style={styles.buttonsContainer}>
//         <AppButton title="Order" onPress={() => navigation.navigate("Feed")} />
//       </View>
//     </Screen>
//   );
// }
// const styles = StyleSheet.create({
// <<<<<<< HEAD
//     container: {
//         fontSize: 20,
//         fontWeight: "bold",
//         //textAlign: "center"
//     }
// })
// export default ListingScreen;
// =======
//   buttonsContainer: {
//     padding: 7,
//     width: "100%",
//     //marginVertical: 10,
//   },
//   container: {
//     backgroundColor: "#eeeeee",
//   },
//   listings: {
//     backgroundColor: "#eeeeee",
//   },
//   productsListContainer: {
//     //backgroundColor: "#FFA500",
//     paddingVertical: 8,
//     marginHorizontal: 8,
//   },
// });
// >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6

import React, { useEffect, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
import Screen from "../components/Screen.js";
import AppButton from "../components/AppButton.js";
import ListItem from "../components/ListItem.js";
import { getProducts } from "../components/ProductList.js";
import ListItemSeparator from "../components/ListItemSeparator.js";
export function ListingScreen({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <ListItem
        {...product}
        onPress={() => {
          navigation.navigate("ListingDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  const [refresh, setRefresh] = useState(false);
  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.listings}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
      />

      {/* <View style={styles.buttonsContainer}>
          <AppButton
            title="Order"
            onPress={() => navigation.navigate("Feed")}
          /> 
        </View> */}
      <ListItemSeparator />

    </Screen>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 7,
    width: "100%",
    //marginVertical: 10,
  },
  container: {
    backgroundColor: "#eeeeee",
  },
  listings: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    //backgroundColor: "#FFA500",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ListingScreen;