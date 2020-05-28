import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import WelcomePage from "./src/Welcome";
import HomePage from "./src/HomePage";
import { IMAGENAME } from "./src/image";
import Loading from "./src/Loading";
import SignUp from "./src/SignUp";
import { styles } from "./src/cssFolder/styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  );
}

// <View style={styles.container}>
//  <WelcomePage personName="Tay" catName="Kled"/>
// </View>
