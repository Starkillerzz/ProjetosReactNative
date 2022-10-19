import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'
import firebase from '../configuração/firebaseConfig'


export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function logar(){
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos!'
            })
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                const user = userCredential.user
                console.log(user.email)
            })
            .catch((error)=>{
                console.log(error.message)
            })
        }
    }

    function logarGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then((result)=>{
            console.log(result.user)
            console.log(result.user.photoURL)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    return(
        
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Informe email'
                defaultValue={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe senha'
                defaultValue={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={logar}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={logarGoogle}
            >
                <Text>Logar com google</Text>
            </TouchableOpacity>
            <Text
                onPress={() => navigation.navigate('Register')}
                style={styles.registrar}
            >Registrar? Clique aqui.</Text>
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
        color: 'brown',
        fontSize: 18
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10
    },
    registrar: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'blue'
    }
});