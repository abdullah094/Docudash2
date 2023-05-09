import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,Pressable ,ScrollView,SafeAreaView} from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
import Icon from 'react-native-vector-icons/FontAwesome';


const {width,height} = Dimensions.get('window')
const Welcome = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
     <Image style={{width:320,height:320,marginVertical:20,borderRadius:20}}  
     source={require('../assets/images/Welcomemain.png')}/>
     </SafeAreaView>
     <Text style={{color:Colors.blue,fontSize:25,fontFamily:'Montserrat-SemiBold',marginVertical:10}}>Welcome to the Docudash</Text>
     <Text style={{fontFamily:'Montserrat'}}>Notarize Instantly</Text>
     <Text style={{fontFamily:'Montserrat'}}>Anywhere, Anytime</Text>
     {/* Logo */}
     <Image style={{width:310,height:85,marginVertical:10,padding:5}} 
     source={require('../assets/images/logo.png')}/>

     {/* Login Button */}
     <TouchableOpacity onPress={()=>navigation.navigate('Login')}
     style={{backgroundColor:Colors.green,width:320,height:60,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:Colors.white,fontFamily:'Montserrat-SemiBold',fontSize:20}}>LOGIN</Text>
     </TouchableOpacity>
{/* google and facebook button */}
<View style={{flexDirection:'row',width:320,marginVertical:15,alignItems:'center',justifyContent:'space-between'}}>
     <TouchableOpacity style={[styles.socialButtons,{borderColor:Colors.googleRed}]}>
     <Icon name='google' size={20} color={Colors.googleRed} />
      <Text style={{color:Colors.googleRed,marginLeft:15}}>Google</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.socialButtons,{borderColor:Colors.facebookBlue}]}>
     <Icon name='facebook' size={20} color={Colors.facebookBlue} />
      <Text style={{color:Colors.facebookBlue,marginLeft:15}}>Facebook</Text>
     </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row'}}>
     <Text style={{color:Colors.black}}>Don't have an account yet?  </Text>
     <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><Text style={{color:Colors.blue}}>Register</Text></TouchableOpacity>
     </View>
    </ScrollView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
     height:'100%',
    backgroundColor:Colors.white,
    alignItems:'center',
    paddingVertical:20,
    
  },
  socialButtons:{
    borderWidth:2,
    width:'48%',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    borderRadius:10,
    flexDirection:'row',
    backgroundColor:Colors.white
  }
})