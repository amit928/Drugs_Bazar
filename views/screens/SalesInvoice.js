import { BackHandler, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header'
import DatePickerModal from '../common/DatePickerModal'
import { SCREEN } from '../library/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonDropdown from '../common/CommonDropdown'

export class SalesInvoice extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productDropdown: false,
      batchDropdown: false,
      selectedBatch: "",
      selectedProduct: ""
    }
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    this.props.navigation.goBack()
    return true
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  render() {
    return (
      <View>

        <Header />
        <ScrollView>
          <View style={styles.table}>
            <View>
              <Text style={styles.headerText}>Sales Invoice</Text>
            </View>

            <View style={styles.searchBox}>

              <View style={{ flexDirection: 'row', display: "flex", marginHorizontal: 10, width: "94%", paddingVertical: 5, alignItems: "center", justifyContent: "space-evenly" }}>
                <Text style={{ width: "20%" }}>Date</Text>
                <View style={{ width: "78%", }}>
                  <DatePickerModal
                    value={new Date()}
                    placeholder='DD/MM/YY'
                    onConfirm={(data) => { this.setState({ toDate: data }) }}
                    onCancel={() => { }}
                    mode="date"
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', display: "flex", marginHorizontal: 10, width: "94%", paddingVertical: 5, alignItems: "center", justifyContent: "space-evenly" }}>
                <Text style={{ width: "20%" }}>Mobile No</Text>
                <View style={{ width: "75%", }}>
                  <View style={{ ...styles.searchField, marginBottom: 10 }}>
                    <Ionicons name='call' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }}></Ionicons>
                    <TextInput keyboardType='number-pad' placeholder='Enter Mobile No' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', display: "flex", marginHorizontal: 10, width: "94%", paddingVertical: 5, alignItems: "center", justifyContent: "space-evenly", marginTop:-5 }}>
                <Text style={{ width: "20%" }}>Quantity</Text>
                <View style={{ width: "75%", }}>
                  <View style={{ ...styles.searchField, marginBottom: 10 }}>
                    <Ionicons name='call' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }}></Ionicons>
                    <TextInput keyboardType='number-pad' placeholder='Enter Quantity' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                  </View>
                </View>
              </View>

              <View style={{ paddingHorizontal: 5, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <View style={{ width: "45%" }}>
                  <CommonDropdown
                    label="Select Product"
                    list={['product1', 'product2', 'product3', 'product1', 'product2', 'product3', 'product1', 'product2', 'product3']}
                    openDropdownStatus={this.state.productDropdown}
                    onClick={(data) => { this.setState({ productDropdown: data }) }}
                    selectedData={this.state.selectedProduct}
                    onSelect={(data) => { this.setState({ selectedProduct: data }) }} />
                </View>
                <View style={{ width: "45%" }}>
                  <CommonDropdown label="Select Batch"
                    list={['batch1', 'batch2', 'batch3']}
                    openDropdownStatus={this.state.batchDropdown}
                    onClick={(data) => { this.setState({ batchDropdown: data }) }}
                    onSelect={(data) => { this.setState({ selectedBatch: data }) }}
                    selectedData={this.state.selectedBatch} />
                </View>
                {/* <View style={{ width: "30%" }}>
                  <Text style={{ marginBottom: 5 }}>Quantity</Text>
                  <View style={{ ...styles.searchField, marginBottom: 10 }}>
                    <Ionicons name='call' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }}></Ionicons>
                    <TextInput keyboardType='number-pad' placeholder='Quantity' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                  </View>
                </View> */}
              </View>

              <TouchableOpacity style={{
                marginTop:-10,
                marginBottom:10,
                width: "90%", alignSelf: "center", borderRadius: 7, shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5, backgroundColor: "#1b00ff", paddingVertical: 10
              }}>
                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "600", color: "#fff" }}>SUBMIT</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  table: { width: "95%", backgroundColor: "#fff", borderRadius: 7, marginTop: 10, alignSelf: "center", paddingVertical: 20, },
  headerText: { fontWeight: "700", fontSize: 17, color: "black", marginLeft: 10, marginBottom: 15 },

  searchField: { width: "90%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },

  tableBody: { borderWidth: 0.5, borderColor: "#1b00ff", borderRadius: 7, width: "97%", alignSelf: "center", marginBottom: "10%" },

  searchField: { width: "100%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },
  searchBox: { marginBottom: 15, width: "95%", borderWidth: 0.5, borderRadius: 5, paddingBottom: 10, paddingTop: 10, alignSelf: "center" },
})

export default SalesInvoice;