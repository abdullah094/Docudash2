import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Canvas from 'react-native-canvas';

const SketchCanvas = () => {
  return (
    <View style={{flex:1}}>
   <Canvas style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />
    </View>
  )
}

export default SketchCanvas

const styles = StyleSheet.create({})