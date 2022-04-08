/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../telas/Home';
import Produtor from '../telas/Produtores/componentes/Produtor';

const Stack = createNativeStackNavigator();

const ProdutorRotas = ({CompomentePrincipal = Home}) => {
    return(<Stack.Navigator>
         <Stack.Screen  name='HomeScreed' component={Home}/>
        <Stack.Screen  name='Produtor' component={Produtor}/>
    </Stack.Navigator>

    )
}

export default ProdutorRotas;