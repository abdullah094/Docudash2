import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Pressable,Image,Dimensions, TextInput,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Header from '../components/resuables/Header'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '.././styles/constants'


const {width,height} = Dimensions.get('window')
const Login = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Header header={"Login"} onPress={()=>navigation.goBack()}/>

    <Image style={{width:320,height:87,marginVertical:10,padding:5,marginTop:100}} 
     source={require('../assets/images/logo.png')}/>
{/* form */}
     <KeyboardAvoidingView 
   
     behavior="padding"
     style={{width:width-40,alignItems:'center'}}>


<View style={styles.input_box}>
    <Text style={styles.sub_heading}>Email</Text>
    <TextInput style={styles.text_input} placeholder='Enter your Email'/>
</View>

<View style={styles.input_box}>
    <Text style={styles.sub_heading}>Password</Text>
    <TextInput style={styles.text_input} placeholder='Enter Password' secureTextEntry={true}/>
</View>
{/* Login Button */}
<TouchableOpacity onPress={()=>navigation.navigate('TabNavigator')}
 style={{backgroundColor:Colors.green,width:width-45,height:60,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
  <Text style={{color:Colors.white,fontFamily:'Montserrat-SemiBold',fontSize:20}}>Login</Text>
</TouchableOpacity>

{/* Social buttons */}
<View style={{flexDirection:'row',width:'90%',marginVertical:15,alignItems:'center',justifyContent:'space-between'}}>
     <TouchableOpacity style={[styles.socialButtons,{borderColor:Colors.googleRed}]}>
     <Icon name='google' size={20} color={Colors.googleRed} />
      <Text style={{color:Colors.googleRed,marginLeft:15}}>Google</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.socialButtons,{borderColor:Colors.facebookBlue}]}>
     <Icon name='facebook' size={20} color={Colors.facebookBlue} />
      <Text style={{color:Colors.facebookBlue,marginLeft:15}}>Facebook</Text>
     </TouchableOpacity>
     </View>
     </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:Colors.white
    },
    sub_heading:{
        fontFamily:'Montserrat-SemiBold',
        color:Colors.black,
        fontSize:15,
        marginLeft:1
          },
          text_input:{
            borderWidth:1,
            borderRadius:10,
            borderColor:Colors.gray,
            marginVertical:5,
            padding:5,
            paddingHorizontal:10,
            width:'100%',
            height:50
          },
          input_box:{marginTop:15,
          width:'100%'
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