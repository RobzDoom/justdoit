import React, { useState } from "react";
import { Header, Text, Icon } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { View } from "react-native";

const MainPageOptions: React.FC = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#36413e", flexShrink: 1, margin: 30 }}>
        <Text style={{ fontSize: 20, color: "white", padding: 10 }}>
          BackPack Calculator
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={{ padding: 10, color: "white", flexShrink: 1 }}>
            Need Help with backpack sizing? Backpack sizing calculator will help
            you determing the Size, weight capacity, and quality of material.
          </Text>
          <Icon
            name="arrow-right"
            type="font-awesome"
            color="white"
            style={{ padding: 10 }}
          />
        </View>
      </View>
      {/* <View style={{ backgroundColor: "#36413e", margin: 30 }}>
        <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
          BackPack Calculator
        </Text>
        <View style={{flexDirection:"row"}}>
          <Text style={{ padding: 10, color: "white" }}>
          Need Help with backpack sizing? Backpack sizing calculator
          will help you determing the Size, weight capacity, and quality of
          material.
          </Text>
          <Text
            style={{paddingRight: 20, paddingBottom: 10 }}
          ></Text>
          <Icon name="arrow-right" type="font-awesome" color="white" />
        </View>
      </View> */}
      <View style={{ backgroundColor: "#17301C", flexShrink: 1, margin: 30 }}>
        <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
          Check List
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ padding: 10, color: "white", flexShrink: 1 }}>
            Make sure you are ready for your adveture! Checklist will help you
            organize items needed for trip
          </Text>
          <Icon
            name="arrow-right"
            type="font-awesome"
            color="white"
            style={{ padding: 10 }}
          />
        </View>
      </View>
      {/* /////////////////////////////////////TEST//////////////////////////////////////////////////// */}
    </View>
  );
};

export default MainPageOptions;
