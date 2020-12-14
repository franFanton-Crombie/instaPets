import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login';
import Category from './src/Components/Category';
import Profile from './src/Components/Profile';
import Colors from './src/res/colors';
import Register from './src/Components/Register';
import Todo from './src/Components/Todo/TodoScreen';
import Async from './src/Components/Async/AsynScreen';
import ListAsync from './src/Components/Async/List';
import ListUser from './src/Components/Register/ListUserScreen';
import FavoritesScreen from './src/Components/Favorites/FavoritesScreen';
import TodoComplete from './src/Components/Todo/TodoComplete';
const Stack = createStackNavigator();
export const AppContext = React.createContext();

const App = () => {
  const [autentificacion ,setAutentificacion] = useState();
  
  return (
    <AppContext.Provider value={{autentificacion, setAutentificacion}}>
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
          <Stack.Screen initialParams={{autentificacion}} name="TodoComplete" component={ TodoComplete } />
          <Stack.Screen initialParams={{autentificacion}} name="Pantalla" component={ Login } />
          <Stack.Screen initialParams={{autentificacion}} name="ListUser" component={ ListUser } />
          <Stack.Screen initialParams={{autentificacion}} name="Register" component={ Register } />        
          <Stack.Screen initialParams={{autentificacion}} name="FavoritesScreen" component={ FavoritesScreen } />
          <Stack.Screen initialParams={{autentificacion}} name="ListAsync" component={ ListAsync } />
          <Stack.Screen initialParams={{autentificacion}} name="Async" component={ Async } />
          <Stack.Screen initialParams={{autentificacion}} name="Todo" component={ Todo } />
          <Stack.Screen initialParams={{autentificacion}} name="Category" component={ Category }/>
          <Stack.Screen initialParams={{autentificacion}} name="Profile" component={ Profile }/>
        </Stack.Navigator>    
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
