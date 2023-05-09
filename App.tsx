import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import store from './src/Redux/Store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { MenuProvider } from 'react-native-popup-menu';
import {
  BaseButton,
  GestureHandlerRootView 
} from 'react-native-gesture-handler';
import { ToastProvider } from 'react-native-toast-notifications'

const  App = () => {
  return (
   <GestureHandlerRootView style={{flex:1}}>
      <ToastProvider>
    <MenuProvider>
    <Provider store={store}>
    <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
      </Provider>
      </MenuProvider>
      </ToastProvider>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create(
  {
    
  }
);

export default App;
