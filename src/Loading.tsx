import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebase from "firebase"

interface Props {
  navigation: any;
}

const Loading: React.FC<Props> = ({ navigation: { navigate } }) => {
  
  //welcome
  //debugger
  useEffect(() =>{
    firebase.auth().onAuthStateChanged(user => {
      console.log("Did it go through here?" + user)
      navigate(user === null ? 'welcome': 'homePage')
    })
  })

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loading;
