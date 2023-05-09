import { StyleSheet, Text, View,Dimensions,Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../styles/constants'
import { useNavigation } from '@react-navigation/native'


const {width,height} = Dimensions.get('window')


const BurgerLogoHeader = ({name,color}) => {
    const navigation = useNavigation()



  return (
    <View style={{width:width,height:120,flexDirection:'row',alignItems:'flex-end',justifyContent:'center'}}>
      <Pressable style={{position:'absolute',left:20,bottom:5}} onPress={()=>navigation.openDrawer()}>
        <Ionicons name='menu' color={color} size={40}/>
      </Pressable>
      <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:20,bottom:10,color:color}}>{name}</Text>
      
      {/* Empty text to equalize flex box */}
      <Text></Text>
    </View>
  )
}

export default BurgerLogoHeader

const styles = StyleSheet.create({})