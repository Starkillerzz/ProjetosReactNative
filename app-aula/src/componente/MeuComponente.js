import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
export default function MeuComponente(props) {
    return (
        <View>
            <Text style={styles.button}>{props.nome}</Text>
            <Text>{props.idade}</Text>
        </View>
    )
}
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
        color: "purple"
        
      }
  });

  
