import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  welcomeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // whiteTxt: {
  //   fontSize: 10,
  //   color: "black",
  //   textAlign: "center",
  // },
  logHeader:{
    textAlign:"center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"Arial-BoldItalicMT"
  },
  logInBox: {
    width: 200,
    height: 350,
    backgroundColor: "white",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "red",
  },
});
