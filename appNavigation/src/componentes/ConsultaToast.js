import { useState } from "react";
import { Alert, Button, Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Toast from 'react-native-toast-message';
import { TextInputMask } from 'react-native-masked-text'

export default function ConsultaToast() {
    const [name, setName] = useState('')
    const [fone, setFone] = useState('')

    function mostraNome() {
        if (name != '') {
            Toast.show({
                type: 'success',
                text1: 'Resultado',
                text2: `Seu nome é ${name}`
            })
        } else {
            Toast.show({
                type: 'error',
                text1: 'Erro!',
                text2: 'Nenhum nome foi inserido!!!'
            })
        }
    }
    return (
        <View>
            <TextInputMask
                style={styles.input}
                placeholder="Informe telefone"
                value={fone}
                onChangeText={setFone}
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
            />
            <TextInput placeholder="insira seu nome"
                style={styles.input}
                onChangeText={setName}
                value={name}
            >

            </TextInput>

            <TouchableOpacity
                title="show"
                onPress={mostraNome}
                style={styles.button}
            >
                <Text>Toast</Text>

            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'skyblue',
        textAlign: 'center',
        borderRadius: 5,
        padding: 10,
        marginVertical: 50,
        width: 100,
        alignSelf: 'center'
    },
    input: {
        borderWidth: 2,
        borderColor: 'skyblue',
        width: 120,
        alignSelf: 'center'
    }
})
