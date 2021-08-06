import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes';

export default function finances() {
 return (
   <NavigationContainer>
     <StatusBar backgroundColor="#414141" barStyle="light-content" />
     <Routes/>
   </NavigationContainer>
  );
}