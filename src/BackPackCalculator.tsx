import React, { ReactNode, useState } from "react";
import Center from "./cssFolder/styleComponents/Center";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  ImageBackground,
  Picker,
} from "react-native";
import HeaderMain from "./Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { HomeImage } from "./image/";
import { styles } from "./cssFolder/styles";
import { color } from "react-native-reanimated";
import { Icon } from "react-native-elements";

//const [selectedValue, setSelectedValue] = useState("java");


interface Props {
  children: ReactNode;
  navigation: DrawerNavigationProp<any>
}

const BackPackCalculator: React.FC<Props> = ({ children, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <ImageBackground source={HomeImage} style={styles.container}>
    <HeaderMain navigation={navigation}/>
    <View style={{ backgroundColor: "#17301C", flexShrink: 1, margin: 30 }}>
        <Text style={{ fontSize: 20, padding: 10, color: "white" }}>
          Check List
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ padding: 10, color: "white", flexShrink: 1 }}>
            Make sure you are ready for your adveture! Checklist will help you
            organize items needed for trip
          </Text>
        </View>
        <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java"/>
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
    </ImageBackground>
  );
};

export default BackPackCalculator;
