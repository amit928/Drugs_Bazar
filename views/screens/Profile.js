import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  onLogout=()=>{
    AsyncStorage.removeItem('MyData');
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{width:"100%", height:"100%"}}>
        <Header />
        <TouchableOpacity style={{width:"100%", height:"7%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#1b00ff", position:"absolute", bottom:0}} onPress={this.onLogout}>
          <Text style={{color:"#fff", fontWeight:"bold", fontSize:16}}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}