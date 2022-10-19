import { useState } from "react"
import Toast from 'react-native-toast-message'
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import firebase from '../configuração/firebaseConfig'

export default function Register({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function addUser(){
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos!'
            })
        }else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                const user = userCredential.user
                navigation.navigate('Login')
            })
            .catch((error)=> {
                console.log(error.message)
            })
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: ana@gmail.com"
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe senha no minimo 6 caracteres"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addUser()
                }}
            >
                <FontAwesome
                    name="user-plus"
                    color='black'
                    size={24}
                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    input: {
        width: '100%',
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 10
    },
    label: {
        color: '#0099ff',
        fontSize: 18
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10
    }
});