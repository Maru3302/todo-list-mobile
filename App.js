import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Login from './Login'; 
import Register from './Register';
import Forgot from './ForgotPass';
import Reset from './ResetPass';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
