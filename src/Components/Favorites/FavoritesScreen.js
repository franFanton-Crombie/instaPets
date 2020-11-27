import React from 'react'
import {Image,View,Text,StyleSheet,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = ({navigation,route: {params: {email, password}}}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Complete</Text>
            </View>
        </SafeAreaView>
    )
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
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