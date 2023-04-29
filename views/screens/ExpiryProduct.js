import { BackHandler, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux';
import { SCREEN } from '../library/Constants';
import DatePickerModal from '../common/DatePickerModal';
import SearchField from '../common/SearchField';

const tableData = [
    { headerName: "Invoice No", width: 90 },
    { headerName: "Invoice Date", width: 90 },
    { headerName: "Batch No", width: 90 },
    { headerName: "Package Name", width: 140 },
    { headerName: "Supplier", width: 140 },
    { headerName: "Town", width: 100 },
    { headerName: "Pack", width: 80 },
    { headerName: "MRP", width: 80 },
    { headerName: "Rate", width: 80 }

]

class ExpiryProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: "", toDate: ""
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
                <Header icon={'back'} header={'Expiry Product List'} />
                <ScrollView>
                    <View style={styles.table}>
                        <View style={styles.searchBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', display: "flex", marginHorizontal: 10 }}>
                                <View style={{ width: SCREEN.WIDTH / 2.3, padding: 5 }}>
                                    <Text style={{ marginLeft: 5 }}>From Date</Text>
                                    <DatePickerModal
                                        value={this.state.fromDate}
                                        onConfirm={(data) => { this.setState({ fromDate: data }) }}
                                        placeholder='DD/MM/YY'
                                        onCancel={() => { }}
                                        mode="date"
                                    />
                                </View>
                                <View style={{ width: SCREEN.WIDTH / 2.3, padding: 5 }}>
                                    <Text style={{ marginLeft: 5 }}>To Date</Text>
                                    <DatePickerModal
                                        value={this.state.toDate}
                                        placeholder='DD/MM/YY'
                                        onConfirm={(data) => { this.setState({ toDate: data }) }}
                                        onCancel={() => { }}
                                        mode="date"
                                    />
                                </View>
                            </View>
                            {/* <View style={{ ...styles.searchField, marginBottom: 10 }}>
                                <Entypo name="shop" size={17} color="#8c80ff" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder='Pack Name' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} onChangeText={(text) => console.log(text)} />
                            </View>
                            <View style={{ ...styles.searchField, marginBottom: 10 }}>
                                <Ionicons name="person" size={17} color="#8c80ff" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder='Supplier' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} onChangeText={(text) => console.log(text)} />
                            </View>
                            <View style={{ ...styles.searchField, marginBottom: 10 }}>
                                <MaterialCommunityIcons name="town-hall" size={17} color="#8c80ff" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder='Town' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} onChangeText={(text) => console.log(text)} />
                            </View>

                            <View style={styles.searchField}>
                                <FontAwesome5 name="file-invoice" size={17} color="#8c80ff" style={{ marginHorizontal: 10 }} />
                                <TextInput placeholder='Invoice No' placeholderTextColor={"gray"} style={{ width: "85%", fontSize: 14 }} onChangeText={(text) => console.log(text)} />
                            </View> */}
                            <View style={styles.searchBottomRow}>
                                {/* <TouchableOpacity style={styles.searchBottom}>
                                    <Text style={{ color: "#1b00ff" }}>Search</Text>
                                </TouchableOpacity> */}

                                <View style={{ width: "72%" }}>
                                    <SearchField />
                                </View>

                                <TouchableOpacity style={{ ...styles.searchIconField, borderColor: "#006600", }}>
                                    <MaterialCommunityIcons name="microsoft-excel" size={20} color="#009900" />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ ...styles.searchIconField, borderColor: "#ff3300" }}>
                                    <FontAwesome5 name="file-pdf" size={19} color="#ff3300" />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {this.props.expiryProductList && this.props.expiryProductList.length > 0 &&
                            <View style={styles.tableBody}>
                                <ScrollView horizontal={true}  >
                                    <View style={{ borderRadius: 5 }}>
                                        <View style={{ flexDirection: "row", borderBottomWidth: 0.2, borderBottomColor: "gray", backgroundColor: "#1b00ff", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                                            {
                                                tableData.map((item, index) => {
                                                    return (
                                                        <View key={index} style={{ width: item.width, display: "flex", alignItems: "center", paddingVertical: 15 }}>
                                                            <Text style={{ fontWeight: "700", fontSize: 12, color: "#fff" }}>{item.headerName}</Text>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                        <View>
                                            {
                                                this.props.expiryProductList && this.props.expiryProductList.length > 0 && this.props.expiryProductList.map((item, index) => {
                                                    return (
                                                        <View key={index} style={{ flexDirection: "row", paddingVertical: 8, backgroundColor: index % 2 !== 0 ? "#e8e6ff" : "#fff", display: "flex", alignItems: "center" }}>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.invno}</Text>
                                                            </View>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.invdt}</Text>
                                                            </View>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.batch_no}</Text>
                                                            </View>
                                                            <View style={{ width: 140, display: "flex", alignItems: "center", paddingHorizontal: 10 }}>
                                                                <Text style={{ fontSize: 12 }}>{item.pname}</Text>
                                                            </View>
                                                            <View style={{ width: 140, display: "flex", alignItems: "center", paddingHorizontal: 10 }}>
                                                                <Text style={{ fontSize: 12 }}>{item.supplier}</Text>
                                                            </View>
                                                            <View style={{ width: 100, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.town}</Text>
                                                            </View>
                                                            <View style={{ width: 80, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.ppack}</Text>
                                                            </View>
                                                            <View style={{ width: 80, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.mrp}</Text>
                                                            </View>
                                                            <View style={{ width: 80, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.rate}</Text>
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
    table: { width: "95%", backgroundColor: "#fff", borderRadius: 7, marginTop: 10, alignSelf: "center", paddingVertical: 20 },
    headerText: { fontWeight: "700", fontSize: 17, color: "black", marginLeft: 10, marginBottom: 15 },

    searchField: { width: "90%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },

    tableBody: { borderWidth: 0.5, borderColor: "#1b00ff", borderRadius: 7, width: "97%", alignSelf: "center", marginBottom: "10%" },

    searchBox: { marginBottom: 15, width: "95%", borderWidth: 0.5, borderRadius: 5, paddingBottom: 10, paddingTop: 10, alignSelf: "center" },
    searchBottomRow: { flexDirection: "row", display: "flex", justifyContent: "space-between", width: "90%", alignSelf: "center" },
    searchBottom: { width: "72%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 5, borderWidth: 0.5, borderColor: "#1b00ff", height: 38, backgroundColor: "#e8e6ff" },
    searchIconField: { width: "12%", display: "flex", justifyContent: "center", alignItems: "center", height: 38, borderWidth: 0.5, borderRadius: 5 }
})

export const mapStateToProps = (store) => {
    return {
        dashboardDetails: store.allInOneReducer.dashboardDetails,
        expiryProductList: store.allInOneReducer.expiryProductList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpiryProduct);

