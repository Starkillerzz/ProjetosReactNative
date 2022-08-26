import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';
import ResultadoCarro from './src/componentes/result';


export default function App() {
const [text, setText] = useState('')
const [carro, setCarro] = useState([''])
const [erro, setErro] = useState('')

const addcarro = ()=>{
  if(Text == ''){
    setErro ('Insira um texto')
  }else{
    setCarro((c) => [...c, text])
    setText('')
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LISTA DE FRUTAS <hr></hr></Text>
      <TextInput 
          style={styles.input}
          placeholder="Insira um carro"
          onChangeText={setText}
          value={text}
      
      ></TextInput>
      <TouchableOpacity
        onPress={addcarro}
        style={styles.button}
        
      >
        <Text>Salvar</Text>
      </TouchableOpacity>
    <ResultadoCarro data={carro}/>
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    backgroundColor:'skyblue',
    fontSize: 30,
    borderRadius: 5,
    padding: 10
    
  },
  input: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
    
  },
  text:{
    fontSize:40,
    color: 'purple'
  },
});
