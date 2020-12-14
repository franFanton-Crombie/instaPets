import React,{useState,useCallback} from 'react';
import {Text,View,StyleSheet,TextInput,Button,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoItem from './TodoItem';
import AsyncStorage from '@react-native-community/async-storage';

const TodoComplete = () => {
    const [text,setText] = useState('');
    const [todos,setTodos] = useState([
        {text: 'TASK 1' , key: '1'},
        {text: 'TASK 2' , key: '2'},
        {text: 'TASK 3' , key: '3'}
    ]);
    {/* list = async () => {
        try{
            AsyncStorage.getItem('database_listTask').then((value) => {
                this.setState({
                    list: JSON.parse(value)
                })
            })
        }catch(err){
            console.log(err)
        }
        
    };*/}
    const list = async () => {
        try {
          const value = await AsyncStorage.getItem('database_listTask');
          console.log('Valor: ',value);
          if (value !== null) {
            // We have data!!
            
          }
        } catch (error) {
          // Error retrieving data
          console.log('CONCHA DE TU MADRE');
        }
    };

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            console.log('PREV TODOS: ',prevTodos);
            return prevTodos.filter(todo => todo.key != key);
        });
    }
    const changeHandler = (val) => {
        setText(val);
    }
    const submitHandler = (text) => {
        const arrayData = [];
        if(text){
            const data = {
                text: text
            }
            arrayData.push(data);
            /*try{
                AsyncStorage.getItem('database_listTask').then((value) => {
                    if(value !== null){
                        const d = JSON.parse(value);
                        d.push(data)
            console.log('ARRAY D: ', d);

                        AsyncStorage.setItem('database_listTask', JSON.stringify(d))
                    } else {
                        AsyncStorage.setItem('database_listTask', JSON.stringify(arrayData))
                    }
                })
            } catch(err){
                console.log(err)
            }*/
        }
        console.log('TEXT: ',text);
        setTodos((prevTodos) => {
            return [
                { text:text , key:Math.random().toString() },
                ...prevTodos
            ]
        });
    }

    const Item = useCallback(props => <TodoItem {...props} pressHandler={pressHandler} submitHandler={submitHandler} />,[]);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.title}>List of Task</Text>
            </View>
            <View>
            <TextInput
                style={styles.input}
                placeholder='new activity....'
                onChangeText={ (val) => changeHandler(val)}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral'/>
            <View style={styles.list}>
                    <FlatList 
                        //data={todos}
                        data={list}
                        renderItem={Item}
                    />
                </View>
        </View>
        </SafeAreaView>
    )
}

export default TodoComplete;

const styles = StyleSheet.create({
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
    input:{
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    inputAdd:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})