import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
import { useToast } from "react-native-toast-notifications";


const SettingsScreen = () => {


  const toast = useToast();
  const Toast = () =>{
  }
  return (
    <View style={{flex:1,backgroundColor:Colors.white}}>
      <Text style={{fontFamily:'Montserrat-Bold',color:Colors.black,fontSize:30,margin:20,marginTop:50,borderBottomWidth:1,borderColor:Colors.green}}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={Toast}>
        <Text style={styles.button_text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Files</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Billing</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.button_text,{color:'red'}]}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({

  button:{
    // backgroundColor:'blue',
    height:60,
    justifyContent:'center',
    paddingHorizontal:20
  },
  button_text:{
    fontFamily:'Montserrat-SemiBold',
    fontSize:20,
    color:Colors.black
  }
})