import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      value={nome}
      onChangeText={setNome}
      placeholder='insira seu nome aqui'/>

      <Text>{nome}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'red'
  }
});
