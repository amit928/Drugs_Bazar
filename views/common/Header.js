import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as RootNavigation from '../navigation/Rootnavigation.js';

const profile = require('../Image/profile.png')

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity >
                            <Ionicons name='reorder-three' size={30}></Ionicons>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Ionicons name='search' size={15} style={{ marginLeft: 5, paddingTop: 8 }}></Ionicons>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
                        <Ionicons name='settings-outline' size={17} style={{ marginTop: 5 }}></Ionicons>
                        <Ionicons name='notifications-circle-outline' size={19} style={{ marginHorizontal: 8, marginTop: 5 }}></Ionicons>
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
    header: { backgroundColor: "white", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", paddingHorizontal: 10, paddingVertical: 2, }
})