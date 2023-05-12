import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import ESignature2 from '../screens/ESignature2';
import Schedule from '../screens/Schedule';
import ScheduleForm from '../screens/ScheduleForm';


const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Schedule" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
    <Stack.Screen name="ESignature2" component={ESignature2} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Schedule" component={Schedule} />
    <Stack.Screen name="ScheduleForm" component={ScheduleForm} />
    
    {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
  </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})