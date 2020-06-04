import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomePage from "../src/Welcome";
import HomePage from "../src/HomePage";
import Loading from "../src/Loading";
import SignUp from "../src/SignUp";

const screens = {
    Welcome: {
        screen: WelcomePage
    },
    HomePage:{
        screen: HomePage
    }
}

// const a = createStackNavigator({
//     loading: Loading,
//     signUp: SignUp,
//     welcome: WelcomePage,
//     homePage: HomePage

//   },{
//     initialRouteName: 'loading',
//     headerMode: "none"
//   });


const HomeStack = createStackNavigator(screens, {
  initialRouteName: ""
})

const HomeStack1 = createAppContainer(HomeStack);

export default HomeStack1