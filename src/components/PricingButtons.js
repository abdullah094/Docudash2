import { StyleSheet, Text, View ,SafeAreaView,ImageBackground,ScrollView,Dimensions, Touchable, TouchableOpacity, Pressable} from 'react-native'
import React,{useState,useEffect} from 'react'
import Colors from '../styles/constants'





const {width,height} = Dimensions.get('window')

const PricingButtons = ({name,selected,color,onPress}) => {
 
  

 
  return (
    <Pressable onPress={onPress}
    style={{backgroundColor:color,paddingHorizontal:18,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',marginLeft:15}}>
    <Text
     style={{color:Colors.white,fontFamily:'Montserrat-SemiBold',fontSize:16}}>{name}</Text>
    </Pressable>
  )
}

export default PricingButtons

const styles = StyleSheet.create({})