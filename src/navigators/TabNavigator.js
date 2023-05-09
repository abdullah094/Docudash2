import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import TemplateScreen from '../screens/TemplateScreen';
import SignatureScreen from '../screens/SignatureScreen';
import Colors from '.././styles/constants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigation from './DrawerNavigation';
import NewHome from '../screens/NewHome';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <>
    <Tab.Navigator  initialRouteName='NewHome'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'NewHome') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search';
        }
       
        else if (route.name === 'Signatures') {
          iconName = focused ? 'document' : 'document';
        }
        else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={30} color={color} />;
      },
     tabBarHideOnKeyboard:true,
      tabBarActiveTintColor: Colors.green,
      tabBarInactiveTintColor: Colors.gray, headerShown:false, tabBarShowLabel:false, tabBarStyle: { height: 70 },
      tabBarStyle: [
        {
        position:'absolute',
        bottom:22,
        left:15,
        right:15,
        elevation:0,
        backgroundColor:Colors.white,
        borderRadius:15,
        height:70,
        borderWidth:0,
        ...styles.shadow
        },
      
      ],
    })}>
       <Tab.Screen name="NewHome" component={NewHome}
       />
    
      <Tab.Screen name="Search" component={SearchScreen} />
      {/* <Tab.Screen name="Templates" component={TemplateScreen} options={{
        
        tabBarIcon: ({focused})=>(
          <View style={[{backgroundColor:Colors.green,
          width:60,height:60,justifyContent:'center',alignItems:'center',borderRadius:30,bottom:15,borderWidth:2,borderColor:Colors.green},{backgroundColor:Colors.green}]}>
            <View style={{left:1}}>
            <Ionicons name={'videocam-outline'} size={32} color={Colors.white} />
            </View>
          </View>
        )
        
      }} /> */}
      <Tab.Screen name="Signatures" component={SignatureScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen}/>
     
      
    </Tab.Navigator>
    
    </>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  shadow:{
    shadowColor:Colors.black,
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})