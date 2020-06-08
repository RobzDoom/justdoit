import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeStack from "./index"
import WelcomePage from "../src/Welcome";
import HomePage from "../src/HomePage";
import Loading from "../src/Loading";
import SignUp from "../src/SignUp";
import About from "../src/About";


// const TestMenu = createStackNavigator(
//   {
//     loading: Loading,
//     welcome: WelcomePage,
//     homePage: HomePage,
//     aboutPage: About,
//   },
//   {
//     initialRouteName: "loading",
//     headerMode: "none",
//   }
// );

const TestMenu = createStackNavigator({
  home: HomePage,
  about: About,
  
})


export default TestMenu;
