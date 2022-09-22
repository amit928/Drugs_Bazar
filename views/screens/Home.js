
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SQLite from 'react-native-sqlite-storage';
import { connect } from 'react-redux';
import { fetchDistributorList } from '../Redux/action';

const db = SQLite.openDatabase({
  name: "MainDB",
  location: "default"
},
  () => { },
  error => { console.log(error) }
);

const profile = require('../Image/profile.png')
const dashboardImage = require('../Image/dashboardImage.png')

const Transactions = [
  { icon: <Foundation name='page-export-doc' color={'#292c45'} size={20} />, text: "Sale Invoices" },
  { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "Collection" },
  { icon: <MaterialCommunityIcons name='cart-arrow-up' color={'#292c45'} size={20} />, text: "Busineww Request Promotion" },
]

const Purchase = [
  { icon: <MaterialCommunityIcons name='cart-outline' color={'#292c45'} size={20} />, text: "Purchase Order" },
  { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "A/c Statement" },
  { icon: <FontAwesome5 name='file-invoice' color={'#292c45'} size={20} />, text: "Invoice" },
  { icon: <MaterialCommunityIcons name='database-search' color={'#292c45'} size={20} />, text: "Product Search" },
  { icon: <MaterialCommunityIcons name='file-export' color={'#292c45'} size={20} />, text: "Short Expiry" },
  { icon: <Foundation name='page-delete' color={'#292c45'} size={20} />, text: "Expiry" },
  { icon: <MaterialCommunityIcons name='truck-delivery' color={'#292c45'} size={20} />, text: "Purchase Return" },
]

const Others = [
  { icon: <FontAwesome name='briefcase' color={'#292c45'} size={20} />, text: "My Product" },
  { icon: <MaterialIcons name='open-in-new' color={'#292c45'} size={20} />, text: "New Product" },
  { icon: <MaterialCommunityIcons name='download-box-outline' color={'#292c45'} size={20} />, text: "A/c statement" },
]

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7]
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Kumar", age: 29
    }
  }

  componentDidMount = () => {
    this.props.getDistributorList()
    this.createTable();
    this.setData()
  }

  setData = async () => {
    // await db.transaction(async (tx) => {
    //   await tx.executeSql(
    //     "INSERT INTO Users (Name, Age) VALUES (?, ?)",
    //     [this.state.name, this.state.age]
    //   )
    // })
    this.getData()
  }

  getData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT Name, Age FROM Users",
        [],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var userName = results.rows.item(20).Name;
            var userAge = results.rows.item(20).Age;
            // this.setState({ username: username, userAge: userAge })
            console.log(userName, userAge)
          }
        }
      )
    })
  }

  createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT , Name TEXT, Age INTEGER);"
      )
    })
  }

  render() {
    return (
      <View>
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: 10, paddingVertical: 2, }}>
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
        <ScrollView style={{ height: "93%" }}>
          <View style={{ marginTop: "3%", width: "90%", height: 100, alignSelf: "center", borderRadius: 8, borderColor: "gray", borderWidth: 0.5, flexDirection: "row", display: "flex", justifyContent: "space-evenly", backgroundColor: "white" }}>
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
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10, marginLeft: 20, }}>OverView</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", height: 120, display: "flex", backgroundColor: "white", }}>
              <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <FontAwesome name='user-circle' size={23} color="#05f1f5" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>45</Text>
                <Text>Distributors</Text>
              </View>
            </View>
            <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", display: "flex", height: 120, backgroundColor: "white" }}>
              <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Fontisto name='shopify' size={23} color="red" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>70</Text>
                <Text>Total Products</Text>
              </View>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 15 }}>
            <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", height: 120, display: "flex", backgroundColor: "white" }}>
              <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Entypo name='shopping-cart' size={23} color="#fff" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>5</Text>
                <Text>Total Invoices</Text>
              </View>
            </View>
            <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", display: "flex", height: 120, backgroundColor: "white" }}>
              <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <FontAwesome name='money' size={23} color="#21fa11" />
              </View>
              <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>0.00</Text>
                <Text>Invoice Values</Text>
              </View>
            </View>
          </View>



          <View style={{ width: "95%", backgroundColor: "#fff", alignSelf: "center", borderRadius: 10, marginVertical: 20 }}>

            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
              <Text style={{ fontWeight: "600", fontSize: 15 }}>Purchase</Text>
            </View>
            <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
              {
                Purchase.length > 0 && Purchase.map((item, index) => {
                  return (
                    <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
                      <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
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
                      <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
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
                      <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
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

export const mapStateToProps = (store) => {
  return {

  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getDistributorList: () => dispatch(fetchDistributorList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);