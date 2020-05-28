import React, { Component } from "react";

import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView  behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
          <View >
          <Text >Instamobile</Text>
            <TextInput placeholder="Username"   />
            <TextInput placeholder="Password"   secureTextEntry={true}/>
            <Button
              
              onPress={() => this.onLoginPress()}
              title="Login"
            />
            <Button
              
             
              title="Login with Facebook"
              
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

//   async onFbLoginPress() {
//     const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
//       permissions: ['public_profile', 'email'],
//     });
//     if (type === 'success') {
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert(
//         'Logged in!',
//         `Hi ${(await response.json()).name}!`,
//       );
//     }
//   }
// }
}
