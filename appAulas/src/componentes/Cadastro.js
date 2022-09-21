import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import database from '../configuração/firebaseConfig'

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
        <View>
            <Text>Tela de Cadastro</Text>
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
        borderWidth: 2,
        borderColor: 'skyblue',
        width: 200,
        marginTop: 10,
        alignSelf:'center'
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
    }
})