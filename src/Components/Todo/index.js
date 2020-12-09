import React from 'react'
import {Image,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../res/colors';
import CategoryScreen from './../Category/CategoryScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import FavoritesScreen from '../Favorites/FavoritesScreen';
import TodoScreen from './TodoScreen';

const Tabs = createBottomTabNavigator();
const Todo = ({navigation,route}) => {
    const name = route.params.name;
    const surname = route.params.surname;
    const email = route.params.email;
    const password = route.params.password;
    const adress = route.params.adress;
    console.log("DATOS PROFILE",name,surname,email,password,adress);

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
                    name="To Do"
                    component={TodoScreen}
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
                    component={ ProfileScreen }
                    initialParams={route.params}
                    options={{
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/equipo.png')}/>
                        )
                    }}
                />
                <Tabs.Screen
                    name="Complete"
                    component={ FavoritesScreen }
                    initialParams={route.params}
                    options={{
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:color , width: size , height: size}}
                            source={require('../../assets/star.png')}/>
                        )
                    }}
                />     
            </Tabs.Navigator>
    )
}
export default Profile;

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
        fontSize: 25
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