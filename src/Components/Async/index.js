import React , {Component} from 'react';
import { 
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    AlertIOS,
    SafeAreaView
} from 'react-native';



export default class Index extends Component {
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
        if(this.state.comment && this.state.title && this.state.subtitle){
            alert(this.state.title)
        }
        else{
            alert('Error!')
        }
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
                        onChangeText={(comment) => this.changeSubtitle(subtitle)}
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
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 30,
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
