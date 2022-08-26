import { FlatList, View, Text, SafeAreaView } from "react-native";


export default function ResultadoCarro(props){
    const renderItem = ({item})=>{
    <Text>{item}</Text>
    }
    return (
    <SafeAreaView>
        <FlatList
            data={props.data}
            renderItem={({item}) => <Text>{item}</Text>}
            keyExtractor={item => item}

        />
    </SafeAreaView>
)}