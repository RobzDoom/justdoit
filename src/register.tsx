// import React from "react";
// import {
//   Keyboard,
//   Text,
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Alert,
//   KeyboardAvoidingView,
//   ImageBackground,
// } from "react-native";
// import { Button } from "react-native-elements"
// import { styles } from "./cssFolder/styles";
// import { IMAGENAME } from './image'

// const RegisterPage: React.FC = () =>{
//     return(
//         <Text>Register Here</Text>
//     );
// }
//Aaron Nelson
// export default RegisterPage

// Login.js
// import React from 'react'
// import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
// export default class Login extends React.Component {
//   state = { email: '', password: '', errorMessage: null }
//   handleLogin = () => {
//     // TODO: Firebase stuff...
//     console.log('handleLogin')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Login</Text>
//         {this.state.errorMessage &&
//           <Text style={{ color: 'red' }}>
//             {this.state.errorMessage}
//           </Text>}
//         <TextInput
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Email"
//           onChangeText={email => this.setState({ email })}
//           value={this.state.email}
//         />
//         <TextInput
//           secureTextEntry
//           style={styles.textInput}
//           autoCapitalize="none"
//           placeholder="Password"
//           onChangeText={password => this.setState({ password })}
//           value={this.state.password}
//         />
//         <Button title="Login" onPress={this.handleLogin} />
//         <Button
//           title="Don't have an account? Sign Up"
//           onPress={() => this.props.navigation.navigate('SignUp')}
//         />
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   textInput: {
//     height: 40,
//     width: '90%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginTop: 8
//   }
// })


// Expo DevTools is running at http://localhost:19003
// Opening DevTools in the browser... (press shift-d to disable)
// Some of your project's dependencies are not compatible with currently installed expo package version:
//  - react-native-reanimated - expected version range: ~1.7.0 - actual version installed: ^1.9.0
//  - react-native-safe-area-context - expected version range: 0.7.3 - actual version installed: ^3.0.2
//  - @react-native-community/masked-view - expected version range: 0.1.6 - actual version installed: ^0.1.10
//  - firebase - expected version range: 7.9.0 - actual version installed: ^7.14.5
// Your project may not work correctly until you install the correct versions of the packages.
// To install the correct versions of these packages, please run: expo install [package-name ...]

// Some of your project's dependencies are not compatible with currently installed expo package version:
//  - react-native-reanimated - expected version range: ~1.7.0 - actual version installed: ^1.9.0
//  - react-native-safe-area-context - expected version range: 0.7.3 - actual version installed: ^3.0.2
//  - @react-native-community/masked-view - expected version range: 0.1.6 - actual version installed: ^0.1.10
//  - firebase - expected version range: 7.9.0 - actual version installed: ^7.14.5
// Your project may not work correctly until you install the correct versions of the packages.