import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhotographyCard from "./ItemCard/PhotographyCard";
import Screen from "./Screen";

const PhotographyList = () => {
    return (
        <Screen style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff"
        }}>
            <PhotographyCard
                title="Photography Service 1"
                vendor="Vendor 1"
                price="4000"
                numPhotos="400"
                time="5hr"
                days="45days"
                image="https://5.imimg.com/data5/SELLER/Default/2020/9/AJ/BG/YW/24829239/x4cart-star-string-lights-for-indoor-outdoor-home-party-decoration-500x500.jpg"

            />
            <PhotographyCard
                title="Photography Service 1"
                vendor="Vendor 1"
                price="4000"
                numPhotos="400"
                time="5hr"
                days="45days"
                image="https://5.imimg.com/data5/SELLER/Default/2020/9/AJ/BG/YW/24829239/x4cart-star-string-lights-for-indoor-outdoor-home-party-decoration-500x500.jpg"

            />


        </Screen>
    );
};

export default PhotographyList;