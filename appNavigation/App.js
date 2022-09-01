import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/componentes/Home'
import Cadastro from './src/componentes/Cadastro'
import Consulta from './src/componentes/Consulta'

const TabMaterial = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabMaterial.Navigator useLegacyImplementation>
        <TabMaterial.Screen name= 'Home' component={Home} />
        <TabMaterial.Screen name= 'Cadastro' component={Cadastro}/>
        <TabMaterial.Screen name='Consulta' component={Consulta}/>
      </TabMaterial.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
