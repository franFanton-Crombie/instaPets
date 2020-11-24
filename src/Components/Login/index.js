import React , { useCallback, useState } from 'react'
import {Button,View,StyleSheet,Text,Alert,Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const Pantalla = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const callback = useCallback(() => handleClick(email,password),[email,password]);
    
    handleClick = (email,password) => {
    console.log('Se hizo click',email,password);
    navigation.navigate('Category',{email,password});
    }

    goRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Welcome!!!</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Account: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    value={email}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Password: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}
                />
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} onPressIn={callback}>
                    <Text style={styles.text}>Accept</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Dont have Account?</Text>
                <Pressable style={styles.button} onPress={goRegister}>
                    <Text style={styles.text}>Sign In</Text>
                </Pressable>
            </View>
            
        </SafeAreaView>
    )
}

export default Pantalla;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    text: {
        color: "white",
        marginTop: 28,
        marginLeft: 10,
        fontSize: 15,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
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
      button: {
        backgroundColor: 'rgba(91,183,236,0.8)',
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 10,
        
      }
})