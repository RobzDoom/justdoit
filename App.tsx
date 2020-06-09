import React from "react"
import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native"
import { createStackNavigator  } from "@react-navigation/stack"

import { SignIn, CreateAccount, Profile, Home  } from "./src/TestNavComp"
import { NavigationRouteConfigMap } from "react-navigation";

import { createDrawerNavigator } from "@react-navigation/drawer"

import WelcomePage from "./src/Welcome";
import HomePage from "./src/HomePage";
import Loading from "./src/Loading";
import SignUp from "./src/SignUp";
import About from "./src/About";

import firebase from "firebase"


var firebaseConfig = {
  apiKey: "AIzaSyBB8uvPhJAT_pHfKDIWCRQ_Oas7c9Ni0rE",
  authDomain: "backpackproject-cfcbb.firebaseapp.com",
  databaseURL: "https://backpackproject-cfcbb.firebaseio.com",
  projectId: "backpackproject-cfcbb",
  storageBucket: "backpackproject-cfcbb.appspot.com",
  messagingSenderId: "659300901405",
  appId: "1:659300901405:web:1037868884d1c400c19cf4",
  measurementId: "G-3XJF6KMDQ2"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

interface Props {}

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
  <AuthStack.Navigator>
        <AuthStack.Screen name="welcomeNav" component={WelcomePage} />
        <AuthStack.Screen name="About" component={About} />
        <AuthStack.Screen name="Home" component={HomePage} />
  </AuthStack.Navigator>
  )
}

const NavWelcome = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Welcome From Nav" component={WelcomePage}></Drawer.Screen>
            <Drawer.Screen name="About Page" component={About}></Drawer.Screen>
            <Drawer.Screen name="Home" component={HomePage}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

 const App: React.FC<Props> = ({}) => {

  return (
    <NavigationContainer>
       <NavWelcome />
    </NavigationContainer>
  );
}

export default App;