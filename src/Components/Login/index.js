import React , { useCallback, useContext, useState } from 'react'
import {Button,View,StyleSheet,Text,Alert,Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppContext } from '../../../App';

const Pantalla = ({ navigation ,route }) => {
    const [email, onChangeEmail] = useState('');
    const {autentificacion, setAutentificacion} = useContext(AppContext);
    const [password, onChangePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const callback = useCallback(() => handleClick(email,password),[email,password]);
    
    handleClick = (email,password) => {
        setAutentificacion(true)
        console.log('Se hizo click',email,password);
        navigation.navigate('Category',{email, password, autentificacion: true});
    }

    goRegister = () => {
        setAutentificacion(true);
        navigation.navigate('Register',{autentificacion: true});
    }

    goPage = () => {
        setAutentificacion(false);
        navigation.navigate('Category',{email: "traidor",autentificacion: false});
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
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} onPressIn={callback}>
                    <Text style={styles.textButton}>Accept</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Text style={styles.text2}>Dont have Account?</Text>
                <Pressable style={styles.button2} onPress={goRegister}>
                    <Text style={styles.textButton}>Sign In</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Login without account</Text>
                <Pressable style={styles.button3} onPress={goPage}>
                    <Text style={styles.textButton}>Go</Text>
                </Pressable>
            </View>
            
        </SafeAreaView>
    )
}

export default Pantalla;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        color: "coral",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginTop: 250,
    },
    text: {
        color: "coral",
        marginTop: 28,
        marginLeft: 10,
        fontSize: 15,
    },
    text2: {
        color: "coral",
        marginTop: 60,
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
        borderColor: 'coral',
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
        marginTop: 30,
        
      },
      button2: {
        backgroundColor: '#BCE197',
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 50,
        marginLeft: 20
        
      },
      button3: {
        backgroundColor: '#FF2929',
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 20
        
      },
      textButton: {
        color: "white",
        fontSize: 15,
        margin: 10,
    }
})