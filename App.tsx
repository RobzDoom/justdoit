import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import WelcomePage from './src/Welcome'
import { IMAGENAME } from './src/image'
import Loading from './src/Loading'

export default function App() {
  return (
    <View style={styles.container}>
     <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});