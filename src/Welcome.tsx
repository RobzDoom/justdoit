import React from "react";
import { Text, View, TextInput, TouchableOpacity, Button, Alert } from "react-native";
import { styles } from "./cssFolder/styles";

interface PersonNameProps {
  personName: string;
  catName: string;
}

const WelcomePage: React.FC<PersonNameProps> = (props: PersonNameProps) => {
  return (
    <View style={styles.welcomeView}>
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
    </View>
  );
};

export default  WelcomePage ;
