import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import firebase from '../configuração/firebaseConfig'

const database = firebase.firestore()

export default function Cadastro({navigation}){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    function addContato(){
        database.collection('contatos').add({
            nome: nome,
            email: email,
            fone: fone
        })
        navigation.navigate('Listar')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Cadastro</Text>
            <TextInput
            style={styles.input}
            placeholder='insira seu nome'
            value={nome}
            onChangeText={setNome}/>

            <TextInput
            style={styles.input}
            placeholder='insira seu email'
            value={email}
            onChangeText={setEmail}/>

            <TextInput
            style={styles.input}
            placeholder='insira seu fone'
            value={fone}
            onChangeText={setFone}/>


            <TouchableOpacity
            style={styles.button}
            onPress={addContato}>
                <Text style={styles.buttonText}>Gravar</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 3,
        borderColor: 'blue',
        width: 200,
        marginTop: 10,
        alignSelf:'center',
        borderRadius: 10,
        padding: 5
        
    },
    button:{
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 5,
        width: 100,
        alignSelf: "center",
        backgroundColor: 'skyblue',
        marginTop: 20
    },
    buttonText:{
        color: 'blue',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    text:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'skyblue'
    },
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#33A4FF'
    },
    inputText:{
        marginRight: 2
    }
})