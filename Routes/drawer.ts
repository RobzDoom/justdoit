import { createDrawerNavigator } from "react-navigation-drawer";
import {createAppContainer } from 'react-navigation';
import HomeStack from "./burgerMenuNav"


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
});

const Burger = createAppContainer(RootDrawerNavigator)
export default Burger