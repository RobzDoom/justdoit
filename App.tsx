import "react-native-gesture-handler";
import React, { useState } from "react";
import AppContainer from "./Routes/index"
import firebase from "firebase"

//Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const App: React.FC = () =>{
  return <AppContainer />
}

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