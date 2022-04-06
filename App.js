/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import useProdutores from './src/hooks/useProdutores';



import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';
import AppRotas from './src/rotas/AppRotas';

const Tab = createBottomTabNavigator();

export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
      <NavigationContainer>
        <AppRotas />
      </NavigationContainer>
  </SafeAreaView>
}