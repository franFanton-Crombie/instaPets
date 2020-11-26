import React, {useCallback, useState} from 'react'
import { StyleSheet ,FlatList, ScrollView ,View , Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoAdd from './TodoAdd';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';

function TodoForm() {
    const [todos,setTodos] = useState([
        {text: 'buy coffe' , key: '1'},
        {text: 'create a app' , key: '2'},
        {text: 'play on the swith' , key: '3'}
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key);
        });
    }

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                { text:text , key:Math.random().toString() },
                ...prevTodos
            ]
        });
    }

    const Item = useCallback(props => <TodoItem {...props} pressHandler={pressHandler} submitHandler={submitHandler} />,[]);

    return(
        <SafeAreaView style={styles.container}>
            <TodoHeader />
            <View style={styles.content}>
                <TodoAdd submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={Item}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default TodoForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    content: {
        padding: 40,
    },
    list:{
        marginTop: 20,
    },
})