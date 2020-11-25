import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/Components/Login';
import Category from './src/Components/Category';
import Profile from './src/Components/Profile';
import Colors from './src/res/colors';
import Register from './src/Components/Register';

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
          <Stack.Screen initialParams={{autentificacion}} name="Pantalla" component={ Login } />
          <Stack.Screen initialParams={{autentificacion}} name="Category" component={ Category }/>
          <Stack.Screen initialParams={{autentificacion}} name="Profile" component={ Profile }/>
          <Stack.Screen initialParams={{autentificacion}} name="Register" component={ Register } />
        </Stack.Navigator>    
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
