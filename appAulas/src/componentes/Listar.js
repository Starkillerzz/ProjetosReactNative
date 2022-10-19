import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import firebase from '../configuração/firebaseConfig'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const database = firebase.firestore()

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

    function deleteContato(id){
        database.collection("contatos").doc(id).delete()
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={lista}
                renderItem={({item}) =>{ 
                    return(
                <View style={styles.containerContato}>
                    <TouchableOpacity
                    onPress={()=> deleteContato(item.id)}
                    style={styles.buttonDelete}>
                        <FontAwesome
                        name='trash'
                        size={15}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonEdit}
                    onPress={() => navigation.navigate('Editar', {contato:item})}>
                        <FontAwesome
                        name="pencil"
                        size={15}/>
                        
                    </TouchableOpacity>
                <Text
                 style={styles.itemContato}
                 >{item.nome}</Text>
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
        backgroundColor: 'skyblue',
        marginBottom: '50%',
        alignSelf: "center"
        
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
    input:{
        borderWidth: 2,
        borderColor: 'skyblue',
        width: 200,
        marginTop: 10,
        alignSelf:'center'
    },
    itemContato:{
        width: '75%',
        backgroundColor: 'silver',
        marginVertical: 3,
        borderRadius: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black'
        
    },
    containerContato:{
        width:'90%',
        flexDirection:'row',
        marginTop:5
        
    },
    buttonDelete:{
        justifyContent:"center",
        marginLeft:10,
        backgroundColor: 'red',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0
    },
    buttonEdit:{
        justifyContent:"center",
        marginLeft:10,
        backgroundColor: 'skyblue',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    container:{
        height: '100%',
        width:'100%',
        backgroundColor: '#33A4FF'
    }   


})