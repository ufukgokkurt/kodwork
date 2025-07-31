 
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from '../pages/Jobs';
import JobDetail from '../pages/JobDetail';

const Stack = createNativeStackNavigator();
 
export default function StackNavigator() {
  return (
 
      <Stack.Navigator screenOptions={{ headerTintColor:'red' }}>
        <Stack.Screen name="Jobs" component={Jobs}   />
        <Stack.Screen name="Details" component={JobDetail} />
      </Stack.Navigator>
  
 
  )
}