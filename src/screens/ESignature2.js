import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{useRef} from 'react'
import SignatureScreen from "react-native-signature-canvas";
import { WebView } from 'react-native-webview';

const ESignature2 = ({navigation,onOK}) => {
  const text = "Signature"
  const ref = useRef();

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (signature) => {
    console.log(signature);
    // onOK(signature); // Callback from Component props
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    // ref.current.readSignature()
    console.log("Empty");
  };

  // Called after ref.current.clearSignature()
  const handleClear = (signature) => {
    // ref.current.clearSignature(signature)
    console.log("clear success!");
  };

  // Called after end of stroke
  const handleEnd = () => {
    // ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    Alert.alert("Your Document has been signed")
    navigation.goBack()
    console.log("GetData")
    console.log(data);
  };
  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleOK}
      onEmpty={handleEmpty}
      onClear={handleClear}
      onGetData={handleData}
      autoClear={true}
      descriptionText={text}
    />
  )
}

export default ESignature2

const styles = StyleSheet.create({})