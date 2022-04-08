/* eslint-disable prettier/prettier */
//https://cursos.alura.com.br/course/react-native-criando-menu-navegando-telas/task/102824

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutorRotas from './MelhoresProdutosRotas';

const AppRotas = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={ProdutorRotas} />
          <Tab.Screen name='Melhores Produtores' component={MelhoresProdutorRotas} />
        </Tab.Navigator>

    )
}
export default AppRotas;