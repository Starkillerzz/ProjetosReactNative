import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, TextInput  } from "react-native";
import InputIdade from "./mostrar";



export default function IdadeTeste(){

    const[nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [msg, setMsg] = useState('')
    
    const maioridade = () =>{
        
        if(idade >= 18){
            setMsg (`${nome}, você é maior de idade`)
        }else{
            setMsg (`${nome}, você é menor de idade`)
        }
        
    }
    return(
    
    <View>
        
        <TextInput 
                placeholder="insira seu nome"
                onChangeText={setNome}
                value={nome}
                style={styles.texto}
            
            />
            <TextInput 
                placeholder="insira sua idade"
                onChangeText={setIdade}
                value={idade}
                style={styles.texto}
                
            
            />

        <TouchableOpacity onPress = {maioridade} >
            <Text style={styles.botao}>Clique aqui para calcular</Text>
        </TouchableOpacity>

        <InputIdade resultado={msg}/>
    </View>
    
    )
    
} 
const styles = StyleSheet.create({
    botao: {
        backgroundColor: "skyblue",
        borderRadius: 8,
        padding: 10,
        marginTop: 5,
        fontSize: 15
    },
    texto:{
        fontSize: 20,
        marginTop: 10,
        
    }
});