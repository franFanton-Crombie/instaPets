import React from 'react'
import { View , StyleSheet , Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Register</Text>
            </View>
        </SafeAreaView>
    )
}

export default Register;


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