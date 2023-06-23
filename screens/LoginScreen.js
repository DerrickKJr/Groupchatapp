import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';
import { Animated, Easing, StyleSheet, Button, Text, View, SafeAreaView, Modal, TouchableWithoutFeedbackComponent, TouchableOpacity, FlatList, TextInput, Appearance, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginScreen({navigation}) {
  const loginExpandAnim = new Animated.Value(0);
  Animated.timing( loginExpandAnim,{
    toValue: 1,
    duration: 500,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true  // To make use of native driver for performance
  }).start()

  const loginExapnd = loginExpandAnim.interpolate({
    inputRange: [0, 1],
    //outputRange: ['M59.797 13.657C63.223 6.115 72.716 0 81 0h90c8.284 0 12.223 6.115 8.797 13.657l-53.594 118.001c-3.426 7.543-12.919 13.657-21.203 13.657H15c-8.284 0-12.223-6.114-8.797-13.657l53.594-118Z', '20deg']
    outputRange:  ['m 0 1 1 1 1 3 0 3 0 1', 'm 2 0 4 0 4 3 2 3 2 0']
  })

  function Bypass(){
    console.log("Bypassing login/signup");
    navigation.navigate("ChatList");
  }
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.appNameText}>App Name</Text>
      {/*<TouchableOpacity  onPress={() => Bypass()} style={{top: "200px", left: "40px"}}>
        <Text style={{position: "absolute", top: "45px", left: "30px", color: "#000", fontSize: "35px", fontWeight: "bold", zIndex: 1}}>Login</Text>
        <svg xmlns="http://www.w3.org/2000/svg" width="182" height="146" fill="none" transform="scale(1,1)"viewBox="0 0 182 146">
          <path fill="#D9D9D9" d={"M59.797 13.657C63.223 6.115 72.716 0 81 0h90c8.284 0 12.223 6.115 8.797 13.657l-53.594 118.001c-3.426 7.543-12.919 13.657-21.203 13.657H15c-8.284 0-12.223-6.114-8.797-13.657l53.594-118Z"}/>
          <path fill="#D9D9D9" d="M0 15C0 6.716 6.716 0 15 0h80c8.284 0 15 6.716 15 15v114.914c0 8.285-6.716 15-15 15H15c-8.284 0-15-6.715-15-15V15Z"/>
        </svg>
      </TouchableOpacity>*/}
      <TouchableOpacity onPress={() => Bypass()}style={{top: "55px", left: "190px"}}>
        <Text style={{position: "absolute", top: "50px", left: "45px", color: "#000", fontSize: "35px", fontWeight: "bold", zIndex: 1}}>Sign Up</Text>
        <svg xmlns="http://www.w3.org/2000/svg" width="182" height="146" fill="none" viewBox="0 0 182 146">
          <path fill="#D9D9D9" d="M122.203 131.658c-3.426 7.543-12.919 13.657-21.203 13.657H11c-8.284 0-12.223-6.114-8.797-13.657l53.594-118C59.223 6.114 68.716 0 77 0h90c8.284 0 12.223 6.115 8.797 13.657l-53.594 118.001Z"/>
          <path fill="#D9D9D9" d="M182 130.315c0 8.285-6.716 15-15 15H87c-8.284 0-15-6.715-15-15V15.401c0-8.284 6.716-15 15-15h80c8.284 0 15 6.716 15 15v114.914Z"/>
      </svg>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#1b1c1e",
  },
  signUpButton:{
    textAlign: "center",
  },
  appNameText: {
    fontSize: 70,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "120px",
  }
});