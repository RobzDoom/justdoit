import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import WelcomePage from './src/Welcome'
import { IMAGENAME } from './src/image'

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePage personName="Jed" catName="Ked" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});