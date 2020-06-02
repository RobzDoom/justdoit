import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";

const HeaderMain: React.FC = () => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "Welcome To BackApp", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
      containerStyle={{
        backgroundColor: '#72705B',
        justifyContent: 'space-around',
      }}
    />
  );
};

export default HeaderMain;
