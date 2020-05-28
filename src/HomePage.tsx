import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { IMAGENAME } from "./image";

const HomePage: React.FC = () =>{
    const [currentUser, setUser] = useState("")

    return(
        <View>
        <Text>This is Home Page</Text>
        </View>
    );
}


export default HomePage;
