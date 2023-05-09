import { StyleSheet, Text, View ,SafeAreaView,ImageBackground,ScrollView,Dimensions, Touchable, TouchableOpacity, Pressable, Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import BurgerLogoHeader from '../components/BurgerLogoHeader'
import Background from '../assets/images/pricing-page-banner.png'
import Colors from '../styles/constants'
import PricingButtons from '../components/PricingButtons'
import Icon from 'react-native-vector-icons/FontAwesome';


const {width,height} = Dimensions.get('window')
const Pricing = () => {

  const [data,setData] = useState(false)
  useEffect(()=>{
setTimeout(() => {
  setData(true)
}, 1500);
  },[])

  if(!data)
  return (
   <Loading/>
  )
  return(
    <ScrollView contentContainerStyle={{paddingBottom:50}}>
    <BurgerLogoHeader name={"Pricing"} color={Colors.black}/>
    <ImageBackground style={{height:250,zIndex:999,width:width,marginTop:30}} source={Background} resizeMode='cover'>
    <View style={{padding:30,paddingTop:40}}>
<Text style={{fontFamily:'Montserrat-Bold',color:Colors.gray,fontSize:30}}>OUR <Text style={{color:Colors.black,letterSpacing:1}}>PRICING</Text></Text>
<View style={{width:70,height:5,backgroundColor:Colors.green}}/>
</View>
   </ImageBackground>
{/* Buttons */}
<ScrollView horizontal contentContainerStyle={{marginTop:30}} showsHorizontalScrollIndicator={false}>
<PricingButtons name={"For Individuals"} selected={"For Individuals"} color={Colors.green}/>
<PricingButtons name={"For Businsses"} selected={"For Businesses"} color={Colors.blue}/>
<PricingButtons name={"For Title Agents"} selected={"For Title Agents"} color={Colors.blue}/>
<PricingButtons name={"For Lenders"} selected={"For Lenders"} color={Colors.blue}/>
</ScrollView>
{/* <View style={{position:'absolute',zIndex:999,fontSize:20,left:320,bottom:300}}>
    <Icon name='arrow-right' size={40} color={Colors.gray} />
    </View> */}
   <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginVertical:30,paddingVertical:10,alignItems:'center'}}>
   
    {/* 1st */}
<View style={{width:width-60,height:500,marginLeft:20,alignItems:'center',backgroundColor:Colors.white,borderRadius:20,justifyContent:'space-evenly'}}>
<Text style={{color:Colors.green,fontFamily:'Montserrat-Bold',fontSize:25,}}>Bronze</Text>
<View style={{flexDirection:'row',alignItems:'flex-end'}}>
<Text style={{fontFamily:'Montserrat-Bold',fontSize:25,color:Colors.black}}>$19</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,color:Colors.gray}}>/mon</Text>
</View>
<Image style={{width:200,height:200}} source={require('../assets/images/pricing/pricing-starter.png')}/>
<View>
{/* 1 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document send and collection</Text>
</View>
{/* 2 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Video meeting with docudash</Text>
</View>
{/* 3 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document upload and signing</Text>
</View>
</View>
{/* button */}
<TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,padding:5,borderWidth:1,borderColor:Colors.gray,borderRadius:10}}>
  <Text style={{fontFamily:'Montserrat',fontSize:17}}>Buy Now</Text>
</TouchableOpacity>
</View>
{/* 2nd */}
<View style={{width:width-60,height:500,marginLeft:20,alignItems:'center',backgroundColor:Colors.white,borderRadius:20,justifyContent:'space-evenly'}}>
<Text style={{color:Colors.green,fontFamily:'Montserrat-Bold',fontSize:25,}}>Gold</Text>
<View style={{flexDirection:'row',alignItems:'flex-end'}}>
<Text style={{fontFamily:'Montserrat-Bold',fontSize:25,color:Colors.black}}>$29</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,color:Colors.gray}}>/mon</Text>
</View>
<Image style={{width:250,height:200}} source={require('../assets/images/pricing/pricing-business.png')}/>
<View>
{/* 1 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document send and collection</Text>
</View>
{/* 2 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Video meeting with docudash</Text>
</View>
{/* 3 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document upload and signing</Text>
</View>
</View>
{/* button */}
<TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,padding:5,borderWidth:1,borderColor:Colors.gray,borderRadius:10}}>
  <Text style={{fontFamily:'Montserrat',fontSize:17}}>Buy Now</Text>
</TouchableOpacity>
</View>
{/* 3rd */}
<View style={{width:width-60,height:500,marginLeft:30,alignItems:'center',backgroundColor:Colors.white,borderRadius:20,justifyContent:'space-evenly',marginHorizontal:20}}>
<Text style={{color:Colors.green,fontFamily:'Montserrat-Bold',fontSize:25,}}>Platinum</Text>
<View style={{flexDirection:'row',alignItems:'flex-end'}}>
<Text style={{fontFamily:'Montserrat-Bold',fontSize:25,color:Colors.black}}>$49</Text>
<Text style={{fontFamily:'Montserrat',fontSize:15,color:Colors.gray}}>/mon</Text>
</View>
<Image style={{width:250,height:200}} source={require('../assets/images/pricing/pricing-ultimate.png')}/>
<View>
{/* 1 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document send and collection</Text>
</View>
{/* 2 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Video meeting with docudash</Text>
</View>
{/* 3 */}
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='check' size={20} color={Colors.green} />
<Text style={{marginLeft:5,fontFamily:'Montserrat'}}>Document upload and signing</Text>
</View>
</View>
{/* button */}
<TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,padding:5,borderWidth:1,borderColor:Colors.gray,borderRadius:10}}>
  <Text style={{fontFamily:'Montserrat',fontSize:17}}>Buy Now</Text>
</TouchableOpacity>
</View>
   </ScrollView>
   </ScrollView>
  )
}

export default Pricing

const styles = StyleSheet.create({})