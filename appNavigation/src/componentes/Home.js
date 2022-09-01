import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

export default function Home({navigation}){
    return(
       <View style={styles.home}>
           <Text>Bem vindo!</Text>
       </View> 
    )
}

const styles = StyleSheet.create({
    home:{
        backgroundColor: 'skyblue'
    },
})