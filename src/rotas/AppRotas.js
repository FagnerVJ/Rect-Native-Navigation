/* eslint-disable prettier/prettier */
//https://cursos.alura.com.br/course/react-native-criando-menu-navegando-telas/task/102824

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import MelhoresProdutores from '../telas/MelhoresProdutores';
const AppRotas = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Melhores Produtores' component={MelhoresProdutores} />
        </Tab.Navigator>

    )
}
export default AppRotas;