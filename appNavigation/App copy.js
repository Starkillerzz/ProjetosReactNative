import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/componentes/Home'
import Cadastro from './src/componentes/Cadastro'
import Consulta from './src/componentes/Consulta'

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name= 'Home' component={Home} />
        <Drawer.Screen name= 'Cadastro' component={Cadastro}/>
        <Drawer.Screen name='Consulta' component={Consulta}/>
      </Drawer.Navigator>
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
