import React , {useState,useCallback,useReducer,useEffect} from 'react'
import { View , StyleSheet , Text, Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import reducer from './reducer'
import validate from './validate'
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY_NAME = '@save_name'
const STORAGE_KEY_SURNAME = '@save_surname'
const STORAGE_KEY_EMAIL = '@save_email'
const STORAGE_KEY_PASSWORD = '@save_password'
const STORAGE_KEY_ADDRESS = '@save_address'
const STORAGE_KEY_CEL_CARACTER = '@save_cel_caracter'
const STORAGE_KEY_NUMBER = '@save_number'


const Register = ({navigation,route}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setAddress] = useState('');
    const [cel_caracter, setCaracter] = useState('');
    const [number, setNumber] = useState('');

    useEffect(() => {
        readData()
    }, [])
    
    // read data
    const readData = async () => {
        try {
            const name = await AsyncStorage.getItem(STORAGE_KEY_NAME)
            const surname = await AsyncStorage.getItem(STORAGE_KEY_SURNAME)
            const email = await AsyncStorage.getItem(STORAGE_KEY_EMAIL)
            const password = await AsyncStorage.getItem(STORAGE_KEY_PASSWORD)
            const adress = await AsyncStorage.getItem(STORAGE_KEY_ADDRESS)
            const cel_caracter = await AsyncStorage.getItem(STORAGE_KEY_CEL_CARACTER)
            const number = await AsyncStorage.getItem(STORAGE_KEY_NUMBER)
            
            if (name !== null) {
                setName(name)
            }
            if (surname !== null) {
                setSurname(surname)
            }
            if (email !== null) {
                setEmail(email)
            }
            if (password !== null) {
                setPassword(password)
            }
            if (adress !== null) {
                setAddress(adress)
            }
            if (cel_caracter !== null) {
                setCaracter(cel_caracter)
            }
            if (number !== null) {
                setNumber(number)
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
            await AsyncStorage.setItem(STORAGE_KEY_SURNAME, surname)
            setSurname(surname)
            await AsyncStorage.setItem(STORAGE_KEY_EMAIL, email)
            setEmail(email)
            await AsyncStorage.setItem(STORAGE_KEY_PASSWORD, password)
            setPassword(password)
            await AsyncStorage.setItem(STORAGE_KEY_ADDRESS, adress)
            setAddress(adress)
            await AsyncStorage.setItem(STORAGE_KEY_CEL_CARACTER, caracter)
            setCaracter(caracter)
            await AsyncStorage.setItem(STORAGE_KEY_NUMBER, number)
            setNumber(number)
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

    const [user, dispatch] = useReducer(reducer,{
        name: '',
        surname: '',
        email: '',
        password: '',
        adress: '',
        phone_prefix: '',
        phone: ''
      });

    /*const callback = useCallback(() => handleClick(user.name,user.surname,user.email,user.password,user.adress),
                                        [user.name,user.surname,user.email,user.password,user.adress]);

    handleClick = (name,surname,password,adress) => {
        console.log('Datos Register: ',name,surname,email,password,adress);
        navigation.navigate('Profile',{name,surname,email,password,adress});
        }*/

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text2}>
                    Name: 
                </Text>
                <TextInput
                    /*style={styles.input}
                    onChangeText={(text) => onChangeName(text)}
                    value={name}*/
                    style={styles.input}
                    value={user.name}
                    placeholder="Name"
                    onChangeText={name => dispatch({
                        type: 'setName', 
                        payload: name
                    })}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Surname: 
                </Text>
                <TextInput
                    /*style={styles.input}
                    onChangeText={(text) => onChangeSurname(text)}
                    value={surname}*/
                    style={styles.input}
                    value={user.surname}
                    placeholder="Surname"
                    onChangeText={surname => dispatch({
                        type: 'setSurname', 
                        payload: surname
                    })}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text3}>
                    Email: 
                </Text>
                <TextInput
                    /*style={styles.input}
                    onChangeText={(text) => onChangeEmail(text)}
                    value={email}*/
                    style={styles.input}
                    value={user.email}
                    placeholder="Email"
                    onChangeText={email => dispatch({
                        type: 'setEmail', 
                        payload: email
                    })}
                    
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>
                    Password: 
                </Text>
                <TextInput
                    /*style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={password}*/
                    secureTextEntry={true}
                    style={styles.input}
                    value={user.password}
                    placeholder="Password"
                    onChangeText={password => dispatch({
                        type: 'setPassword', 
                        payload: password
                    })}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text2}>
                    Adress: 
                </Text>
                <TextInput
                    /*style={styles.input}
                    onChangeText={(text) => onChangeAdress(text)}
                    value={adress}*/
                    style={styles.input}
                    value={user.adress}
                    placeholder="Adress"
                    onChangeText={adress => dispatch({
                        type: 'setAdress', 
                        payload: adress
                    })}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text4}>
                    Phone: 
                </Text>
              <View style={{width: 50}}>
                <TextInput
                    style={styles.caracter}
                  value={user.phone_prefix}
                  placeholder="+54"
                  keyboardType="phone-pad"
                  onChangeText={prefix => dispatch({
                    type: 'setPhonePrefix', 
                    payload: prefix
                  })}
                  error={user.phone_prefix_error}
                />
              </View>
              <View>
                <Text style={styles.text}>
                  -
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                style={styles.codeNumber}
                  value={user.phone}
                  placeholder="Area code and number"
                  keyboardType="phone-pad"
                  onChangeText={phone => dispatch({
                    type: 'setPhone', 
                    payload: phone
                  })}
                  error={user.phone_error}
                />
              </View>
            </View>
            <View style={styles.row}>
                <Text style={ styles.errorPhone}>Insert a valid number</Text>
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} 
                            //onPressIn={callback}
                            disabled={!validate(user)}
                            onPress={() => {
                                navigation.navigate('Profile',{
                                  ...route.params,
                                  ...{...user, phone: `${user.phone_prefix}${user.phone}`}
                                })
                              }}
                            >
                    <Text style={styles.textButton}>Confirm</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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
    },
    text: {
        color: "coral",
        marginTop: 28,
        marginLeft: 10,
        fontSize: 15,
    },
    text2: {
        color: "coral",
        marginTop: 28,
        marginLeft: 10,
        marginRight: 19,
        fontSize: 15,
    },
    text3: {
        color: "coral",
        marginTop: 28,
        marginLeft: 10,
        marginRight: 26,
        fontSize: 15,
    },
    text4: {
        color: "coral",
        marginTop: 28,
        marginLeft: 22,
        marginRight: 26,
        fontSize: 15,
    },
    errorPhone:{
        color: "red",
        marginTop: 10,
        fontSize: 20,
        display: "none",    
    },
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white",
      },
      caracter: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white",
      },
      codeNumber: {
        height: 40,
        width:230,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white",
      },
      button: {
        backgroundColor: 'rgba(91,183,236,0.8)',
        borderRadius: 8,
        marginTop: 40,
      },
      textButton: {
        color: "white",
        fontSize: 15,
        margin: 10,
      }
})