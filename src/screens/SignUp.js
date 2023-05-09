import { StyleSheet, Text, View,ScrollView,Dimensions,TextInput,Pressable,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Colors from '../styles/constants'
import Header from '../components/resuables/Header'
import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height} = Dimensions.get('window')
const SignUp = ({navigation}) => {

  const [accept, setAccept] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.container}>
     <Header onPress={()=>navigation.goBack()} header={"SignUp"}/>

{/* form starts */}
     <View style={{width:width-40,marginVertical:5,alignItems:'center',flex:1}}>  


<View style={styles.input_box}>
  <Text style={styles.sub_heading}>Email Address</Text>
  <TextInput style={styles.text_input} placeholder='Your email address'/>
</View>
<View style={styles.input_box}>
  <Text style={styles.sub_heading}>Name</Text>
  <TextInput style={styles.text_input} placeholder='Enter your name'/>
</View>
<View style={styles.input_box}>
  <Text style={styles.sub_heading}>Password</Text>
  <TextInput style={styles.text_input} placeholder='Password'/>
</View>
<View style={styles.input_box}>
  <Text style={styles.sub_heading}>Confirm Password</Text>
  <TextInput style={styles.text_input} placeholder='Re-Type Password'/>
</View>

<View style={[styles.input_box,{flexDirection:'row',alignItems:'center'}]}>
  <Pressable  onPress={()=>setAccept(!accept)}
  style={{borderWidth:1,width:20,height:20,borderColor:Colors.green,borderRadius:5,marginHorizontal:5,justifyContent:'center',alignItems:'center'}}>
{
  accept&& <Icon name='check' size={20} color={Colors.green} />
}
  </Pressable>
  <Text style={{marginLeft:5}}>Accept terms and services</Text>
</View>
{/* sign uP button */}
<TouchableOpacity style={{backgroundColor:Colors.green,width:width-45,height:60,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
  <Text style={{color:Colors.white,fontFamily:'Montserrat-SemiBold',fontSize:20}}>Sign Up</Text>
</TouchableOpacity>
{/* OR */}
<View 
style={[styles.input_box,{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginVertical:15}]}>
<View style={styles.bar}>
</View>
<Text>Or</Text>
<View style={styles.bar}>
</View>
</View>

{/* googgle and facebook buttons */}
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




     </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white,
    alignItems:'center'
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
    height:50,
    marginTop:10
  },
  input_box:{marginTop:15,
  width:'100%'
  },
  bar:{width:'40%',borderWidth:1,height:1,borderColor:Colors.gray},
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