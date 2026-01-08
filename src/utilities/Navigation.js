import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../LoginPage'
import SignupPage from '../ SignupPage'



const Stack = createNativeStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationScreen;

