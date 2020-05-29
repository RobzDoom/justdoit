import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomePage from "../src/Welcome";
import HomePage from "../src/HomePage";
import Loading from "../src/Loading";
import SignUp from "../src/SignUp";

export enum ROUTES {
  RootMain = "RootMain",
  Loading = "Loading",
  Welcome = "Welcome",
  HomePage = "HomePage",
  SignUp = "SignUp",
}

// The stack for the main navigation
const MainStack = createStackNavigator({
  [ROUTES.Loading]: {
    screen: Loading,
  },
  [ROUTES.SignUp]: {
    screen: SignUp,
  },
  [ROUTES.Welcome]: {
    screen: WelcomePage,
  },
  [ROUTES.HomePage]: {
    screen: HomePage,
  },
});

const Navigator = createStackNavigator({
    loading: Loading,
    signUp: SignUp,
    welcome: WelcomePage,
    homePage: HomePage

  },{
    initialRouteName: 'loading',
    headerMode: "none"
  });


// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.RootMain]: {
      screen: Navigator,
    },
  },
  {
    headerMode: "none",
    initialRouteName:"Loading"
  }
);

const AppContainer = createAppContainer(Navigator);

export default AppContainer;