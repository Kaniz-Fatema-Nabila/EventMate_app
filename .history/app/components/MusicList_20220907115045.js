import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MusicCard from "./ItemCard/MusicCard";
import Music from "../screens/Music";

const MusicList = () => {
    return (
        // <View style={{
        //     flex: 1,
        //     alignItems: "center",
        //     justifyContent: "center",
        //     backgroundColor: "#fff"

        // }}>
        //     <MusicCard
        //         title="Music 101"
        //         vendor="Music Vendor 1"
        //         price="3k"
        //         max_songs="300"
        //         time="5hr"
        //         djs="2"
        //         image="https://5.imimg.com/data5/SELLER/Default/2020/9/AJ/BG/YW/24829239/x4cart-star-string-lights-for-indoor-outdoor-home-party-decoration-500x500.jpg"
        //     />

        // </View>
        <Music />
    );
};

export default MusicList;
