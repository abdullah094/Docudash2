import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const GooglePlacesInput = () => {
    const ref = useRef();




    
  return (
    <GooglePlacesAutocomplete
    
    
    placeholder='Search'
    onPress={(data, details = null) => {
      // 'details' is provided when fetchDetails = true
      console.log(data);
     
    }}
    query={{
      key: 'AIzaSyBxLYi2X9cTrWsyTdjIvRuwiRnU_iD9qp0',
      language: 'en',
    }}
  />
  )
}

export default GooglePlacesInput

const styles = StyleSheet.create({

})