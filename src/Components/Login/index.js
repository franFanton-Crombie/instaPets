import React , { useCallback, useContext, useState, useEffect } from 'react'
import {Button,View,StyleSheet,Text,Alert,Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppContext } from '../../../App';
import AsyncStorage from '@react-native-community/async-storage';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';

const STORAGE_KEY_EMAIL = '@save_email'
const STORAGE_KEY_PASSWORD = '@save_password'

const Pantalla = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {autentificacion, setAutentificacion} = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState('');
    const callback = useCallback(() => handleClick(email,password),[email,password]);

    // LOGING GOOGLE
    // Somewhere in your code
signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({ isLoginScreenPresented: !isSignedIn });
  };
  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({ currentUser });
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      console.log('deleted');
    } catch (error) {
      console.error(error);
    }
  };
    // FIN LOGIN GOOGLE

    useEffect(() => {
        readData()
    }, [])
    
    // read data
    const readData = async () => {
        try {
            const email = await AsyncStorage.getItem(STORAGE_KEY_EMAIL)
            const password = await AsyncStorage.getItem(STORAGE_KEY_PASSWORD)
            if (email !== null) {
                setEmail(email)
            }
            if (password !== null) {
                setPassword(password)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    
    // save data
    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY_EMAIL, email)
            setEmail(email)
            await AsyncStorage.setItem(STORAGE_KEY_PASSWORD, password)
            setEmail(password)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }
    
    const clearStorage = async () => {
        try {
        await AsyncStorage.clear()
        alert('Storage successfully cleared!')
        } catch (e) {
        alert('Failed to clear the async storage.')
        }
    }

    const onChangeEmail = email => setEmail(email)
    const onChangePassword = password => setPassword(password)
    
    handleClick = (email,password) => {
        setAutentificacion(true)
        console.log('Se hizo click',email,password);
        if (!email) return
        saveData(email)
        setEmail('')
        navigation.navigate('Category',{email, password, autentificacion: true});
    }

    goRegister = () => {
        setAutentificacion(true);
        navigation.navigate('Register',{autentificacion: true});
    }

    goPage = () => {
        setAutentificacion(false);
        navigation.navigate('Category',{email: "user",autentificacion: false});
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
                    //onChangeText={(text) => onChangeEmail(text)}
                    placeholder="Insert Email"
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Password: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insert Password"
                    onChangeText={onChangePassword}
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
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress} />
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