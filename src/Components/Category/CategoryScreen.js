import React from 'react'
import {Image,View,Text,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryScreen = ({navigation,route: {params: {email, password}}}) => {
    console.log("DATOS SIN LOGIN",email);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Task To Do</Text>
        </SafeAreaView>
    )
}
export default CategoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 40,
        marginTop: 50,
        marginBottom:30
    },
    text: {
        color: "white",
        marginTop: 28,
        marginLeft: 10,
        fontSize: 15,
    },
    row: {
        flexDirection: "row"
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white"
      },
})