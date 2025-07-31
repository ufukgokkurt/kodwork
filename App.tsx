 

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar, useColorScheme } from 'react-native';
import StackNavigator from './src/navigation/Stack';
import FavoriteJob from './src/pages/FavoriteJob';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

const Drawer = createDrawerNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Drawer.Navigator screenOptions={{ headerShown:false}}>
        <Drawer.Screen name="Jobs" component={StackNavigator} />
        <Drawer.Screen name='Favorite' component={FavoriteJob}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
