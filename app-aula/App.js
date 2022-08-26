import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';
import MeuComponente from "./src/componente/MeuComponente";


export default function App() {
  const [nome, setNome] = React.useState('')
  const [idade, setIdade] = React.useState('')
  


  return (
    <View style={styles.container}>
      <Text>Você é Maior de Idade?</Text>
      <TextInput
        placeholder = "Informe Nome"
        onChangeText = {setNome}
        value = {nome}
      />
      <TextInput
      placeholder="Informe sua Idade"
      onChangeText={setIdade}
      value = {idade}
      />
      
      <TouchableOpacity>
          <Text style={styles.button}>Clique aqui</Text>
      </TouchableOpacity>
      
      
      
      <MeuComponente
      nome="carlos caramujo"
      idade='50'
      />
      


      <StatusBar style="auto" />
    </View>
    
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: "skyblue"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

