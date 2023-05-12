import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width,height} = Dimensions.get('window')

const TemplateBox = ({name,image,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}
        style={{backgroundColor:Colors.white,width:180,height:230,justifyContent:'center',alignItems:'center',margin:10,borderRadius:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,
elevation: 5,
        }}>
            
          <Image style={{width:100,height:100}} source={image}/>
          <Text style={{fontFamily:'Montserrat-SemiBold',width:'80%',textAlign:'center',marginTop:5,color:'gray'}}>{name}</Text>
          </TouchableOpacity> 
  )
}

export default TemplateBox

const styles = StyleSheet.create({})