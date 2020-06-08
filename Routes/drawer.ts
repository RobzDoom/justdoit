import { createDrawerNavigator } from "react-navigation-drawer";
import {createAppContainer, NavigationScreenProp } from 'react-navigation';
import HomeStack from "./burgerMenuNav"
import WelcomePage from "../src/Welcome";
import HomePage from "../src/HomePage";
import Loading from "../src/Loading";
import SignUp from "../src/SignUp";
import About from "../src/About";
import TestMenu from "../Routes/burgerMenuNav"

interface Props {
  navigation: NavigationScreenProp<any>;
}


const AppNavigatorDraw = createDrawerNavigator({
  homePage: WelcomePage,
  aboutPage: About,
  })


export default AppNavigatorDraw