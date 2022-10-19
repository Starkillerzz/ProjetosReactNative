import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home'
import Listar from './src/componentes/Listar';
import Cadastro from './src/componentes/Cadastro';
import Editar from './src/componentes/Editar';
import Toast from 'react-native-toast-message';
import Login from './src/componentes/Login';
import Register from './src/componentes/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Listar" component={Listar}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Editar" component={Editar}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
      <Toast/>
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
