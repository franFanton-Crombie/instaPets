import React , {Component} from 'react';
import { 
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    SafeAreaView,
    Pressable
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import List from './List';

export default class AsynScreen extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            subtitle: '',
            comment: ''
        }
    }
    changeTitle(title){
        this.setState({title})
    }
    changeSubtitle(subtitle){
        this.setState({subtitle})
    }
    changeComment(comment){
        this.setState({comment})
    }
    buttonPressed(){
        const arrayData = [];
        if(this.state.comment && this.state.title && this.state.subtitle){
            const data = {
                title: this.state.title,
                subtitle: this.state.subtitle,
                comment: this.state.comment
            }
            arrayData.push(data);
            try{
                AsyncStorage.getItem('database_form').then((value) => {
                    if(value !== null){
                        const d = JSON.parse(value);
                        d.push(data)
                        AsyncStorage.setItem('database_form', JSON.stringify(d)).then(() => {
                            this.props.navigator.push({
                                title: 'List of things',
                                component: List
                            })
                        })
                    } else {
                        AsyncStorage.setItem('database_form', JSON.stringify(arrayData)).then(() => {
                            this.props.navigator.push({
                                title: 'List of Things',
                                component: List
                            })
                        })
                    }
                })
            } catch(err){
                console.log(err)
            }
        }
        else{
            alert('Error!!!')
        }
    }
    goPage = () => {
        navigation.navigate('ListAsync');
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Form</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Title"
                        value={this.state.title}
                        onChangeText={(title) => this.changeTitle(title)}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Subtitle"
                        value={this.state.subtitle}
                        onChangeText={(subtitle) => this.changeSubtitle(subtitle)}
                    />
                    <TextInput 
                        multiline={true}
                        style={[styles.input , styles.textArea]}
                        placeholder="Comment"
                        value={this.state.comment}
                        onChangeText={(comment) => this.changeComment(comment)}
                    />
                    <TouchableHighlight
                     style={styles.button}
                     onPress={() => this.buttonPressed()}
                    >
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableHighlight>
                    <Pressable onPress={() => this.goPage()}>
                        <Text>Go</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 80,
        paddingLeft: 15,
        paddingRight: 15
    },
    button: {
        backgroundColor: 'skyblue',
        paddingTop: 15,
        paddingBottom: 15
    },
    textButton: {
        textAlign: 'center',
        color: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 2,
        marginBottom: 20
    },
    textArea: {
        height: 60
    }
})
