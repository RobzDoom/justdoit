import "react-native-gesture-handler";
import React, { useState } from "react";
import AppContainer from "./Routes/index"
import firebase from "firebase"
import HomeStack1 from "./Routes/burgerMenuNav"
import DrawerNavigator from "react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator";

var firebaseConfig = {
  apiKey: "AIzaSyBB8uvPhJAT_pHfKDIWCRQ_Oas7c9Ni0rE",
  authDomain: "backpackproject-cfcbb.firebaseapp.com",
  databaseURL: "https://backpackproject-cfcbb.firebaseio.com",
  projectId: "backpackproject-cfcbb",
  storageBucket: "backpackproject-cfcbb.appspot.com",
  messagingSenderId: "659300901405",
  appId: "1:659300901405:web:1037868884d1c400c19cf4",
  measurementId: "G-3XJF6KMDQ2"
};

//Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const App: React.FC = () =>{
  return <HomeStack1 />
}

// const myApp = DrawerNavigator({

// })


export default App


// export default function App() {
//   const navigator = createStackNavigator({
//     homepage: HomePage 
//   },{
//     initialRouteName: 'homepage'
//   });
  
//   const AppContainer = createAppContainer(navigator)

//   return (
//     <View>
//       <AppContainer />
//       <Text>Hello</Text>
//     </View>
//   );
// }


// <View style={styles.container}>
//  <WelcomePage personName="Tay" catName="Kled"/>
// </View>

{/* <NavigationContainer>
<Stack.Navigator headerMode="none">
  <Stack.Screen name="Welcome" component={WelcomePage} options={{
    headerStyle:{
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }
  }}/>
</Stack.Navigator>
</NavigationContainer> */}




  // const navigator = createStackNavigator({
  //       welcome: WelcomePage
  //     },{
  //       initialRouteName: 'welcome',
  //       headerMode: "none"
  //     });
      
  //     const AppContainer = createAppContainer(navigator)