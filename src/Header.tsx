import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";

const HeaderMain: React.FC = () => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#F0F8FF" }}
      centerComponent={{ text: "Welcome To BackApp", style: { color: "#F0F8FF", fontWeight:"bold"} }}
      rightComponent={{ icon: "map", color: "#F0F8FF" }}
      containerStyle={{
        backgroundColor: "transparent",
        justifyContent: 'space-around',
        borderBottomWidth:0
      }}
    />
  );
};

export default HeaderMain;
