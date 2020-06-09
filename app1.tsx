import React from "react"
import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native"
import { createStackNavigator  } from "@react-navigation/stack"

import { SignIn, CreateAccount  } from "./src/TestNavComp"
import { NavigationRouteConfigMap } from "react-navigation";
// import { StackNavigationOptions, StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

//routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp>

// interface Props {
//     routeConfigMap: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp>
// }

const AuthStack = createStackNavigator();

export default () => {
    <NavigationContainer>
       <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={SignIn}></AuthStack.Screen>
       </AuthStack.Navigator>
    </NavigationContainer>
}