
import { BackHandler, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { createTable, getData, getOfflineData } from '../Redux/action';
import Header from '../common/Header';
import NetInfo from "@react-native-community/netinfo";
import { formatDateTime } from '../library/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const dashboardImage = require('../Image/dashboardImage.png')

const Transactions = [
  { icon: <Foundation name='page-export-doc' color={'#292c45'} size={20} />, text: "Sale Invoices", navigation: "Home" },
  { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "Collection", navigation: "Home" },
  { icon: <MaterialCommunityIcons name='cart-arrow-up' color={'#292c45'} size={20} />, text: "Busineww Request Promotion", navigation: "Home" },
]

const Purchase = [
  { icon: <MaterialCommunityIcons name='cart-outline' color={'#292c45'} size={20} />, text: "Purchase Order", navigation: "DistributorList" },
  { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "A/c Statement", navigation: "Home" },
  { icon: <FontAwesome5 name='file-invoice' color={'#292c45'} size={20} />, text: "Invoice", navigation: "Invoice" },
  { icon: <MaterialCommunityIcons name='database-search' color={'#292c45'} size={20} />, text: "Product Search", navigation: "DistributorProduct" },
  { icon: <MaterialCommunityIcons name='file-export' color={'#292c45'} size={20} />, text: "Short Expiry", navigation: "ShortExpiry" },
  { icon: <Foundation name='page-delete' color={'#292c45'} size={20} />, text: "Expiry", navigation: "ExpiryProduct" },
  { icon: <MaterialCommunityIcons name='truck-delivery' color={'#292c45'} size={20} />, text: "Purchase Return", navigation: "Home" },
]

const Others = [
  { icon: <FontAwesome name='briefcase' color={'#292c45'} size={20} />, text: "My Product", navigation: "Home" },
  { icon: <MaterialIcons name='open-in-new' color={'#292c45'} size={20} />, text: "New Product", navigation: "Home" },
  { icon: <MaterialCommunityIcons name='download-box-outline' color={'#292c45'} size={20} />, text: "A/c statement", navigation: "Home" },
]

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      internetStatus: false, currentTime: ""
    }
  }

  componentDidMount = () => {
    this.props.getData();
    NetInfo.fetch().then(state => {
      this.setState({ internetStatus: state.isConnected })
      if (state.isConnected == true)
        this.storeOnlineTime(formatDateTime(new Date()))
    });

    AsyncStorage.getItem("Time").then((value) => {
      if (value !== null) {
        this.setState({ currentTime: value })
      }
    })

    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  storeOnlineTime = async (time) => {
    try {
      await AsyncStorage.setItem(
        'Time',
        time
      );
    } catch (error) {
      // Error saving data
    }
  };

  componentDidUpdate = (prevProps, prevState) => {

  }

  onBackPress = () => {
    BackHandler.exitApp()
    return true
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }


  render() {
    return (
      <View>
        <Header />
        <ScrollView style={{ height: "93%" }}>
          <View style={styles.header}>
            <View style={{ width: "40%", height: "100%", paddingVertical: 4, marginLeft: 15 }}>
              <Image
                source={dashboardImage}
                style={{ flex: 1, alignSelf: "center", height: "100%" }} resizeMode="contain"
              />
            </View>
            <View style={styles.headerText}>
              <View>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>Welcom Back</Text>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#1b00ff" }}>{this.props.dashboardDetails.compname}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: "700" }}>DrugsBazar ID: {this.props.dashboardDetails.drgbzrid}</Text>
                <Text style={{ fontSize: 10, fontWeight: "700" }}>Last Sync:  {this.state.currentTime}</Text>
                <View style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
                  <Text style={{ fontSize: 10, fontWeight: "700" }}>NetWork Status:     </Text>
                  <FontAwesome name='circle' color={this.state.internetStatus == true ? 'green' : 'red'} size={12} />
                </View>

              </View>
            </View>
          </View>
          <View>
            <Text style={styles.overViewText}>OverView</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={styles.card}>
              <View style={styles.cardStyle}>
                <FontAwesome name='user-circle' size={23} color="#05f1f5" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>45</Text>
                <Text>Distributors</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardStyle}>
                <Fontisto name='shopify' size={23} color="red" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{this.props.distributorsProductCount[0] && this.props.distributorsProductCount [0].PCOUNT}</Text>
                <Text>Total Products</Text>
              </View>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 15 }}>
            <View style={styles.card}>
              <View style={styles.cardStyle}>
                <Entypo name='shopping-cart' size={23} color="#fff" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>5</Text>
                <Text>Total Invoices</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardStyle}>
                <FontAwesome name='money' size={23} color="#21fa11" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>0.00</Text>
                <Text>Invoice Values</Text>
              </View>
            </View>
          </View>



          <View style={styles.iconCard}>
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Purchase</Text>
            </View>
            <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
              {
                Purchase.length > 0 && Purchase.map((item, index) => {
                  return (
                    <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
                      <TouchableOpacity style={styles.icons} onPress={() => {
                        if(item.navigation !== 'DistributorProduct'){  
                          this.props.createTable(this.props.dashboardDetails.drgbzrid, item.navigation);
                        }
                        this.props.navigation.navigate(item.navigation)
                      }}>
                        {item.icon}
                      </TouchableOpacity>
                      <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
                    </View>
                  )
                })
              }
            </View>


            <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Sale Transactions</Text>
            </View>
            <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
              {
                Transactions.length > 0 && Transactions.map((item, index) => {
                  return (
                    <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
                      <TouchableOpacity style={styles.icons}>
                        {item.icon}
                      </TouchableOpacity>
                      <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
                    </View>
                  )
                })
              }
            </View>

            <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Other Transactions</Text>
            </View>
            <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
              {
                Others.length > 0 && Others.map((item, index) => {
                  return (
                    <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
                      <TouchableOpacity style={styles.icons} onPress={() => {
                        this.props.createTable(this.props.dashboardDetails.drgbzrid, item.navigation);
                        this.props.navigation.navigate(item.navigation)
                      }}>
                        {item.icon}
                      </TouchableOpacity>
                      <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
                    </View>
                  )
                })
              }
            </View>

          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: { marginTop: "3%", width: "90%", height: 130, alignSelf: "center", borderRadius: 8, borderColor: "gray", borderWidth: 0.5, flexDirection: "row", display: "flex", justifyContent: "space-between", backgroundColor: "white" },
  headerText: { alignSelf: "center", width: "50%", height: "100%", display: "flex", justifyContent: "space-evenly" },
  overViewText: { fontWeight: "bold", fontSize: 20, margin: 10, marginLeft: 20, },
  card: { width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", height: 120, display: "flex", backgroundColor: "white", },
  cardStyle: { height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  icons: { borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" },
  iconCard: { width: "95%", backgroundColor: "#fff", alignSelf: "center", borderRadius: 10, marginVertical: 20 }
})

export const mapStateToProps = (store) => {
  return {
    dashboardDetails: store.allInOneReducer.dashboardDetails,
    distributorsList: store.allInOneReducer.distributorsList,
    distributorsProductCount: store.allInOneReducer.distributorsProductCount,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    createTable: (id, type) => dispatch(createTable(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);