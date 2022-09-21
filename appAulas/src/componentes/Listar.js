import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import database from '../configuração/firebaseConfig'

export default function Listar({navigation}){
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("contatos").onSnapshot((query)=>{
            const list = []
            query.forEach(doc =>{
                list.push({...doc.data(), id:doc.id})
            })
            setLista(list)
        })
    },[])
    return(
        <View>
            <FlatList
                data={lista}
                renderItem={({item}) =>{ 
                    return(
                <View>
                <Text>{item.nome}</Text>
                </View>

                )}}/>
            <TouchableOpacity style={styles.button}
            onPress= {() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Cadastrar novo contato</Text>
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
        backgroundColor: 'skyblue'
        
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

    }


})