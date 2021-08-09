import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native';

console.disableYellowBox = true;

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function finances() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#414141" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}