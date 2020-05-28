// SignUp.js
import React, { useState }from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

const SignUp: React.FC<any> = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('')
  const[errorMessage, setError] = useState(null)

  //<button onClick={() => setCount(count + 1)}>
const handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => setEmail(email)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => setPassword(password)}
          value={password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => {console.log('Hello')}
        }
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black"
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

export default SignUp;