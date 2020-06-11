import React, { useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Button } from "react-native";
import { NavigationScreenProp, NavigationParams } from "react-navigation";
import { DrawerActions, NavigationState, CompositeNavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Icon, Header } from "react-native-elements";




interface Props {
  // navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  navigation: DrawerNavigationProp<any>;
}

// const About: React.FC <Props> = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text>Article Screen</Text>
//       <Button title="Drawer" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "grey"
//   },
// });

// export default About;

const About: React.FC<Props> = ({ navigation }) => {

  
  // const BarsMenu: React.FC = () => {
  //   return <AppNavigatorDraw />
  // };

  const SideBar = () => {
    return <View>
            <Text>Hello</Text>
          </View>
  }

  const IconCompoent: React.FC= () => {
    return (
      <Icon
        name="bars"
        type="font-awesome"
        color="#F0F8FF"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    );
  };

  return (
    <Header
      leftComponent={<IconCompoent />}
      centerComponent={{
        text: "Welcome To BackApp",
        style: { color: "#F0F8FF", fontWeight: "bold" },
      }}
      rightComponent={{ icon: "map", color: "#F0F8FF" }}
      containerStyle={{
        backgroundColor: "black",
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />
  );
};

export default About;
