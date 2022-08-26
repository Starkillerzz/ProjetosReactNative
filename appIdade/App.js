import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IdadeTeste from "./src/componentes/forms"
import InputIdade from  "./src/componentes/mostrar"

export default function App() {

  return (
    <View style={styles.container}>
    <View style={{flex: 3, backgroundColor: 'red'}} >
      <Text style={styles.texto}>Aplicativo da Maioridade</Text>
      
      
      <IdadeTeste/>
      <InputIdade/>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    marginBottom: 20,
    color: 'purple'
  },
});
