import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home'
import Listar from './src/componentes/Listar';
import Cadastro from './src/componentes/Cadastro';
import Editar from './src/componentes/Editar';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Listar" component={Listar}/>
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Editar" component={Editar}/>
      </Drawer.Navigator>
    </NavigationContainer>
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
