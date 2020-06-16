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
  TextInput,
  Image,
  KeyboardAvoidingView
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
  navigation: DrawerNavigationProp<any>;
}

const BackPackCalculator: React.FC<Props> = ({ children, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");

  const [weight, setWeight] = useState("100");
  
  return (
    
    <View style={styles.container}>
      <KeyboardAvoidingView>
      <Image source={HomeImage} style={styles.image}>
      </Image>
      </KeyboardAvoidingView>
      <HeaderMain navigation={navigation} />
        <View style={{ backgroundColor: "#17301C", flexShrink: 1, margin: 30 }}>
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              color: "white",
              textAlign: "center",
            }}
          >
            Weight
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ padding: 10, color: "white", flexShrink: 1 }}>
              What is your Weight: {weight}
            </Text>
          </View>
          <TextInput placeholder="Enter Weight Here" keyboardType="name-phone-pad" style={styles.loginFormTextInput} onChangeText={(weight) => setWeight(weight)}></TextInput>
        </View>
      {/* <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
    </View>
  );
};

export default BackPackCalculator;
