import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import {useEffect, useState} from 'react'
import firebase from "../configuração/firebaseConfig";
import Toast from 'react-native-toast-message'

const database = firebase.firestore()

export default function Editar({navigation, route}){
    const [nome, setNome] = useState(route.params.contato.nome)
    const [email, setEmail] = useState(route.params.contato.email)
    const [fone, setFone] = useState(route.params.contato.fone)
    const id = route.params.contato.id

    function editaContato(){
        if(nome === '' || email === '' || fone === ''){
            Toast.show({
                type: 'error',
                text1: 'Erro de edição',
                text2: 'Favor Preencher todos os campos!!'

            })
        }else{
            database.collection('contatos').doc(id).update({
                nome: nome,
                email: email,
                fone: fone
            })
            navigation.navigate('Listar')
        }
    }

    return(
        <View>
            <Text>Tela de Cadastro</Text>


            <Text style={styles.head}>ID</Text>
            <TextInput
            style={styles.input}
            value={id}
            />

            <Text style={styles.head}>Nome</Text>    
            <TextInput
            style={styles.input}
            placeholder='insira seu nome'
            value={nome}
            onChangeText={setNome}/>

            <Text style={styles.head}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder='insira seu email'
            value={email}
            onChangeText={setEmail}/>

            <Text style={styles.head}>Fone</Text>
            <TextInput
            style={styles.input}
            placeholder='insira seu fone'
            value={fone}
            onChangeText={setFone}/>

            <TouchableOpacity
            style={styles.button}
            onPress={editaContato}
            >
                <Text style={styles.buttonText}>Gravar Alteração</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 3,
        borderColor: 'blue',
        borderRadius: 5,
        width: 200,
        alignSelf: "center",
        backgroundColor: 'skyblue',
        marginTop: 10
        
    },
    buttonText:{
        color: 'blue',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttonAdd:{
        position:'absolute',
        bottom: 20,
        left: 20,
        width: 60,
        height: 60,
        backgroundColor: '#ff6f00',
        borderRadius: 50,
        justifyContent: 'center'

    },
    head:{
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 15,
        width: 200,
        marginTop: 5,
        alignSelf: 'center'
    },
    input:{
        borderWidth: 2,
        borderColor: 'skyblue',
        width: 200,
        marginTop: 10,
        alignSelf:'center'
    }


})