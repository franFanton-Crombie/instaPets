import React ,{useState,useCallback} from 'react'
import {Image,View,Text,StyleSheet,TextInput,Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListUserScreen from '../Register/ListUserScreen';
const CategoryScreen = ({navigation,route: {params: {email, password}}}) => {
    const [title, onChangeTitle] = useState('');
    const [description, onChangeDescription] = useState('');
    const callback = useCallback(() => handleClick(title,description),[title,description]);

    handleClick = (title,description) => {
        
        console.log('Datos nueva task: ',title,description);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Categories</Text>
            </View>
            <Text style={styles.title2}>List of Person</Text>
            <ListUserScreen />
        </SafeAreaView>
    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title2: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: "center",
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})