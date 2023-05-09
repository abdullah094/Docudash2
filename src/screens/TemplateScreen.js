import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
const TemplateScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:Colors.black,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontFamily:'Montserrat-Bold',color:Colors.white,fontSize:30,width:'85%',textAlign:'center',letterSpacing:1}}>Video calling and chat features are currently in Production</Text>
    </View>
  )
}

export default TemplateScreen

const styles = StyleSheet.create({})