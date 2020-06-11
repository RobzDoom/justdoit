import React, { ReactNode } from "react"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../src/About";
import { View, Text } from "react-native";
import Center from "../src/cssFolder/styleComponents/Center"

interface Props {
    navigation: any
    children: ReactNode
}

const Stack = createStackNavigator()

const Login: React.FC<Props> = ({children})=>{
    return (
        <Center child={children} >
            <Text> I am log in </Text>
        </Center>
    )
}

const Routes: React.FC= ()=> {
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes