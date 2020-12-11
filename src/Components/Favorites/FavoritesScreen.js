import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TouchableOpacity} from 'react-native';
import HomeScreen from './HomeScreen';

const FavoritesScreen = ({navigation,route: {params: {email, password}}}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Search Person</Text>
            </View>
            <HomeScreen />
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