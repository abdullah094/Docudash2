import { StyleSheet, Text, View, Dimensions,Pressable,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Colors from '../styles/constants'
import AntDesign from'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import DocumentPicker from 'react-native-document-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector,useDispatch } from 'react-redux'
import { addItem } from '../Redux/Slices'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import DoucmentsButton from '../components/DoucmentsButton'

const {width,height} = Dimensions.get('window')
const NewHome = ({navigation}) => {

    const documents = useSelector((state)=>state.todo.docs)
    const [data, setData] = useState()
    const [itemsSelected,setItemsSelected] = useState(0)
    const dispatch = useDispatch()
   
   const length = documents.length
  const ThreeDots = <Entypo name='dots-three-vertical' color={Colors.white} size={28}/>
    const handlePicker = async() => {
try{
    const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.docx,DocumentPicker.types.pdf,DocumentPicker.types.doc,DocumentPicker.types.images],
      });

      dispatch(addItem(res))
}
catch (err){
console.log("err")
}
    }


  return (
   <>
   {/* header */}
     <View style={{height:100,width:width,borderBottomWidth:0,borderColor:Colors.gray,backgroundColor:Colors.green,alignItems:'flex-end',justifyContent:'space-between',flexDirection:'row'}}>
        <Text style={{fontFamily:'Montserrat-SemiBold',color:Colors.white,fontSize:25,margin:10}}>Documents</Text>
       <View style={{flexDirection:'row'}}>
        <Pressable style={{padding:10}} onPress={handlePicker}>
<AntDesign name='plus' size={30} color={Colors.white}/>
        </Pressable>
        <Menu style={{padding:10,paddingRight:15}}>
      <MenuTrigger text={ThreeDots} />
      <MenuOptions>
      <MenuOption onSelect={() => alert(`Feature coming soon`)} >
          <Text style={styles.menu_text}>Open</Text>
        </MenuOption>
      <MenuOption onSelect={() => alert(`Feature coming soon`)} >
          <Text style={styles.menu_text}>Notarize</Text>
        </MenuOption>
        <MenuOption onSelect={() => navigation.navigate('ESignature2')} >
          <Text style={styles.menu_text}>E-Signature</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Feature coming soon`)} >
          <Text style={[styles.menu_text,{color: 'red'}]}>Delete</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
        </View>
        </View>
       <View style={{flex:1,justifyContent:'center',backgroundColor:Colors.white,alignItems:'center'}}>
          {
          
          length>0?
<FlatList
data={documents}
contentContainerStyle={{alignItems:'flex-start',width:width-30}}
numColumns={2}
renderItem={({item})=>(
    <>
    <DoucmentsButton name={item.name}/>
     
     </>
)}
/>


:
                    <Pressable style={{alignItems:'center'}} onPress={handlePicker}>
<AntDesign name='pluscircleo' size={50} color={Colors.gray}/>
<Text style={{marginTop:10,fontFamily:'Montserrat-SemiBold',color:Colors.gray,fontSize:16}}>Add a document</Text>
</Pressable>
          

}

        </View>
        

        </>
  )
}

export default NewHome

const styles = StyleSheet.create({
  menu_text:{fontSize:18,marginTop:2,
  padding:5,
  fontFamily:'Montserrat',
  color:Colors.black
  
  }
})