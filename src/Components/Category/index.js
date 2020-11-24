import React from 'react'
import {Image,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from './CategoryScreen';
import Profile from '../Profile';
import Colors from '../../res/colors';

const Tabs = createBottomTabNavigator();
const Category = ({navigation,route}) => {
    const user = route.params.email;
    const password = route.params.password;
    console.log("DATOS CATEGORY",user,password);
    return (
        <Tabs.Navigator
                tabBarOptions={{
                    tintColor: "#fefefe",
                    style: {
                        backgroundColor: Colors.blackPearl
                    }
                }
            }>
                <Tabs.Screen
                    name="Category"
                    component={CategoryScreen}
                    initialParams={route.params}
                    options={{
                        tabBarVisible: true,
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/dinero.png')}/>
                        )
                    }}
                />
                <Tabs.Screen
                    name="Profile"
                    component={ Profile }
                    options={{
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/equipo.png')}/>
                        )
                    }}
                />     
            </Tabs.Navigator>
        
        
    )
}

export default Category;

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