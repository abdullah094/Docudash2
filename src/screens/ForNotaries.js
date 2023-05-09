import { StyleSheet, Text, View,ScrollView, ImageBackground, Dimensions, TextInput, TouchableOpacity ,Keyboard,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import BurgerLogoHeader from '../components/BurgerLogoHeader'
import Colors from '../styles/constants'


const {width,height} = Dimensions.get('window')
const ForNotaries = () => {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
   <ScrollView contentContainerStyle={{alignItems:'center',paddingBottom:100}}
   keyboardDismissMode='on-drag' enableResetScrollToCoords={false}
   keyboardShouldPersistTaps='handled'
   >
<BurgerLogoHeader color={Colors.black}/>

<ImageBackground style={{width:width,height:280,marginTop:20}} source={require('../assets/images/become-a-notary-page-banner.png')} resizeMode='cover'>
  <View style={{padding:35,paddingTop:32}}>
<Text style={{color:Colors.white,fontFamily:'Montserrat-Bold',fontSize:32,width:330,letterSpacing:0}}>
 
Request to Become a Notary
</Text>
<View style={{width:130,height:7,backgroundColor:Colors.green}}/>
</View>
</ImageBackground>

<TextInput style={styles.input} placeholder='First Name'/>
<TextInput style={styles.input} placeholder='Last Name'/>
<TextInput style={styles.input} placeholder='Email Address'/>
<TextInput style={styles.input} placeholder='Contact Number'/>
<TextInput style={styles.input} placeholder='Address Line 1'/>
<TextInput style={styles.input} placeholder='Address Line 2'/>
<TextInput style={styles.input} placeholder='City'/>
<TextInput style={styles.input} placeholder='State'/>
<TextInput style={styles.input} placeholder='Licence Number'/>

<TouchableOpacity style={{width:150,paddingVertical:10,marginTop:40,justifyContent:'center',alignItems:'center',borderWidth:2,borderColor:Colors.black}}>
  <Text style={{fontSize:20,fontFamily:'Montserrat-SemiBold'}}>Submit</Text>
</TouchableOpacity>
   </ScrollView>
   </TouchableWithoutFeedback>
  )
}

export default ForNotaries

const styles = StyleSheet.create({
  input:{
    width:"90%",
    borderBottomWidth:1,
    color:Colors.black,
    marginTop:40
    ,paddingBottom:5,
    paddingHorizontal:5,
    borderColor:Colors.black,
    fontSize:17,
    fontFamily:'Montserrat'
  }
})