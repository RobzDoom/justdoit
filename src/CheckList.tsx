import React, { ReactNode, useState } from "react";
import Center from "./cssFolder/styleComponents/Center";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  CheckBox,
} from "react-native";
import HeaderMain from "./Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { HomeImage } from "./image/";
import { styles } from "./cssFolder/styles";
import { color } from "react-native-reanimated";
import { Icon } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";

//const [selectedValue, setSelectedValue] = useState("java");

interface Props {
  children: ReactNode;
  navigation: DrawerNavigationProp<any>;
}

const CheckList: React.FC<Props> = ({ children, navigation }) => {
  const [isChecked, setCheked] = useState(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Image source={HomeImage} style={styles.image}></Image>
      </KeyboardAvoidingView>
      <HeaderMain navigation={navigation} />
      <View
        style={{
          backgroundColor: "#17301C",
          flexShrink: 1,
          margin: 30,
          height: 500,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            color: "white",
            textAlign: "center",
          }}
        >
          Start CheckList Here
        </Text>
        <View style={{ backgroundColor: "white", height: 400, margin: 20, flexDirection:"row"}}>
          <CheckBox
            value={isChecked}
            onValueChange={setCheked}
          />
          <Text>This is the First CheckBox </Text>
        </View>
      </View>
    </View>
  );
};

export default CheckList;
