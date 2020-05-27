import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements"
import { styles } from "./cssFolder/styles";
import { IMAGENAME } from './image/'

interface PersonNameProps {
  personName: string;
  catName: string;
}

const WelcomePage: React.FC<PersonNameProps> = (props: PersonNameProps) => {
  return (
    <ImageBackground source={IMAGENAME} style={styles.image} >

    <KeyboardAvoidingView  behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
          <View>
          <Text style={styles.logoText}>BackPack App</Text>
            <TextInput placeholder="Username" placeholderTextColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderTextColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => Alert.alert('Log In Button')}
              title="Login"
            />
            <Button
              buttonStyle={styles.googleLoginButton}
              onPress={() => Alert.alert('Google Button')}
              title="Login with Gmail"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </ImageBackground>
  );
};

export default WelcomePage;

{
  /* <View style={styles.welcomeView}>
      <View style={styles.logInBox}>
        <Text style={styles.logHeader}>LOGIN</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
        />
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View> */
}
