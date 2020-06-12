import React from "react";
import {
  NavigationContainer,
  NavigationRouteContext,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn, CreateAccount, Profile, Home } from "./src/TestNavComp";
import { NavigationRouteConfigMap } from "react-navigation";

import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomePage from "./src/Welcome";
import HomePage from "./src/HomePage";
import Loading from "./src/Loading";
import SignUp from "./src/SignUp";
import About from "./src/About";

import firebase from "firebase";
import Routes from "./Routes/Routes3";
import BackPackCalculator from "./src/BackPackCalculator";

var firebaseConfig = {
  apiKey: "AIzaSyBB8uvPhJAT_pHfKDIWCRQ_Oas7c9Ni0rE",
  authDomain: "backpackproject-cfcbb.firebaseapp.com",
  databaseURL: "https://backpackproject-cfcbb.firebaseio.com",
  projectId: "backpackproject-cfcbb",
  storageBucket: "backpackproject-cfcbb.appspot.com",
  messagingSenderId: "659300901405",
  appId: "1:659300901405:web:1037868884d1c400c19cf4",
  measurementId: "G-3XJF6KMDQ2",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

interface Props {}

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="loading" component={Loading} />
      <AuthStack.Screen name="About" component={About} />
      <AuthStack.Screen name="home" component={HomePage} />
      <AuthStack.Screen name="navW" component={NavWelcome} options={{ headerShown: false }}/>
    </AuthStack.Navigator>
  );
};

const HomeStack1 = () => {
  return (
    <AuthStack.Navigator headerMode={"none"}>
      <AuthStack.Screen name="home" component={HomePage} />
      <AuthStack.Screen name="about" component={About} />
      <AuthStack.Screen name="backPackCalc" component={BackPackCalculator} />
    </AuthStack.Navigator>
  );
};

const NavWelcome = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="loading"
        component={Loading}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="home" component={HomePage}></Drawer.Screen>
      <Drawer.Screen name="welcome" component={WelcomePage}></Drawer.Screen>
      <Drawer.Screen name="About Page" component={About}></Drawer.Screen>
      <Drawer.Screen name="homeStack1" component={HomeStack1}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const App: React.FC<Props> = ({}) => {
  return (
    <NavigationContainer>
      <NavWelcome />
    </NavigationContainer>
  );
};

export default App;
