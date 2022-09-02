import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Edicao(props) {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [fone, setFone] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(
        () => {
           fetch(`http://localhost:3000/contatos/${props.id}`) 
           .then(data => data.json())
           .then(result => {
                 setNome(result.nome)
                 setEmail(result.email)
                 setFone(result.fone)
           })
        }, 
    [id]);
     
    function callSave() {
        if (validaDados()) {
            setMsg("");
            save();          
        }
    }

    function limpar(){
        setNome("")
        setFone("")
        setEmail("")
    }

    function save() {
        fetch(`http://localhost:3000/contatos/${props.id}`,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    fone: fone,
                    email: email
                })
            }
        )
        .then(() => {setMsg("Registro alterado com sucesso")})
        .then(() => limpar())        
        .catch(() => {setMsg("Registro não foi alterado")})
    }

    function validaDados() {
        if (nome.length == 0) {
            setMsg("O nome deve ser informado")
            return false;
        }

        if (email.length == 0) {
            setMsg("O email deve ser informado")
            return false;
        }

        if (fone.length == 0) {
            setMsg("O fone deve ser informado")
            return false;
        }
        return true;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edição de Contatos</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setId(props.id)}
                defaultValue={props.id}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                onChangeText={text => setNome(text)}
                value={nome}
            />
            {(msg.search('nome') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                onChangeText={text => setEmail(text)}
                value={email}
            />
            {(msg.search('email') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <TextInput
                style={styles.input}
                placeholder="Digite seu fone"
                onChangeText={text => setFone(text)}
                value={fone}
            />
            {(msg.search('fone') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}

            <TouchableOpacity
                style={styles.button}
                onPress={() => callSave()}
            >
                <Text style={{ color: 'red' }}>Alterar</Text>
            </TouchableOpacity>
            {(msg.search('Registro') > -1) ? <Text style={styles.alert}>{msg}</Text> : <Text></Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'purple'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 20,
        borderRadius: 10
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    title: {
        color: 'red',
        FontSize: 14
    },
    alert: {
        color: 'red',
        fontSize: 10
    }
})