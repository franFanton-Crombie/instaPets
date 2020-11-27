import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login';
import Category from './src/Components/Category';
import Profile from './src/Components/Profile';
import Colors from './src/res/colors';
import Register from './src/Components/Register';

import Todo from './src/Components/Todo/TodoScreen';
import AsyncStorageExample from '';

const Stack = createStackNavigator();
export const AppContext = React.createContext();

const App = () => {
  const [autentificacion ,setAutentificacion] = useState();
  
  return ( 
    <AsyncStorageExample />
  
  );
};

export default App;
