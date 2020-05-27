import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import WelcomePage from './src/Welcome'
import { IMAGENAME } from './src/image'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGENAME} style={styles.image}>
      <WelcomePage personName="Jed" catName="Ked" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  }
});