import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { Button, View, Text } from "react-native";
import WelcomePage from "./Welcome";
import About from "./About";
import HomePage from "./HomePage";
import { DrawerActions } from '@react-navigation/native';

//type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface IUserProfile {
  age: number;
  name: string
}

interface Props {
  navigation: DrawerNavigationProp<any>;
}

interface ProfileScreenState {
  showNameEditModal: boolean;
}



const HeaderMain: React.FC<Props> = ({ navigation }) => {


  const IconCompoent: React.FC= () => {
    return (
      <Icon
        name="bars"
        type="font-awesome"
        color="#F0F8FF"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    );
  };

  return (
    <Header
      leftComponent={<IconCompoent />}
      centerComponent={{
        text: "Welcome To BackApp",
        style: { color: "#F0F8FF", fontWeight: "bold" },
      }}
      rightComponent={{ icon: "map", color: "#F0F8FF" }}
      containerStyle={{
        backgroundColor: "transparent", //brown
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />
  );
};

export default  HeaderMain;

//{ icon: "menu", color: "#F0F8FF" }
