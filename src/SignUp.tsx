// SignUp.js
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import { styles } from "./cssFolder/styles";

interface Props {
  navigation: any;
}

const SignUp: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState(null);

  //<button onClick={() => setCount(count + 1)}>
  const handleSignUp = () => {
    // TODO: Firebase stuff...
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("homePage"))
      .catch((error) => setError(error.message));
    console.log("fireBase Sign Up");
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      {errorMessage && (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      )}
      <Text style={stylesMain.logoText}>SignUp App</Text>
      <Text>Sign Up</Text>
      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.loginFormTextInput}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.loginFormTextInput}
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => {
          navigate("welcome");
        }}
      />
    </View>
  );
};
const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 80,
    marginBottom: 30,
    textAlign: "center",
  },
});

export default SignUp;
