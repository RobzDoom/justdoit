import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Platform, Image, Text, View, ImageBackground } from "react-native";
import { styles } from "./cssFolder/styles";
import firebase from "firebase";
import { Button, colors } from "react-native-elements";
import HeaderMain from "./Header"
import HomePageOptions from "./HomePageOptions"
import { HomeImage } from "./image/";

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
    <View style={styles.container}>
    <ImageBackground source={HomeImage} style={styles.image}>
    <HeaderMain />
    <View style={{justifyContent:"center", flex:1}}>
      <HomePageOptions />
    </View>
    </ImageBackground>
    <View>
    <Button
        title="Sign Out"
        onPress={handleSignOut}
        buttonStyle={{
          backgroundColor:"#72705B"
        }
        }
      /> 
    </View>
    </View>
  );
};

export default HomePage;


//  <Text>This is Home Page</Text>
//       <Button
//         title="Sign Out"
//         onPress={handleSignOut}
//       /> 
