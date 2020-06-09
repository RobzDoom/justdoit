import React from "react"
import "react-native-gesture-handler";
import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native"
import { createStackNavigator  } from "@react-navigation/stack"
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer"
import WelcomePage from "../src/Welcome";
import HomePage from "../src/HomePage";
import Loading from "../src/Loading";
import SignUp from "../src/SignUp";
import About from "../src/About";
import AppNavigatorDraw from "./drawer"


import { NavigationRouteConfigMap } from "react-navigation";


// import { StackNavigationOptions, StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

//routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp>

// interface Props {
//     routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp>
// }

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
  <AuthStack.Navigator>
        <AuthStack.Screen name="welcomeNav" component={NavWelcome} />
  </AuthStack.Navigator>
  )
}

const NavWelcome = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Welcome From Nav" component={WelcomePage}></Drawer.Screen>
            <Drawer.Screen name="Welcome From Nav" component={About}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default function App() {

  return (
    <NavigationContainer>
       <HomeStack />
    </NavigationContainer>
  );
}
