import { StyleSheet, Text, View,ScrollView, ImageBackground, Dimensions, TextInput, TouchableOpacity ,Keyboard,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import BurgerLogoHeader from '../components/BurgerLogoHeader'
import Colors from '../styles/constants'


const {width,height} = Dimensions.get('window')
const ForIndividuals = () => {
  return (
   <ScrollView contentContainerStyle={{alignItems:'center',backgroundColor:Colors.white,flex:1}}>
    <BurgerLogoHeader/>

    <ImageBackground style={{width:width,height:250,marginTop:20}} source={require('../assets/images/case-study-banner.png')} resizeMode='cover'>
  <View style={{padding:35,paddingTop:65}}>
<Text style={{color:Colors.white,fontFamily:'Montserrat-Bold',fontSize:32,width:330,letterSpacing:0}}>
 
For Individuals
</Text>
<View style={{width:130,height:7,backgroundColor:Colors.green}}/>
</View>
</ImageBackground>

<Text style={{width:width-80,fontFamily:'Montserrat',fontSize:17,marginTop:20}}>Users can have complete digital solutions for their personal documents through fluid end-to-end services including e-sign, notarization, document tracing and document verification.</Text>
   <View style={{flexDirection:'row',marginTop:30,width:width-100,justifyContent:'space-evenly'}}>
    <TouchableOpacity 
    style={{padding:10,paddingHorizontal:20,backgroundColor:Colors.green,justifyContent:'center',alignItems:'center',borderRadius:35}}>
      <Text style={{fontFamily:'Montserrat-Bold',color:Colors.white,fontSize:20}}>Learn More</Text>
    </TouchableOpacity>
    <TouchableOpacity 
    style={{padding:10,paddingHorizontal:20,borderWidth:2,borderColor:Colors.green,justifyContent:'center',alignItems:'center',borderRadius:35}}>
      <Text style={{fontFamily:'Montserrat-Bold',color:Colors.green,fontSize:20}}>Pricing</Text>
    </TouchableOpacity>
   </View>
   
   </ScrollView>
  )
}

export default ForIndividuals

const styles = StyleSheet.create({})