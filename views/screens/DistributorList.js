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
import Tooltip from 'react-native-walkthrough-tooltip';
import Pagination from '../common/Pagination';

const tableData = [
    { headerName: "ID", width: 90 },
    { headerName: "DrugsBazar ID", width: 90 },
    { headerName: "Company Name", width: 150 },
    { headerName: "Company Town", width: 100 },
    { headerName: "Action", width: 80 }

]
class DistributorList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fromDate: "", toDate: "", currentIndex: null
        }
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        // this.props.getOfflineData('DistributorList');
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
                <Header icon={'back'} header={'Distributors List'} />
                <ScrollView>
                    <View style={styles.table}>
                        <View style={styles.searchBox}>

                            <View style={{ width: "100%" }}>
                                <SearchField onSearch={(text) => { this.props.getOfflineData('DistributorList', text) }} placeholderText={'Search Comapany Name'} />
                            </View>
                        </View>

                        {this.props.distributorsList && this.props.distributorsList.length > 0 &&
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
                                                this.props.distributorsList && this.props.distributorsList.length > 0 && this.props.distributorsList.map((item, index) => {
                                                    return (
                                                        <View key={index} style={{ flexDirection: "row", paddingVertical: 8, backgroundColor: index % 2 !== 0 ? "#e8e6ff" : "#fff", display: "flex", alignItems: "center" }}>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.COMPID}</Text>
                                                            </View>
                                                            <View style={{ width: 90, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.DRGBZRID}</Text>
                                                            </View>
                                                            <View style={{ width: 150, display: "flex", alignItems: "center", paddingHorizontal: 10 }}>
                                                                <Text style={{ fontSize: 12 }}>{item.COMPNAME}</Text>
                                                            </View>
                                                            <View style={{ width: 100, display: "flex", alignItems: "center" }}>
                                                                <Text style={{ fontSize: 12 }}>{item.COMPTOWN}</Text>
                                                            </View>
                                                            <Tooltip
                                                                isVisible={this.state.currentIndex == index ? true : false}
                                                                content={<View style={{ width: 150, elevation: 5, backgroundColor: "#1b00ff", paddingVertical: 10 }}>
                                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("DistributorOrder") }}>
                                                                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500", marginHorizontal: 10 }}>Order</Text>
                                                                    </TouchableOpacity>
                                                                    <View style={{ height: 0.5, backgroundColor: "#fff", width: "100%", marginVertical: 10 }}></View>
                                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("DistributorStatement") }}>
                                                                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500", marginHorizontal: 10 }}>Statement</Text>
                                                                    </TouchableOpacity>

                                                                </View>}
                                                                placement="bottom"
                                                                onClose={() => this.setState({ currentIndex: null })}
                                                                contentStyle={{ backgroundColor: "#1b00ff" }}
                                                                backgroundColor='transparent'
                                                            >
                                                                <TouchableOpacity style={{ width: 80, display: "flex", alignItems: "center" }} onPress={() => { this.setState({ currentIndex: index }) }}>
                                                                    <Entypo name='dots-three-horizontal' size={18} color="#4433ff" />
                                                                </TouchableOpacity>
                                                            </Tooltip>

                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>}

                            <Pagination onPress={(currentPage)=>{this.props.getOfflineData('DistributorList', '', currentPage)}} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    table: { width: "95%", backgroundColor: "#fff", borderRadius: 7, marginVertical: "10%", alignSelf: "center", paddingVertical: 20 },
    headerText: { fontWeight: "700", fontSize: 17, color: "black", marginLeft: 10, marginBottom: 15 },

    searchField: { width: "90%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },

    tableBody: { borderWidth: 0.5, borderColor: "#1b00ff", borderRadius: 7, width: "97%", alignSelf: "center", marginBottom: "3%", marginTop: 15 },

    searchBox: { width: "95%", borderWidth: 0.5, borderRadius: 5, alignSelf: "center", padding: 10 },
    searchBottomRow: { flexDirection: "row", display: "flex", justifyContent: "space-between", width: "90%", alignSelf: "center" },
    searchBottom: { width: "72%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 5, borderWidth: 0.5, borderColor: "#1b00ff", height: 38, backgroundColor: "#e8e6ff" },
    searchIconField: { width: "12%", display: "flex", justifyContent: "center", alignItems: "center", height: 38, borderWidth: 0.5, borderRadius: 5 }
})

export const mapStateToProps = (store) => {
    return {
        dashboardDetails: store.allInOneReducer.dashboardDetails,
        distributorsList: store.allInOneReducer.distributorsList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getOfflineData: (type, search, page) => dispatch(getOfflineData(type, search, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DistributorList);


{/* <Tooltip
    isVisible={this.state.currentIndex == index ? true : false}
    content={<View style={{ width: 150, backgroundColor: "#fff", borderWidth: 0.5, borderColor: "#1b00ff" }}>
        <View style={{ backgroundColor: "#1b00ff" }} ><Text style={{ color: "#fff", fontSize: 15, fontWeight: "500", margin: 10 }}>Action</Text></View>
        <View style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "500", margin: 10 }}>Order</Text>
            </TouchableOpacity>
            <View style={{ height: 0.5, backgroundColor: "#1b00ff", width: "100%" }}></View>
            <TouchableOpacity>
                <Text style={{ fontSize: 15, fontWeight: "500", margin: 13 }}>Statement</Text>
            </TouchableOpacity>
        </View>

    </View>}
    placement="bottom"
    onClose={() => this.setState({ currentIndex: null })}
    contentStyle={{ padding: 0, backgroundColor: "#1b00ff" }}
    backgroundColor='transparent'
></Tooltip> */}

