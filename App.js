import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator, StyleSheet, Text, View, LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {createSwitchNavigator} from '@react-navigation/compat';

import * as Font from 'expo-font';

import Onboarding from './src/screen/Onboarding';
import Login from './src/screen/Login';
import ForgetPassword from './src/screen/ForgetPassword';
import Signup from './src/screen/Signup';


LogBox.ignoreAllLogs();

const customFonts = {
  'Inter-BoldItalic':require('./assets/fonts/Inter-BoldItalic.ttf'),
  'Inter-ExtraBoldItalic':require('./assets/fonts/Inter-ExtraBoldItalic.ttf'),
  'Inter-MediumItalic':require('./assets/fonts/Inter-MediumItalic.ttf'),
  'Poppins-Bold':require('./assets/fonts/Poppins-Bold.ttf')
};

const AppNavigator = createSwitchNavigator({
  Onboarding: {screen:Onboarding},
  Login: {screen:Login},
  Signup: {screen:Signup},
  ForgetPassword: {screen:ForgetPassword},
  Home: TabNavigator
}, {
  initialRouteName: 'Onboarding'
})

export default function App() {

  const [assetsLoaded,setAssetLoaded]=useState(false);
  const _loadAssetsSync = async ()=> {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  }

  useEffect(()=>{
    _loadAssetsSync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar/>
      <AppNavigator/>
    </NavigationContainer>
  ):(
    <ActivityIndicator size='small'/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
