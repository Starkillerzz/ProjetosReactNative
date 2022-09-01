import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Consulta ({navigation}){
    return(
        <View style={styles.cons}>
            <Text>
                Tela de Consulta
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cons:{
        backgroundColor: 'skyblue'
    },
})