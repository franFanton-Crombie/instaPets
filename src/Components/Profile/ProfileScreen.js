import React from 'react'
import {Image,View,Text,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = ({navigation,route: {params: {name,surname,email,password,adress,phone_prefix,phone}}}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}> Profile</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Name: </Text>
                <Text style={styles.text}>{name}</Text>
            </View><View style={styles.row}>
                <Text style={styles.text}>Surname: </Text>
                <Text style={styles.text}>{surname}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Email: </Text>
                <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Password: </Text>
                <Text style={styles.text}>{password}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Address: </Text>
                <Text style={styles.text}>{adress}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Phone: </Text>
                <Text style={styles.text}>{phone_prefix} - {phone}</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;

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
        fontSize: 25
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