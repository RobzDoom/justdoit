import React, { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

interface Props {
  navigation: any;
}

const About: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text>Article Screen</Text>
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

export default About;
