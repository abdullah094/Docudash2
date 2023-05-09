import { StyleSheet, Text, View,Dimensions,TouchableOpacity,SafeAreaView,Platform } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../styles/constants'

const {width,height} = Dimensions.get('window')
const Header = ({header,onPress}) => {

    const myIcon = <Icon name="home" size={30} color="#900" />;
  return (
    <SafeAreaView style={{width:width,flexDirection:'row',alignItems:'center', justifyContent:'center',paddingVertical:10,marginBottom:20}}>
    
    
     <TouchableOpacity onPress={onPress} 
     style={[{width:50,height:50,justifyContent:'center',alignItems:'center',position:'absolute',left:20,},Platform.OS==='ios'&&{top:40}]}>
   <Icon name='arrowleft' size={25} color={Colors.gray} />
   </TouchableOpacity>
   <Text style={{fontFamily:'Montserrat-Bold',color:Colors.black,fontSize:20}}>{header}</Text>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})