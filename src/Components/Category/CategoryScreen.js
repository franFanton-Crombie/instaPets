import React ,{useState,useCallback} from 'react'
import {Image,View,Text,StyleSheet,TextInput,Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryScreen = ({navigation,route: {params: {email, password}}}) => {
    const [title, onChangeTitle] = useState('');
    const [description, onChangeDescription] = useState('');
    const callback = useCallback(() => handleClick(title,description),[title,description]);

    handleClick = (title,description) => {
        
        console.log('Datos nueva task: ',title,description);
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> Task To Do</Text>
            <View>
                <Text>TABLE OF TASK</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text1}>Title: </Text>
                <TextInput
                    style={styles.inputTitle}
                    onChangeText={(text) => onChangeTitle(text)}
                    value={title}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Description: </Text>
                <TextInput
                    style={styles.inputDescription}
                    onChangeText={(text) => onChangeDescription(text)}
                    value={description}
                    multiline
                />
            </View>
            <View style={styles.row}>
                <Pressable style={styles.button} onPressIn={callback}>
                    <Text style={styles.textButton}>Save</Text>
                </Pressable>
            </View>
        </ScrollView>
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
    text1: {
        color: "white",
        marginTop: 28,
        marginLeft: 10,
        fontSize: 15,
        marginRight: 45
    },
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    inputTitle: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white"
      },
      inputDescription: {
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 8,
        backgroundColor: "white",
        maxHeight: 100,
        height: 100
      },
      button: {
        backgroundColor: 'rgba(91,183,236,0.8)',
        borderRadius: 8,
        justifyContent: "center",
        marginTop: 10,
        
      },
      textButton: {
        color: "white",
        fontSize: 15,
        margin: 10,
    }
})