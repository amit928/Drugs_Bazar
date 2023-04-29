import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../navigation/Rootnavigation.js';

const profile = require('../Image/profile.png')
const logo = require('../Image/logo_db.png')

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{ height: 30, width: 200 }}>
                        {
                            this.props.icon == 'back' ?
                                <View style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                                    <TouchableOpacity onPress={() => { RootNavigation.navigate('Home') }}>
                                        <Ionicons name='arrow-back' size={26} style={{ marginHorizontal: 5 }}></Ionicons>
                                    </TouchableOpacity>
                                    {
                                        this.props.header && <Text style={{fontWeight: "600", fontSize: 17, color: "black",}}>{this.props.header}</Text>
                                    }
                                </View>
                                :
                                <Image
                                    source={logo}
                                    style={{ flex: 1, alignSelf: "center", }} resizeMode="contain"
                                />
                        }
                    </View>
                    <View style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
                        <Ionicons name='settings-outline' size={17} ></Ionicons>
                        <Ionicons name='notifications-circle-outline' size={19} style={{ marginHorizontal: 8 }}></Ionicons>
                        <TouchableOpacity style={{ height: 40, width: 40 }} onPress={() => RootNavigation.navigate('Profile')}>
                            <Image
                                source={profile}
                                style={{ flex: 1, alignSelf: "center", }} resizeMode="contain"
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, paddingVertical: 3, }
})