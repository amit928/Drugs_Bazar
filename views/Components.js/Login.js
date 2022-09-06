import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BASE_URL } from '../Constants'
import { connect } from 'react-redux'
import { onLogin } from '../Redux/action'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChecked: false,
            userID: "",
            password: ""
        }
    }
    onLogin = () => {
        if (this.state.userID.trim() !== '' && this.state.password.trim() !== '') {
            var body = JSON.stringify({ "userid": this.state.userID, "password": this.state.password })
            this.props.onLogin(body, this.state.isChecked)
        }
        else {
            alert("Please fill the input field")
        }
    }

    render() {
        return (
            <View style={styles.body}>
                {/* <StatusBar backgroundColor={'white'} /> */}
                <View style={styles.header}>
                    <Image source={require('../Image/logo_db.png')} style={{ width: "70%", height: 40 }} />
                </View>
                <View style={styles.imageStyle}>
                    <Image source={require('../Image/login_page_image.png')} style={{ width: "100%", height: "80%" }} />
                </View>
                <View style={styles.form}>
                    <View style={{ width: "60%", alignSelf: "center", marginTop: "7%" }}>
                        <Text style={{ fontSize: 23, color: "#1b00ff", fontWeight: "bold", textAlign: "center" }}>Login To DrugsBazar</Text>
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder='User Name' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ userID: text })} />
                        <EvilIcons name="user" size={32} color="gray" />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder='Password' placeholderTextColor={"gray"} style={{ width: "80%", marginLeft: "6%" }} onChangeText={(text) => this.setState({ password: text })} secureTextEntry />
                        <EvilIcons name="lock" size={32} color="gray" />
                    </View>
                    <View style={styles.forgotPassword}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => this.setState({ isChecked: !this.state.isChecked })}>
                                {
                                    this.state.isChecked ?
                                        <MaterialCommunityIcons name="checkbox-marked" size={22} style={{ marginRight: 10 }} /> :
                                        <MaterialCommunityIcons name="checkbox-blank-outline" size={22} style={{ marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                            <Text>Remember</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.signInButton} onPress={this.onLogin}>
                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={{ textAlign: "center", marginTop: "3%", color: "gray" }}>OR</Text>
                    <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{ color: "#1b00ff", fontSize: 16, fontWeight: "bold" }}>Register To Create Account</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#ebeff3", height: "100%", width: "100%", position: "relative"
    },
    header: { width: "100%", height: "8%", alignSelf: "center", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", top: "5%" },
    imageStyle: { width: "95%", height: "35%", alignSelf: "center", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", top: "2%", },
    form: {
        width: "90%", alignSelf: "center", position: "relative", backgroundColor: "#fff", borderRadius: 10, height: "55%"
    },
    textInput: { width: "85%", display: "flex", alignSelf: "center", flexDirection: "row", borderColor: "gray", borderWidth: 0.7, padding: 7, borderRadius: 7, marginTop: "9%", paddingVertical: 9 },
    forgotPassword: {
        width: "85%", display: "flex", alignSelf: "center", flexDirection: "row", justifyContent: "space-between", marginTop: "6%"
    },
    signInButton: {
        width: "85%", alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#1b00ff", paddingVertical: 12, borderRadius: 10, marginTop: "6%"
    },
    registerButton: {
        width: "85%", alignSelf: "center", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", borderColor: "#1b00ff", borderWidth: 0.7, paddingVertical: 12, borderRadius: 10, marginTop: "3%"
    }
})

export const mapStateToProps = () => {
    return {

    };
}

export const mapDispatchToProps = dispatch => {
    return {
        onLogin: (body, isChecked) => dispatch(onLogin(body, isChecked))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);