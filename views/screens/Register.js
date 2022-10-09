import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { BASE_URL } from '../library/Constants';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChecked: false,
            comptype: 1,
            name: "",
            address: "",
            phone: "",
            town: "",
            dlNo: "",
            gstNo: "",
            emailId: "",
            password: ""
        }
    }

    onRegister = () => {
        const { name, address, phone, town, dlNo, gstNo, emailId, password, comptype } = this.state

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "compname": name,
                    "compadd1": address,
                    "comptown": town,
                    "comptype": comptype,
                    "compdlno1": dlNo,
                    "tin": gstNo,
                    "mobile": phone,
                    "CompPwd": password,
                    "emailid": emailId
                }
            )
        };

        if (name !== '' && address !== '' && phone !== '' && town !== '' && dlNo !== '' && gstNo !== '' && emailId !== '' && password !== '') {
            fetch(`${BASE_URL}/api/Registration`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.Code == '200') {
                        alert("User Registered Successfully")
                        this.props.navigation.navigate('Login')
                    }
                    else
                        alert(data.msg)
                })
        }
        else {
            alert("Field Can't Be Blank.")
        }
    }


    render() {
        const { name, address, phone, town, dlNo, gstNo, emailId, password, comptype } = this.state

        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <Image source={require('../Image/logo_db.png')} style={{ width: "70%", height: 40 }} />
                </View>
                <ScrollView style={{ position: "relative", top:10 }}>
                    <View style={styles.form}>
                        <View style={{ width: "60%", alignSelf: "center", marginTop: "7%" }}>
                            <Text style={{ fontSize: 23, color: "#1b00ff", fontWeight: "bold", textAlign: "center" }}>Register To DrugsBazar</Text>
                        </View>

                        <View style={{ flexDirection: "row", paddingHorizontal: 15, marginTop: 15, display: "flex", justifyContent: "space-evenly" }}>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: comptype == 1 ? "#1b00ff" : "gray", padding: 15, borderRadius: 10, }} onPress={() => this.setState({ comptype: 1 })}>
                                <View style={{ display: "flex", alignItems: "center" }}>
                                    <SimpleLineIcons name="user" size={25} color="#1b00ff" />
                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={{ fontSize: 12, textAlign: "center" }}>I'm </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: "center", color: comptype == 1 ? "#1b00ff" : "black" }}>Retailer</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: comptype == 2 ? "#1b00ff" : "gray", padding: 15, borderRadius: 10, }} onPress={() => this.setState({ comptype: 2 })}>
                                <View style={{ display: "flex", alignItems: "center" }}>
                                    <SimpleLineIcons name="user" size={25} color="#1b00ff" />
                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={{ fontSize: 12, textAlign: "center" }}>I'm </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: "center", color: comptype == 2 ? "#1b00ff" : "black" }}>Whole Seller</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: comptype == 3 ? "#1b00ff" : "gray", padding: 15, borderRadius: 10, }} onPress={() => this.setState({ comptype: 3 })}>
                                <View style={{ display: "flex", alignItems: "center" }}>
                                    <SimpleLineIcons name="user" size={25} color="#1b00ff" />
                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={{ fontSize: 12, textAlign: "center" }}>I'm </Text>
                                    <Text style={{ fontSize: 12, fontWeight: "bold", textAlign: "center", color: comptype == 3 ? "#1b00ff" : "black" }}>Customer</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Name' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ name: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Address' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ address: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Town' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ town: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Phone No' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ phone: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='DL No' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ dlNo: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='GSTN No' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ gstNo: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Email Id' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ emailId: text })} />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput placeholder='Password' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ password: text })} />
                        </View>

                        <TouchableOpacity style={styles.signInButton} onPress={this.onRegister}>
                            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Register Now</Text>
                        </TouchableOpacity>

                        <Text style={{ textAlign: "center", marginTop: "3%", color: "gray" }}>OR</Text>
                        <Text style={{ textAlign: "center", marginTop: "1%", color: "gray" }}>Already Have An Account</Text>

                        <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: "#1b00ff", fontSize: 16, fontWeight: "bold" }}>Sign In</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView >
            </View >
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#ebeff3", height: "100%", width: "100%", position: "relative"
    },
    header: { width: "100%", height: "8%", alignSelf: "center", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
    form: {
        width: "90%", alignSelf: "center", backgroundColor: "#fff", borderRadius: 10, marginBottom: "17%"
    },
    textInput: { width: "85%", display: "flex", alignSelf: "center", flexDirection: "row", borderColor: "gray", borderWidth: 0.7, paddingHorizontal: 7, borderRadius: 7, marginTop: "5%" },
    signInButton: {
        width: "85%", alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1b00ff", paddingVertical: 12, borderRadius: 10, marginTop: "6%"
    },
    registerButton: {
        width: "85%", alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderColor: "#1b00ff", borderWidth: 0.7, paddingVertical: 12, borderRadius: 10, marginTop: "3%", marginBottom: "5%"
    }
})