import React, { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button } from "react-native";
import { NavigationScreenProp, NavigationParams } from "react-navigation";
import { DrawerActions, NavigationState, CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from "@react-navigation/drawer";




interface Props {
  // navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  navigation: DrawerNavigationProp<any>;
}

const About: React.FC <Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Article Screen</Text>
      <Button title="Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
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
