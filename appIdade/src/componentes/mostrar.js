
import {View, Text, StyleSheet} from "react-native";

export default function InputIdade(props){
   

    return(
        <View>

            <Text style={styles.texto}>{props.resultado}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        marginTop: 10
    }
});