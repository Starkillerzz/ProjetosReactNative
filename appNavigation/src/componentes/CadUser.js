import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {Picker} from '@react-native-picker/picker'


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('')
    const [perfil, setPerfil] = useState('ADM')
    const [msg, setMsg] = useState('');

    function callSave() {
        if (dadosValidos()) {
            setMsg('')
            save()
        }

    }

    function limpar() {
        setNome('')
        setEmail('')
        setSenha('')
        setConfSenha('')
    }
    function save() {
        fetch('http://localhost:3000/usuarios',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                    perfil: perfil
                })
            }
        )
            .then(() => { setMsg('Registro inserido com sucesso') })
            .then(() => limpar())
            .catch((erro) => { setMsg("Registro não foi inserido"+erro) })
    }
    function dadosValidos() {
        if (nome == '') {
            setMsg('O nome deve ser informado!')
            return false
        } else if (email == '') {
            setMsg('O email deve ser informado!')
            return false
        } else if (senha == '') {
            setMsg('A senha deve ser informada!')
            return false
        } else if (senha != confSenha){
            setMsg('Senha e a confirmação de senha não conferem')
            return false
        }
        return true
    }
    return (
        <View style={{ flex: 1 }} >
            <View style={styles.container}>
                <Text style={styles.text}>Tela de Cadastro</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Informe nome"
                    value={nome}
                    onChangeText={setNome} />
                {(msg.search('nome') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : null}

                <TextInput
                    placeholder="Informe email"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail} />

                {(msg.search('email') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : null}

                <TextInput
                    placeholder="Informe a senha"
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry = {true} />
                {(msg.search('A senha') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : null}

                <TextInput
                    placeholder = "informe a confirmação de senha"
                    style={styles.input}
                    value = {confSenha}
                    onChangeText ={setConfSenha}
                    secureTextEntry= {true}/>
                    {(msg.search('confirmação') > -1) ? <Text style={styles.mensagem}>{msg}</Text> : null}
                    
                <Picker selectedValue = {perfil} onValueChange = {setPerfil}>
                    <Picker.Item label = "ADM" value = "ADM"/>
                    <Picker.Item label = "VENDEDOR" value = "VENDEDOR"/>
                    <Picker.Item label = "GERENTE" value = "GERENTE"/>
                </Picker>
                

                <TouchableOpacity style={styles.button}
                    onPress={callSave}>
                    <Text>Gravar</Text>
                </TouchableOpacity>
                {(msg.search('Registro') > -1) ? <Text style={styles.msg}>{msg}</Text> : null}
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
    mensagem: {
        color: 'red',
        fontSize: 15
    },
})