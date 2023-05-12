import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity,FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '../styles/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TemplateBox from '../components/TemplateBox'
const {width,height} = Dimensions.get('window')
const SignatureScreen = ({navigation}) => {

  const data = [
    {
      id:0,
      name:'Sales Agreemnet v, 1',
      image: require('../assets/images/doumentImage.png')
    },
    {
      id:1,
      name:'Sales Agreemnet v, 2',
      image: require('../assets/images/doumentImage.png')
    },
    {
      id:2,
      name:'Sales Agreemnet v, 3',
      image: require('../assets/images/doumentImage.png')
    },
    {
      id:3,
      name:'Sales Agreemnet v, 4',
      image: require('../assets/images/doumentImage.png')
    },
    {
      id:4,
      name:'Sales Agreemnet v, 5',
      image: require('../assets/images/doumentImage.png')
    },
   

  ]

  const Header = () => (
    <View style={{height:100,width:width,backgroundColor:Colors.white,flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between'}}>
    <Text style={{fontFamily:'Montserrat-Bold',fontSize:25,color:Colors.black,marginLeft:10,margin:10}}>My Templates</Text>
    <TouchableOpacity style={{padding:5,marginRight:10,margin:5}}>
<Ionicons name='document-text-outline' size={30} color={Colors.black}/>
    </TouchableOpacity>
  </View>
  )
  return (
   
     

      <FlatList
      contentContainerStyle={{paddingBottom:100,width:width,alignItems:'center'}}
      ListHeaderComponent={Header}
      data={data}
      keyExtractor={(item)=>item.id}
      numColumns={2}
      renderItem={({item})=>(
       <TemplateBox name={item.name} image={item.image}/>
      )}
      />

  )
}

export default SignatureScreen

const styles = StyleSheet.create({})