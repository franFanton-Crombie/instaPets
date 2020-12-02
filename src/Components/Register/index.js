import React , {useState,useCallback,useReducer} from 'react'
import { View , StyleSheet , Text, Pressable} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import reducer from './reducer'
import validate from './validate'

const Register = ({navigation,route}) => {
    /*const [name, onChangeName] = useState('');
    const [surname, onChangeSurname] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [adress, onChangeAdress] = useState('');*/

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
            <View>
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
    title: {
        color: "coral",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginTop: 50,
        marginBottom: 30
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