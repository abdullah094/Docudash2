import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Colors from '../styles/constants'
import { useNavigation } from '@react-navigation/native'


const DrawerButton = ({color,onPress,text,selected}) => {
  
 const [selectedState,setSelectedState] = useState("Home")

const selectedColorFunc = () => {
    
    const green = Colors.green
    const darkgreen = Colors.darkgreen
    return green

}
  return (
    <TouchableOpacity style={[styles.tab_button]}
     onPress={onPress}>
    <Text style={styles.tab_button_text}>{text}</Text>

  </TouchableOpacity>
  )
}

export default DrawerButton

const styles = StyleSheet.create({
    tab_button:{width:'100%',flexDirection:'row',height:50,alignItems:'center',justifyContent:'space-between'},
    tab_button_text:{marginLeft:15,fontFamily:'Montserrat-SemiBold',fontSize:18,color:Colors.white},
    tab_button_arrow:{marginRight:15},
     tab_expanded_button_text:{marginLeft:30,fontFamily:'Montserrat',fontSize:16,color:Colors.black},
})