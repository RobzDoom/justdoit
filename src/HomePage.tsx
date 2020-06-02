import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { styles } from "./cssFolder/styles";
import firebase from "firebase";
import { Button } from "react-native-elements";
import HeaderMain from "./Header"
import HomePageOptions from "./HomePageOptions"

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [currentUser, setUser] = useState("");

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigate("welcome"))
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <View style={styles.homePageContainer}>
      <HeaderMain />
      <HomePageOptions />
      {/* <Text>This is Home Page</Text>
      <Button
        title="Sign Out"
        onPress={handleSignOut}
      /> */}
    </View>
  );
};

export default HomePage;
