import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { View } from "react-native";

const MainPageOptions: React.FC = () =>{
    return (
        <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ height: 100, backgroundColor: 'steelblue' }} />
        </View>
    )
}

export default MainPageOptions 