import React, { useState } from "react";
import { Header, Text } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { View} from "react-native";

const MainPageOptions: React.FC = () => {
  return (
    <View style={styles.homeOptions}>
      <View style={{ backgroundColor: "#36413e", margin: 30 }}> 
      <Text style={{fontSize:20, padding:10, color:"white"}}>BackPack Calculator</Text> 
        <Text style={{ padding: 10, color: "white" }}>
          Need Help with backpack sizing? Click here Backpack sizing calculator
          will help you determing the Size, weight capacity, and quality of
          material.
        </Text>
      </View>
      <View style={{backgroundColor: "#17301C", margin: 30 }}>
      <Text style={{fontSize:20, padding:10, color:"white"}}>Check List</Text> 
        <Text style={{ padding: 10, color: "white" }}>   
          Make sure you are ready for your adveture! Checklist will help you
          organize items needed for trip
        </Text>
      </View>
    </View>
  );
};

export default MainPageOptions;
