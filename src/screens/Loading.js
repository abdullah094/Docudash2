import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
const Loading = () => {
  return (
    <View style={{flex:1,backgroundColor:Colors.green,alignItems:'center',justifyContent:'center'}}>
       <WaveIndicator color='white' size={150}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})