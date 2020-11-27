import React, { useContext } from 'react'
import {Image,StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Profile';
import Colors from '../../res/colors';
import CategoryScreen from './CategoryScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import FavoritesScreen from '../Favorites/FavoritesScreen';
import { AppContext } from '../../../App';
import TodoScreen from '../Todo/TodoScreen';

const Tabs = createBottomTabNavigator();
const Category = ({navigation,route}) => {
    const {autentificacion} = useContext(AppContext);
    const user = route.params.email;
    const password = route.params.password;
    console.log("DATOS CATEGORY",user,password);
    return (
        <Tabs.Navigator
                tabBarOptions={{
                    tintColor: "#fefefe",
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                    style: {
                        backgroundColor: 'coral',
                    }
                }
            }>
                <Tabs.Screen
                    name="To Do"
                    backgroundColor='white'
                    component={TodoScreen}
                    initialParams={route.params}
                    options={{
                        tabBarVisible: true,
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:'white' , width: size , height: size}}
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
                            style={{tintColor:'white' , width: size , height: size}}
                            source={require('../../assets/dinero.png')}/>
                        )
                    }}
                />
                { autentificacion &&
                    <Tabs.Screen
                        name="Profile"
                        component={ ProfileScreen }
                        initialParams={route.params}
                        options={{
                            tabBarIcon: ({ size , color }) => (
                            <Image 
                                style={{tintColor:'white' , width: size , height: size}}
                                source={require('../../assets/equipo.png')}/>
                            )
                        }}
                    />
                }
                <Tabs.Screen
                    name="Complete"
                    component={ FavoritesScreen }
                    initialParams={route.params}
                    options={{
                        tabBarIcon: ({ size , color }) => (
                        <Image 
                            style={{tintColor:'white' , width: size , height: size}}
                            source={require('../../assets/star.png')}/>
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