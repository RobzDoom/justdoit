import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";

const HomePage: React.FC = () =>{
    const [currentUser, setUser] = useState("")

    return(
        <View>
        <Text>This is Home Page</Text>
        </View>
    );
}


export default HomePage;
