import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import LogIn from './screens/LogIn';



const App = () => {
  const Stack = createNativeStackNavigator();

 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LogIn'>
        <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
   
  )

}



export default App