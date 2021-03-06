import { StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homePageContainer:{
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  googleLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 80,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },


  image: {
    flex: 1,
    // position: 'absolute',
    // width:'100%',
    // height:'100%',
    // zIndex:-1
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  loginFormView: {
    flex: 1
  },
  homeOptions: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  picker: {
    backgroundColor:"#FFFAF0",
    bottom: 40,
    left: 0,
    right: 0,
    top:0,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    color:"white",
    textAlign: "center"
  }
});
