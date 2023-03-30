import { BackHandler, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header'
import DatePickerModal from '../common/DatePickerModal'
import { formatDateTime, formateDate, SCREEN } from '../library/Constants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonDropdown from '../common/CommonDropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addSalesInvoiceData, getData, getOfflineData, tableCreation } from '../Redux/action'
import { connect } from 'react-redux';

const tableData = [
  { headerName: "SI No", width: 90 },
  { headerName: "Chalan No", width: 90 },
  { headerName: "Date", width: 120 },
  { headerName: "Mobile No", width: 100 },
  { headerName: "Quantityt", width: 90 },
  { headerName: "Product", width: 80 },
  { headerName: "Batch", width: 80 },
]
export class SalesInvoice extends Component {

  constructor(props) {
    super(props)

    this.state = {
      productDropdown: false,
      batchDropdown: false,
      selectedBatch: "",
      selectedProduct: "",
      chalan_no: "",
      date: "",
      mobile_no: "",
      quantity: ""
    }
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    tableCreation('SalesInvoiceTable');
    this.props.getOfflineData('SalesInvoiceTable');
  }

  onBackPress = () => {
    this.props.navigation.goBack()
    return true
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onSubmit = () => {
    const { chalan_no, date, quantity, mobile_no, selectedBatch, selectedProduct } = this.state
    var data = { chalan_no: chalan_no, date: date, quantity: quantity, mobile_no: mobile_no, selectedBatch: selectedBatch, selectedProduct: selectedProduct }
    this.props.addSalesInvoiceData([data], 'SalesInvoiceTable')
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
              <View style={{ marginHorizontal: 10, width: "93%", paddingVertical: 5, display:"flex", alignSelf:"center" }}>
                <Text style={{marginBottom:5}}>Chalan No</Text>
                <View >
                  <View style={{ ...styles.searchField }}>
                    <FontAwesome name='file-archive-o' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }} />
                    <TextInput onChangeText={(text) => this.setState({ chalan_no: text })} keyboardType='number-pad' placeholder='Enter Chalan No' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                  </View>
                </View>
              </View>

              <View style={{  display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddingBottom:5 }}>
                <View style={{ width: "45%", marginLeft:-10 }}>
                  <Text style={{marginLeft:10}} >Date</Text>
                  <DatePickerModal
                    value={new Date()}
                    placeholder='DD/MM/YY'
                    onConfirm={(data) => { this.setState({ date: formateDate(data) }) }}
                    onCancel={() => { }}
                    mode="date"
                  />
                </View >
                <View style={{ width: "45%" }}>
                  <Text style={{marginBottom:5}}>Mobile No</Text>
                  <View style={{ ...styles.searchField, marginBottom: 10 }}>
                    <Ionicons name='call' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }}></Ionicons>
                    <TextInput onChangeText={(text) => this.setState({ mobile_no: text })} keyboardType='number-pad' placeholder='Enter Mobile No' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                  </View>
                </View>
              </View>


              <View style={{ marginHorizontal: 10, width: "92%", marginTop:-5, display:"flex", alignSelf:"center"}}>

                <CommonDropdown
                  label="Select Product"
                  list={['product1', 'product2', 'product3', 'product1', 'product2', 'product3', 'product1', 'product2', 'product3']}
                  openDropdownStatus={this.state.productDropdown}
                  onClick={(data) => { this.setState({ productDropdown: data }) }}
                  selectedData={this.state.selectedProduct}
                  onSelect={(data) => { this.setState({ selectedProduct: data }) }} />
              </View>

              <View style={{ paddingHorizontal: 5, display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop:-20 }}>
                <View style={{ width: "45%" }}>
                  <CommonDropdown label="Select Batch"
                    list={['batch1', 'batch2', 'batch3']}
                    openDropdownStatus={this.state.batchDropdown}
                    onClick={(data) => { this.setState({ batchDropdown: data }) }}
                    onSelect={(data) => { this.setState({ selectedBatch: data }) }}
                    selectedData={this.state.selectedBatch} />
                </View>
                <View style={{ width: "45%" }}>
                  <Text style={{marginBottom:5}}>Quantity</Text>
                  <View>
                    <View style={{ ...styles.searchField }}>
                      <MaterialCommunityIcons name='sort-numeric-variant' size={17} style={{ marginLeft: 10, marginRight: 5, color: "#8c80ff" }} />
                      <TextInput onChangeText={(text) => this.setState({ quantity: text })} keyboardType='number-pad' placeholder='Enter Quantity' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} />
                    </View>
                  </View>
                </View>
              </View>


              <TouchableOpacity
                onPress={() => { this.onSubmit() }}
                style={{
                  marginTop: -10,
                  marginBottom: 10,
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


            {this.props.salesInvoiceList && this.props.salesInvoiceList.length > 0 &&
              <View style={styles.tableBody}>
                <ScrollView horizontal={true}  >
                  <View style={{ borderRadius: 5 }}>
                    <View style={{ flexDirection: "row", borderBottomWidth: 0.2, borderBottomColor: "gray", backgroundColor: "#1b00ff", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                      {
                        tableData.map((item, index) => {
                          return (
                            <View key={index} style={{ width: item.width, paddingVertical: 15, display: "flex", alignItems: "center" }}>
                              <Text style={{ fontWeight: "700", fontSize: 12, color: "#fff" }}>{item.headerName}</Text>
                            </View>
                          )
                        })
                      }
                    </View>
                    <View>
                      {
                        this.props.salesInvoiceList && this.props.salesInvoiceList.length > 0 && this.props.salesInvoiceList.map((item, index) => {
                          return (
                            <View key={index} style={{ flexDirection: "row", paddingVertical: 15, backgroundColor: index % 2 !== 0 ? "#e8e6ff" : "#fff", display: "flex", alignItems: "center" }}>
                              <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.ID}</Text>
                              </View>
                              <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.chalan_no}</Text>
                              </View>
                              <View style={{ width: 120, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.date}</Text>
                              </View>
                              <View style={{ width: 100, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.mobile_no}</Text>
                              </View>
                              <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.quantity}</Text>
                              </View>

                              <View style={{ width: 80, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.selected_product}</Text>
                              </View>

                              <View style={{ width: 80, display: "flex", alignItems: "center" }}>
                                <Text style={{ fontSize: 12 }}>{item.selected_batch}</Text>
                              </View>
                            </View>
                          )
                        })
                      }
                    </View>
                  </View>
                </ScrollView>
              </View>}
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



export const mapStateToProps = (store) => {
  return {
    // dashboardDetails: store.allInOneReducer.dashboardDetails,
    // distributorsList: store.allInOneReducer.distributorsList,
    salesInvoiceList: store.allInOneReducer.salesInvoiceList,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    // createTable: (id, type) => dispatch(createTable(id, type)),
    addSalesInvoiceData: (data, type) => dispatch(addSalesInvoiceData(data, type)),
    getOfflineData: (type) => dispatch(getOfflineData(type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SalesInvoice);