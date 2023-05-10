import { BackHandler, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { connect } from 'react-redux';
import { SCREEN } from '../library/Constants';
import DatePickerModal from '../common/DatePickerModal';
import SearchField from '../common/SearchField';
import { getOfflineData } from '../Redux/action';
import Pagination from '../common/Pagination';

const tableData = [
    { headerName: "Invoice No", width: 90 },
    { headerName: "Invoice Date", width: 90 },
    { headerName: "Company Name", width: 110 },
    { headerName: "Company Town", width: 100 },
    { headerName: "Invoice Amount", width: 90 },
    { headerName: "Action", width: 80 }
]

class Invoice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: "", toDate: ""
        }
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        // this.props.getOfflineData('Invoice');
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
                <Header icon={'back'} header={'Invoice List'} />
                <ScrollView>
                    <View style={styles.table}>
                        <View style={styles.searchBox}>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', display: "flex", marginHorizontal: 10 }}>
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
                            </View> */}
                            <View style={styles.searchBottomRow}>
                                <View style={{ width: "100%" }}>
                                    <SearchField onSearch={(text) => { this.props.getOfflineData('Invoice', text) }} placeholderText={'Search Comapany Name'} />
                                </View>
                            </View>
                        </View>


                        {this.props.invoiceList && this.props.invoiceList.length > 0 &&
                            <View style={styles.tableBody}>
                                <ScrollView horizontal={true}  >
                                    <View style={{ borderRadius: 5 }}>
                                        <View style={{ flexDirection: "row", borderBottomWidth: 0.2, borderBottomColor: "gray", backgroundColor: "#1b00ff", borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingEnd: 10 }}>
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
                                                this.props.invoiceList && this.props.invoiceList.length > 0 && this.props.invoiceList.map((item, index) => {
                                                    return (
                                                        <View key={index} style={{ flexDirection: "row", paddingVertical: 8, backgroundColor: index % 2 !== 0 ? "#e8e6ff" : "#fff", display: "flex", alignItems: "center", paddingEnd: 10 }}>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.invno}</Text>
                                                            </View>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.invdt}</Text>
                                                            </View>
                                                            <View style={{ width: 110, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.compname}</Text>
                                                            </View>
                                                            <View style={{ width: 100, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.comptown}</Text>
                                                            </View>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.invamt}</Text>
                                                            </View>
                                                            <TouchableOpacity style={{ width: 80, display: "flex", alignItems: "center", padding: 5, borderRadius: 5, backgroundColor: "#1b00ff" }}>
                                                                {/* <Entypo name='dots-three-horizontal' size={18} color="#4433ff" /> */}
                                                                <Text style={{ color: "#fff" }}>View</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>}

                        <Pagination onPress={(currentPage) => { this.props.getOfflineData('Invoice', '', currentPage) }} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: { width: "95%", backgroundColor: "#fff", borderRadius: 7, marginTop: 10, alignSelf: "center", paddingVertical: 20 , marginBottom:"10%"},
    headerText: { fontWeight: "700", fontSize: 17, color: "black", marginLeft: 10, marginBottom: 15 },

    searchField: { width: "90%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },

    tableBody: { borderWidth: 0.5, borderColor: "#1b00ff", borderRadius: 7, width: "97%", alignSelf: "center", marginBottom: "3%" },

    searchBox: { marginBottom: 15, width: "95%", borderWidth: 0.5, borderRadius: 5, paddingBottom: 10, paddingTop: 10, alignSelf: "center" },
    searchBottomRow: { flexDirection: "row", display: "flex", justifyContent: "space-between", width: "90%", alignSelf: "center" },
    searchBottom: { width: "72%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 5, borderWidth: 0.5, borderColor: "#1b00ff", height: 38, backgroundColor: "#e8e6ff" },
    searchIconField: { width: "12%", display: "flex", justifyContent: "center", alignItems: "center", height: 38, borderWidth: 0.5, borderRadius: 5 }
})

export const mapStateToProps = (store) => {
    return {
        dashboardDetails: store.allInOneReducer.dashboardDetails,
        invoiceList: store.allInOneReducer.invoiceList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getOfflineData: (type, search, currentPage) => dispatch(getOfflineData(type, search, currentPage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);

