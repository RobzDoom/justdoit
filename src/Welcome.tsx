import React, { useState } from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { styles } from "./cssFolder/styles";
import { IMAGENAME } from "./image/";
import firebase from "firebase";

interface Props {
  personName: string;
  catName: string;
  navigation: any;
}

const WelcomePage: React.FC<Props> = ({ navigation: { navigate } }) => {
  //const[searchString, setString] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState(null);

  const handleLogin = () => {
    console.log("Handle Sign in ");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("homePage"))
      .catch((error) => console.log(error));
  };

  return (
    <ImageBackground source={IMAGENAME} style={styles.image}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View>
              <Text style={styles.logoText}>BackPack App</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#c4c3cb"
                style={styles.loginFormTextInput}
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
                value={email}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#c4c3cb"
                style={styles.loginFormTextInput}
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
                value={password}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={handleLogin}
                title="Login"
              />
              <Button
                title="Dont have an Account? Sign Up"
                buttonStyle={styles.googleLoginButton}
                onPress={() => {
                  Alert.alert("Send me to Register Page");
                }}
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
