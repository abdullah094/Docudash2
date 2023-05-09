import { StyleSheet, Text, View,SafeAreaView ,Pressable,TouchableOpacity,TouchableHighlight,ScrollView} from 'react-native'
import React, { useState } from 'react'
import Colors from '../styles/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DrawerButton from './DrawerButton'
const CustomDrawer = ({navigation}) => {

    const [solutions,setSolutions] = useState(false)
    const [ourServices,setOurServices] = useState(false)
    const [resources,setResources] = useState(false)
    const [selectedTab,setSelectedTab] = useState('Home')
    const Arrowdown = () =>( <AntDesign name='down' color={Colors.white} size={18}/>)
    let backgroundColor = Colors.green
    const selectedBackgroundColor = Colors.white
   

  return (
    <View style={{flex:1,backgroundColor:Colors.green}}>
      <SafeAreaView style={{flex:1,}}>
    <ScrollView contentContainerStyle={{paddingBottom:50}}>

    {/* Drwaer starts from here */}

    <DrawerButton text={"Home"} navigate={"Home"} onPress={()=>navigation.navigate('Home')}/>

    <DrawerButton text={"Pricing"} navigate={"Home"} onPress={()=>navigation.navigate('Pricing')}/>

      <Pressable style={styles.tab_button} onPress={()=>setSolutions(!solutions)}>
<Text style={styles.tab_button_text}>Solutions</Text>
<View style={styles.tab_button_arrow}>
<Arrowdown/>
</View>
      </Pressable>

      {
        solutions&&
      
        <View style={{backgroundColor:Colors.green}}>      
         <TouchableOpacity style={styles.tab_button} onPress={()=>navigation.navigate('ForIndividuals')}>
        <Text style={styles.tab_expanded_button_text}>For Individuals</Text>
        
              </TouchableOpacity>
           
            <TouchableOpacity style={styles.tab_button} onPress={()=>navigation.navigate('ForBusinesses')}>
            <Text style={styles.tab_expanded_button_text}>For Businesses</Text>
            
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.tab_button} onPress={()=>navigation.navigate('ForTitleAgents')}>
            <Text style={styles.tab_expanded_button_text}>For Title Agents</Text>
            
                  </TouchableOpacity>
                
                  <TouchableOpacity style={styles.tab_button} onPress={()=>navigation.navigate('ForLenders')}>
            <Text style={styles.tab_expanded_button_text}>For Lenders</Text>
            
                  </TouchableOpacity>
                  </View>

      }

      <Pressable style={styles.tab_button} onPress={()=>setOurServices(!ourServices)}>
<Text style={styles.tab_button_text}>Our Services</Text>
<View style={styles.tab_button_arrow}>
<Arrowdown/>
</View>
      </Pressable>
 {
        ourServices&&
      
        <View style={{backgroundColor:Colors.green}}>       
         <TouchableOpacity style={styles.tab_button} onPress={()=>navigation.navigate('ESignature')}>
        <Text style={styles.tab_expanded_button_text}>E-Signature</Text>
        
              </TouchableOpacity>
           
            <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Mobile Apps</Text>
            
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Collaborations</Text>
            
                  </TouchableOpacity>
                
                  <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Protocol Systems</Text>
            
                  </TouchableOpacity>

                   <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Consolidations</Text>
            
                  </TouchableOpacity>

                      <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Notarization</Text>
            
                  </TouchableOpacity>

                      <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>CLM</Text>
            
                  </TouchableOpacity>
                    <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Clickhrough</Text>
            
                  </TouchableOpacity>

                   <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Tracking</Text>
            
                  </TouchableOpacity>
                   <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>DocuSight</Text>
            
                  </TouchableOpacity>
                  </View>

      }

<DrawerButton text={"For Notaries"} onPress={()=>navigation.navigate('ForNotaries')}/>

      <Pressable style={styles.tab_button} onPress={()=>setResources(!resources)}>
<Text style={styles.tab_button_text}>Resources</Text>
<View style={styles.tab_button_arrow}>
<Arrowdown/>
</View>
      </Pressable>

      {
        resources&&
      
        <View style={{backgroundColor:Colors.green}}>       
         <TouchableOpacity style={styles.tab_button}>
        <Text style={styles.tab_expanded_button_text}>Blogs</Text>
        
              </TouchableOpacity>
           
            <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Knowledge Center</Text>
            
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.tab_button}>
            <Text style={styles.tab_expanded_button_text}>Case Studies</Text>
            
                  </TouchableOpacity>
                
                 
                  </View>

      }

      
     
    </ScrollView>
       
    <TouchableOpacity onPress={()=>navigation.navigate('StackNavigator')}
    style={[styles.tab_button,{bottom:20,backgroundColor:Colors.darkgreen,justifyContent:'center'}]}>
<Text style={[styles.tab_button_text,{color:Colors.black,fontSize:25,alignSelf:'center',marginLeft:0}]}>Sign in</Text>

      </TouchableOpacity>
     
    </SafeAreaView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    tab_button:{width:'100%',flexDirection:'row',height:50,alignItems:'center',justifyContent:'space-between',},
    tab_button_text:{marginLeft:15,fontFamily:'Montserrat-SemiBold',fontSize:18,color:Colors.white},
    tab_button_arrow:{marginRight:15},
     tab_expanded_button_text:{marginLeft:30,fontFamily:'Montserrat',fontSize:16,color:Colors.black},
})