import { NavigationContainer } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo!</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('Listar')}
            style={styles.button}>
                <Text style={styles.buttonText}>Listar todos os contatos</Text>

            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
                <Text style={styles.buttonText}>Fazer Login</Text>

            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
                <Text style={styles.buttonText}>Registre-se</Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 5,
        borderColor: 'blue',
        borderRadius: 5,
        width: 250,
        backgroundColor: 'skyblue',
        alignSelf: "center",
        marginBottom: 10
        
        
        
    },
    container:{
        width:'100%',
        height: '100%',
        backgroundColor: '#33A4FF'
    },
    text:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'skyblue',
        marginBottom: '20%'
    
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center",
        color: 'blue'
    },
    
})    