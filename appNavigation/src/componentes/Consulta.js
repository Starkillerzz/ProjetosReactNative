import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import CardContato from './CardContato'

export default function Consulta (){
    const [contatos, setContatos] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/contatos')
        .then(data =>data.json())
        .then(result => setContatos(result))

    }, [])

    return(
        <View style={styles.cons}>
            <Text>
                Tela de Consulta <hr></hr>
            </Text>
            <FlatList
                data={contatos}
                renderItem = {({item}) => <CardContato id={item.id} nome={item.nome} fone={item.fone} email={item.email} />}
                keyExtractor = {item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    cons:{
        backgroundColor: 'skyblue'
    },
})