import React , {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

export default class ListUser extends Component {
    constructor(){
        super()
        this.state = {
            list: ''
        }
        try{
            AsyncStorage.getItem('database_register').then((value) => {
                this.setState({
                    list: JSON.parse(value)
                })
            })
        }catch(err){
            console.log(err)
        }
    }
    parseData(){
        if(this.state.list){
            return this.state.list.map((data,i) => {
                return(
                    <View style={styles.dataList} key={i}>
                        <View style={styles.row}>
                            <Text style={styles.titleCont}>Name: </Text>
                            <Text>{data.name}  </Text>
                            <Text style={styles.titleCont}>Surname: </Text>
                            <Text>{data.surname}  </Text>
                            <Text style={styles.titleCont}>Email: </Text>
                            <Text>{data.email}</Text>
                        </View>
                    </View>
                )
            })
        }
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>{this.parseData()}</Text>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        paddingLeft: 15,
        paddingRight: 15
    },
    dataList: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection:'row'
    },
    row:{
        flexDirection:'row'
    },
    titleCont: {
        fontStyle: "italic",
        fontWeight: "bold"
    }
})