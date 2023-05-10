import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchField extends Component {
  render() {
    return (
      <View>
        <View style={{ ...styles.searchField}}>
        <Ionicons name='search' size={17} style={{ marginLeft: 10, marginRight:5, color:"#8c80ff" }}></Ionicons>
          <TextInput placeholder={this.props.placeholderText ?? 'Search'} placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} onChangeText={(text) => this.props.onSearch(text)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchField: { width: "100%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },
})