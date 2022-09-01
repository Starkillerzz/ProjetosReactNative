import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [msg, setMsg] = useState('');

    function salvar() {
        if (dadosValidos()) {
            var contato = {
                nome: nome,
                email: email,
                fone: fone
            }
            console.warn(contato)
            setMsg('')
        }

    }


    function dadosValidos() {
        if (nome == '') {
            setMsg('O nome deve ser informado!')
            return false
        }else if(email == ''){
            setMsg('O email deve ser informado!')
            return false
        }else if(fone == ''){
            setMsg('O fone deve ser informado!')
            return false
        }
        return true
    }
    return (
        <View style={{flex: 1}} >
            <View style={styles.container}>
                <Text style={styles.text}>Tela de Cadastro</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe nome"
                    value={nome}
                    onChangeText={setNome} />
                {(msg.search('nome') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : ''}

                <TextInput
                    placeholder="Informe email"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail} />

                {(msg.search('email') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : ''}

                <TextInput
                    placeholder="Informe fone"
                    style={styles.input}
                    value={fone}
                    onChangeText={setFone} />
                {(msg.search('fone') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : ''}

                <TouchableOpacity style={styles.button}
                    onPress={salvar}>
                    <Text>Gravar</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.container2}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    container2: {
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    button: {
        backgroundColor: 'purple',
        marginTop: 5,

    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'purple'


    },
    text: {
        color: 'purple',
        fontSize: 50
    },
    mensagem:{
        color: 'red',
        fontSize: 15
    },
})