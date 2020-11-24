import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login';
import Category from './src/Components/Category';
import Profile from './src/Components/Profile';
import Colors from './src/res/colors';
import Register from './src/Components/Register';

const Stack = createStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
              backgroundColor: Colors.blackPearl,
              shadowColor: Colors.blackPearl,
          },
          headerTintColor: Colors.white,
          headerShown: false
        }}>
          <Stack.Screen name="Pantalla" component={ Login }/>
          <Stack.Screen name="Category" component={ Category }/>
          <Stack.Screen name="Profile" component={ Profile }/>
          <Stack.Screen name="Register" component={ Register } />
        </Stack.Navigator>    
      </NavigationContainer>
  );
};

export default App;
