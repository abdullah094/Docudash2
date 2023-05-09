import { StyleSheet, Text, View,ImageBackground,ScrollView,TouchableOpacity, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import BurgerLogoHeader from '../components/BurgerLogoHeader'
import Colors from '../styles/constants'
import Background from '../assets/images/northwest_background.jpg'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Loading from './Loading'

const Home = () => {

const [data,setData] = useState(false)
useEffect(()=>{
  setTimeout(() => {
    setData(true)
  }, 1500);
},[])

if(!data)
return(
  <Loading/>
)

  return (
    <ImageBackground style={{flex:1} } source={Background} resizeMode='cover'>
    <ScrollView contentContainerStyle={{alignItems:'center',paddingBottom:100}}
    showsVerticalScrollIndicator={false}
    stickyHeaderIndices={[0]}
    stickyHeaderHiddenOnScroll={true}
    >
    <BurgerLogoHeader color={Colors.white}/>
    <Text numberOfLines={2}
    style={{color:Colors.white,fontFamily:'Montserrat-Bold',paddingHorizontal:10,fontSize:28,textAlign:'center',marginTop:100}}>Notarize Instantly.
Anywhere. Anytime..</Text>
<Text style={{color:Colors.white,fontFamily:'Montserrat',marginTop:20,marginHorizontal:10,textAlign:'center',fontSize:17}}>Your Digital End-to-End Solution For E-Documentation</Text>

<TouchableOpacity style={{width:250,borderWidth:1,borderColor:Colors.white,justifyContent:'center',alignItems:'center',height:60,marginTop:40,flexDirection:'row'}}>
  <Text style={{color:Colors.white,fontFamily:'Montserrat-SemiBold',fontSize:15,marginRight:5}}>Dash A Document</Text>

<View style={{top:1}}>
<FontAwesome name='long-arrow-right' color={Colors.white} size={23}/>
</View>
</TouchableOpacity>


{/* Tabs */}
<View style={{width:290,height:250,backgroundColor:Colors.white,borderRadius:29,alignItems:'center',justifyContent:'center',marginTop:50}}>
  
  <View style={{paddingHorizontal:40}}>
  <Image style={{width:50,height:50}} source={require('../assets/images/post_type_1/easy.png')}/>

<Text style={{fontFamily:'Montserrat-Bold',fontSize:20,color:Colors.black,marginTop:10}}>Easily Signed then Done</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,marginTop:10}}>Simply click and notarize your documents.</Text>
</View>
</View>

<View style={{width:290,height:250,backgroundColor:Colors.white,borderRadius:29,alignItems:'center',justifyContent:'center',marginTop:10}}>
  
  <View style={{paddingHorizontal:40}}>
  <Image style={{width:50,height:50}} source={require('../assets/images/services/idea.png')}/>

<Text style={{fontFamily:'Montserrat-Bold',fontSize:20,color:Colors.black,marginTop:10}}>Faster and smarter than ever</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,marginTop:10}}>AI integrated digital documentation and notarization.</Text>
</View>
</View>


<View style={{width:290,height:250,backgroundColor:Colors.white,borderRadius:29,alignItems:'center',justifyContent:'center',marginTop:10}}>
  
  <View style={{paddingHorizontal:40}}>
  <Image style={{width:50,height:50}} source={require('../assets/images/services/idea.png')}/>

<Text style={{fontFamily:'Montserrat-Bold',fontSize:20,color:Colors.black,marginTop:10}}>Secure & Compliant</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,marginTop:10}}>Digital encryption and multi-verification step process for secure documentation.</Text>
</View>
</View>
</ScrollView>
</ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({})