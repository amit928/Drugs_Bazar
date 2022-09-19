import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}



// import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
// import React, { Component } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Entypo, FontAwesome, FontAwesome5, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
// const profile = require('../Image/profile.png')
// const dashboardImage = require('../Image/dashboardImage.png')

// const Transactions = [
//   { icon: <Foundation name='page-export-doc' color={'#292c45'} size={20} />, text: "Sale Invoices" },
//   { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "Payment-In" },
//   { icon: <MaterialIcons name='assignment-return' color={'#292c45'} size={20} />, text: "Cr. Note/ Sale Return" },
//   { icon: <MaterialIcons name='send-to-mobile' color={'#292c45'} size={20} />, text: "Sale Order" },
//   { icon: <MaterialCommunityIcons name='file-question' color={'#292c45'} size={20} />, text: "Estimate/ Quotation" },
//   { icon: <FontAwesome5 name='file-invoice' color={'#292c45'} size={20} />, text: "Proforma Invoice" },
//   { icon: <MaterialCommunityIcons name='truck-delivery-outline' color={'#292c45'} size={20} />, text: "Delivery Challan" },

// ]

// const Purchase = [
//   { icon: <MaterialCommunityIcons name='cart-outline' color={'#292c45'} size={20} />, text: "Purchase Order" },
//   { icon: <FontAwesome name='rupee' color={'#292c45'} size={20} />, text: "A/c Statement" },
//   { icon: <MaterialCommunityIcons name='cart-arrow-down' color={'#292c45'} size={20} />, text: "Dr. Note/ Purchase Return" },
//   { icon: <MaterialIcons name='get-app' color={'#292c45'} size={20} />, text: "Purchase Order" },
// ]

// const Others = [
//   { icon: <Entypo name='wallet' color={'#292c45'} size={20} />, text: "Expenses" },
//   { icon: <MaterialCommunityIcons name='transfer' color={'#292c45'} size={20} />, text: "Party To Party Transfer" },
// ]

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 7]
// export default class Home extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//     }
//   }

//   componentDidMount = () => {
//   }

//   render() {
//     return (
//       <View>
//         <View style={{ backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: 10, paddingBottom: 2, paddingTop: "11%" }}>
//           <View style={{ flexDirection: "row" }}>
//             <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
//               <Ionicons name='reorder-three' size={30}></Ionicons>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Ionicons name='search' size={15} style={{ marginLeft: 5, paddingTop: 8 }}></Ionicons>
//             </TouchableOpacity>
//           </View>
//           <View style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
//             <Ionicons name='settings-outline' size={17} style={{ marginTop: 5 }}></Ionicons>
//             <Ionicons name='notifications-circle-outline' size={19} style={{ marginHorizontal: 8, marginTop: 5 }}></Ionicons>
//             <TouchableOpacity style={{ height: 40, width: 40 }}>
//               <Image
//                 source={profile}
//                 style={{ flex: 1, alignSelf: "center", }} resizeMode="contain"
//               />
//             </TouchableOpacity>

//           </View>
//         </View>
//         <ScrollView style={{ height: "90%" }}>
//           <View style={{ marginTop: "3%", width: "90%", height: 100, alignSelf: "center", borderRadius: 8, borderColor: "gray", borderWidth: 0.5, flexDirection: "row", display: "flex", justifyContent: "space-evenly", backgroundColor: "white" }}>
//             <View style={{ width: "40%", height: "100%" }}>
//               <Image
//                 source={dashboardImage}
//                 style={{ flex: 1, alignSelf: "center", height: "100%" }} resizeMode="contain"
//               />
//             </View>
//             <View style={{ alignSelf: "center", width: "50%", height: "100%", display: "flex", justifyContent: "space-evenly" }}>
//               <View>
//                 <Text style={{ fontSize: 12, fontWeight: "700" }}>Welcom Back</Text>
//                 <Text style={{ fontSize: 18, fontWeight: "700", color: "#1b00ff" }}>AMIT KUMAR MALLICK</Text>
//               </View>
//               <Text style={{ fontSize: 12, fontWeight: "700" }}>DrugsBazar ID: asbcgfd34</Text>
//             </View>
//           </View>
//           <View>
//             <Text style={{ fontWeight: "bold", fontSize: 20, margin: 10, marginLeft: 20, }}>OverView</Text>
//           </View>
//           <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
//             <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", height: 120, display: "flex", backgroundColor: "white", }}>
//               <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
//                 <FontAwesome name='user-circle' size={23} color="#05f1f5" />
//               </View>
//               <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <Text style={{ fontSize: 25, fontWeight: "bold" }}>45</Text>
//                 <Text>Distributors</Text>
//               </View>
//             </View>
//             <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", display: "flex", height: 120, backgroundColor: "white" }}>
//               <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
//                 <Fontisto name='shopify' size={23} color="red" />
//               </View>
//               <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <Text style={{ fontSize: 25, fontWeight: "bold" }}>70</Text>
//                 <Text>Total Products</Text>
//               </View>
//             </View>
//           </View>
//           <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 15 }}>
//             <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", height: 120, display: "flex", backgroundColor: "white" }}>
//               <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
//                 <Entypo name='shopping-cart' size={23} color="#fff" />
//               </View>
//               <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <Text style={{ fontSize: 25, fontWeight: "bold" }}>5</Text>
//                 <Text>Total Invoices</Text>
//               </View>
//             </View>
//             <View style={{ width: "40%", borderRadius: 10, borderWidth: 0.5, borderColor: "gray", display: "flex", height: 120, backgroundColor: "white" }}>
//               <View style={{ height: "35%", backgroundColor: "#292c45", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
//                 <FontAwesome name='money' size={23} color="#21fa11" />
//               </View>
//               <View style={{ height: "65%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                 <Text style={{ fontSize: 25, fontWeight: "bold" }}>0.00</Text>
//                 <Text>Invoice Values</Text>
//               </View>
//             </View>
//           </View>















//           <View style={{ width: "95%", backgroundColor: "#fff", alignSelf: "center", borderRadius: 10, marginVertical: 20 }}>

//           <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
//               <Text style={{ fontWeight: "600", fontSize: 15 }}>Purchase</Text>
//             </View>
//             <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
//             <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
//               {
//                 Purchase.length > 0 && Purchase.map((item, index) => {
//                   return (
//                     <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
//                       <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
//                         {item.icon}
//                       </TouchableOpacity>
//                       <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
//                     </View>
//                   )
//                 })
//               }

//             </View>


//             <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
//               <Text style={{ fontWeight: "600", fontSize: 15 }}>Sale Transactions</Text>
//             </View>
//             <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
//             <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
//               {
//                 Transactions.length > 0 && Transactions.map((item, index) => {
//                   return (
//                     <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
//                       <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
//                         {item.icon}
//                       </TouchableOpacity>
//                       <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
//                     </View>
//                   )
//                 })
//               }

//             </View>

//             <View style={{ marginBottom: 10, marginHorizontal: 20 }}>
//               <Text style={{ fontWeight: "600", fontSize: 15 }}>Other Transactions</Text>
//             </View>
//             <View style={{ height: 0.5, backgroundColor: "gray", marginHorizontal: 5 }}></View>
//             <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
//               {
//                 Others.length > 0 && Others.map((item, index) => {
//                   return (
//                     <View key={index} style={{ width: "25%", paddingVertical: 8 }}>
//                       <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#f0f7fc", paddingVertical: 15, marginHorizontal: 13, display: "flex", alignItems: "center" }}>
//                         {item.icon}
//                       </TouchableOpacity>
//                       <Text style={{ fontSize: 10, textAlign: "center", marginTop: 3 }}>{item.text}</Text>
//                     </View>
//                   )
//                 })
//               }

//             </View>

//           </View>
//         </ScrollView>
//       </View>
//     )
//   }
// }