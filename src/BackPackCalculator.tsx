import React, { ReactNode } from "react";
import Center from "./cssFolder/styleComponents/Center";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import HeaderMain from "./Header";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface Props {
  children: ReactNode;
  navigation: DrawerNavigationProp<any>
}

const BackPackCalculator: React.FC<Props> = ({ children, navigation }) => {
  return (
    <View>
    <HeaderMain navigation={navigation} />
    <Center child={children}>
      <Text> This is the Back Pack Page </Text>

    </Center>
    </View>
  );
};

export default BackPackCalculator;
