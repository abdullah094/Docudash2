import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pricing from '../screens/Pricing';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
import DrawerButton from '../components/DrawerButton';
import ForNotaries from '../screens/ForNotaries';
import ForIndividuals from '../screens/ForIndividuals';
import ForBusinesses from '../screens/ForBusinesses';
import ForTitleAgents from '../screens/ForTitleAgents';
import ForLenders from '../screens/ForLenders';
import ESignature from '../screens/ESignature';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName="Home" screenOptions={{headerShown:false}} >
         <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pricing" component={Pricing} />
        <Drawer.Screen name="DrawerButton" component={DrawerButton} />
        <Drawer.Screen name="ForNotaries" component={ForNotaries} />

        <Drawer.Screen name="ForIndividuals" component={ForIndividuals} />
        <Drawer.Screen name="ForBusinesses" component={ForBusinesses} />
        <Drawer.Screen name="ForTitleAgents" component={ForTitleAgents} />
        <Drawer.Screen name="ForLenders" component={ForLenders} />
        <Drawer.Screen name="ESignature" component={ESignature} />
      
      </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})