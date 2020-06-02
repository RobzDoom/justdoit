import React, { useState } from "react";
import { Header } from "react-native-elements";
import { styles } from "./cssFolder/styles";

const HeaderMain: React.FC = () => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#454545" }}
      centerComponent={{ text: "Welcome To BackApp", style: { color: "#454545", fontWeight:"bold"} }}
      rightComponent={{ icon: "map", color: "#454545" }}
      containerStyle={{
        backgroundColor: '',
        justifyContent: 'space-around',
      }}
    />
  );
};

export default HeaderMain;
