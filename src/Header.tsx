import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { NavigationScreenProp, NavigationState, NavigationParams} from 'react-navigation';
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, View, Text } from "react-native";
import  AppNavigatorDraw  from "../Routes/drawer"
import { DrawerActions, DrawerContentComponentProps, DrawerItems, NavigationDrawerScreenProps  } from "react-navigation-drawer";

//type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface IUserProfile {
  age: number;
  name: string
}

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface ProfileScreenState {
  showNameEditModal: boolean;
}


const HeaderMain: React.FC<Props> = ({ navigation }) => {
  const Drawer = createDrawerNavigator();

  
  // const BarsMenu: React.FC = () => {
  //   return <AppNavigatorDraw />
  // };

  const SideBar = () => {
    return <View>
            <Text>Hello</Text>
          </View>
  }

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
        backgroundColor: "transparent",
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />
  );
};

export default  HeaderMain;

//{ icon: "menu", color: "#F0F8FF" }
