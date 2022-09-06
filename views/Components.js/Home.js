import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons'
const profile = require('../Image/profile.png')
const dashboardImage = require('../Image/dashboardImage.png')

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: 10, paddingBottom: 2, paddingTop: "11%" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Ionicons name='reorder-three' size={30}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='search' size={15} style={{ marginLeft: 5, paddingTop: 8 }}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
            <Ionicons name='settings-outline' size={17} style={{ marginTop: 5 }}></Ionicons>
            <Ionicons name='notifications-circle-outline' size={19} style={{ marginHorizontal: 8, marginTop: 5 }}></Ionicons>
            <TouchableOpacity style={{ height: 40, width: 40 }}>
              <Image
                source={profile}
                style={{ flex: 1, alignSelf: "center", }} resizeMode="contain"
              />
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ marginTop: "3%", width: "90%", height: 100, alignSelf: "center", borderRadius: 8, borderColor: "gray", borderWidth: 0.5, flexDirection: "row", display: "flex", justifyContent: "space-evenly",backgroundColor:"white" }}>
          <View style={{ width: "40%", height: "100%" }}>
            <Image
              source={dashboardImage}
              style={{ flex: 1, alignSelf: "center", height: "100%" }} resizeMode="contain"
            />
          </View>
          <View style={{ alignSelf: "center", width: "50%", height: "100%", display: "flex", justifyContent: "space-evenly" }}>
            <View>
              <Text style={{ fontSize: 12, fontWeight: "700" }}>Welcom Back</Text>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#1b00ff" }}>AMIT KUMAR MALLICK</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>DrugsBazar ID: asbcgfd34</Text>

          </View>
        </View>
      </View>
    )
  }
}