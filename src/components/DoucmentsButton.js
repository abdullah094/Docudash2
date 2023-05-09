import { StyleSheet, Text, View, Dimensions,Pressable,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Colors from '../styles/constants'
import AntDesign from'react-native-vector-icons/AntDesign'
import DocumentPicker from 'react-native-document-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux'
import { addItem } from '../Redux/Slices'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const {width,height} = Dimensions.get('window')

const DoucmentsButton = ({name}) => {

   const [select,setSelect] =  useState(false)
  return (
    <TouchableOpacity onPress={()=>setSelect(!select)} style={[{width:155,height:120,justifyContent:'center',alignItems:'center',marginHorizontal:20,borderRadius:20,marginTop:15,padding:5},select?{backgroundColor:'#F5F5F5',borderWidth:1,borderColor:Colors.green}:{backgroundColor:Colors.white,borderWidth:0}]}>
        <Ionicons name='document-text-outline' size={35} color={Colors.gray}/>
    <Text style={{color:'gray'}} numberOfLines={3}>{name}</Text>
    </TouchableOpacity>
  )
}

export default DoucmentsButton

const styles = StyleSheet.create({})