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
  KeyboardAvoidingView,
  ActionSheetIOS,
} from "react-native";
import HeaderMain from "./Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { HomeImage } from "./image/";
import { styles } from "./cssFolder/styles";
import { color } from "react-native-reanimated";
import { Icon } from "react-native-elements";
import RNPickerSelect from 'react-native-picker-select';

//const [selectedValue, setSelectedValue] = useState("java");

interface Props {
  children: ReactNode;
  navigation: DrawerNavigationProp<any>;
}

const BackPackCalculator: React.FC<Props> = ({ children, navigation }) => {
  const [selectedValue, setSelectedValue] = useState("java");

  const [weight, setWeight] = useState("0");
  const [days, setDays] = useState("0 Days")

  const daysOptions = [
    {
      label: '1-2 Days',
      value: '1',
    },
    {
      label: '2-4 Days',
      value: '2',
    },
    {
      label: '+5 days',
      value: '3',
    },
  ];

  const placeholder = {
    label: 'Select days...',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Image source={HomeImage} style={styles.image}></Image>
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
          {/* <Text style={{ padding: 10, color: "white", flexShrink: 1 }}>
            What is your Weight: {weight}
          </Text> */}
        </View>
        <TextInput
          placeholder="Enter Weight Here"
          keyboardType="name-phone-pad"
          style={styles.loginFormTextInput}
          onChangeText={(weight) => setWeight(weight)}
        ></TextInput>
        <TextInput style={{ color: "white", padding: 10 }}>
          Chosen Weight : {weight} lbs. 
        </TextInput>
      </View>
      {/* <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <View style={{ backgroundColor: "#17301C", flexShrink: 1, margin: 30 }}>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            color: "white",
            textAlign: "center",
          }}
        >
          How Many Days will you be Backpacking?
        </Text>
        <View style={{ flexDirection: "row" }}></View>
        {/* <TextInput
          placeholder="Enter Day Here:" 
          keyboardType="name-phone-pad"
          style={styles.loginFormTextInput}
          onChangeText={(days) => setDays(days)}
        ></TextInput> */}
        {/* <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="1-2 Days" value="0" />
          <Picker.Item label="2-4 Days" value="1" />
          <Picker.Item label="5 Days" value="2" />
        </Picker> */}
        <RNPickerSelect
            onValueChange={(days) => setDays(days)}
            placeholder={{
              label: 'Select Number of Days...',
              value: null,
              color: 'red',
            }}
            items={daysOptions}
            style={styles}
        />
      </View>
    </View>
  );
};

export default BackPackCalculator;
