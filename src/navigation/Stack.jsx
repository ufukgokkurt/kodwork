 
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs';
import JobDetail from '../pages/JobDetail';

const Stack = createNativeStackNavigator();
 
export default function StackNavigator() {
  return (
 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Jobs} options={{ headerShown:false }} />
        <Stack.Screen name="Details" component={JobDetail} />
      </Stack.Navigator>
  
 
  )
}