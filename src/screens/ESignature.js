import { StyleSheet, Text, View,ScrollView, ImageBackground, Dimensions, TextInput, TouchableOpacity ,Keyboard,TouchableWithoutFeedback, Image} from 'react-native'
import React from 'react'
import BurgerLogoHeader from '../components/BurgerLogoHeader'
import Colors from '../styles/constants'


const {width,height} = Dimensions.get('window')

const ESignature = () => {
  return (
    <ScrollView contentContainerStyle={{alignItems:'center',backgroundColor:Colors.white,paddingBottom:100}}>
    <BurgerLogoHeader/>

    <ImageBackground style={{width:width,height:220,marginTop:20}} source={require('../assets/images/blog-page-banner.png')} resizeMode='cover'>
  <View style={{padding:35,paddingTop:65}}>
<Text style={{color:Colors.white,fontFamily:'Montserrat-Bold',fontSize:32,width:330,letterSpacing:0}}>
 
Your Smart E-Signature
</Text>
<View style={{width:130,height:7,backgroundColor:Colors.green}}/>
</View>
</ImageBackground>

<Text style={{width:width-80,fontFamily:'Montserrat',fontSize:17,marginTop:20}}>Optimize your document workflow with the top-rated electronic signature solution for digital document sending and signing</Text>
   <View style={{flexDirection:'row',marginTop:30,width:width-50,justifyContent:'space-evenly'}}>
    <TouchableOpacity 
    style={{padding:10,paddingHorizontal:20,backgroundColor:Colors.green,justifyContent:'center',alignItems:'center',borderRadius:35}}>
      <Text style={{fontFamily:'Montserrat-Bold',color:Colors.white,fontSize:20}}>Learn More</Text>
    </TouchableOpacity>
   
   </View>
   <Text style={{marginTop:25,fontFamily:'Montserrat-Bold',fontSize:22}}>Explore Options And Pricing</Text>
{/* 1st */}
   <TouchableOpacity style={{borderWidth:2,borderColor:Colors.green,borderRadius:20,justifyContent:'center',alignItems:'center',width:250,height:200,marginTop:20}}>
    <Image style={{width:100,height:100}} source={require('../assets/images/products/admin-api-icon.png')}/>
   <Text style={{marginTop:5,fontFamily:'Montserrat',fontSize:16}}>Takes Just A Moment</Text>
    </TouchableOpacity>
    {/* 2nd */}
    <TouchableOpacity style={{borderWidth:2,borderColor:Colors.green,borderRadius:20,justifyContent:'center',alignItems:'center',width:250,height:200,marginTop:20}}>
    <Image style={{width:100,height:100}} source={require('../assets/images/products/esign-lender-icon.png')}/>
   <Text style={{marginTop:5,fontFamily:'Montserrat',fontSize:16}}>A Lot of $$$ Saved</Text>
    </TouchableOpacity>
    {/* 3rd */}
    <TouchableOpacity style={{borderWidth:2,borderColor:Colors.green,borderRadius:20,justifyContent:'center',alignItems:'center',width:250,height:200,marginTop:20}}>
    <Image style={{width:100,height:100}} source={require('../assets/images/products/esign-title-agents-icon.png')}/>
   <Text style={{marginTop:5,fontFamily:'Montserrat',fontSize:16}}>Reliable</Text>
    </TouchableOpacity>
    {/* 4th */}
    <TouchableOpacity style={{borderWidth:2,borderColor:Colors.green,borderRadius:20,justifyContent:'center',alignItems:'center',width:250,height:200,marginTop:20}}>
    <Image style={{width:100,height:100}} source={require('../assets/images/products/notary-icon.png')}/>
   <Text style={{marginTop:5,fontFamily:'Montserrat',fontSize:16}}>Rising</Text>
    </TouchableOpacity>
   </ScrollView>
  )
}

export default ESignature

const styles = StyleSheet.create({})