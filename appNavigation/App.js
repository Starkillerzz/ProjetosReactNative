import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import Home from './src/componentes/Home';
import Cadastro from './src/componentes/CadUser';
import Consulta from './src/componentes/Consulta';
import ConsultaToast from './src/componentes/ConsultaToast'
import Login from './src/componentes/Login';
import Icon from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-toast-message';



const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [perfil, setPerfil] = React.useState('')

  React.useEffect(() => {
    decodificaToken()
  }, [perfil])

  async function decodificaToken() {
    var token = await AsyncStorage.getItem('login')
    if (token != null) {
      var token_decode = await jwt_decode(token)
      setPerfil(token_decode.perfil)
    }

  }
  return (

    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}
          options={() => ({
            tabBarIcon: () => (
              <Icon name="home" size={26} color="purple" />
            )

          })} />
        <Tab.Screen name='Cadastro' component={Cadastro}
          options={() => ({
            tabBarIcon: () => (
              <Icon name="person-add" size={26} color="purple" />
            )

          })} />
        <Tab.Screen name='Login' component={Login}
          options={() => ({
            tabBarIcon: () => (
              <Icon name="log-in" size={26} color="purple" />
            )

          })} />
        {<Tab.Screen name='Consulta' component={ConsultaToast}/>}
      </Tab.Navigator>
      <Toast />
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
