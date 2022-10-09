import React, { Component } from 'react';
import { Button, Image, ImageBackground, StatusBar, Text, View } from 'react-native';
const logo = require('../Image/DrugsBazarLogo.png')
const background = require('../Image/background.jpg')
import { connect } from 'react-redux';
import { getData } from '../Redux/action';
import NetInfo from "@react-native-community/netinfo";
import * as RootNavigation from '../navigation/Rootnavigation.js';

class SplashScreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            // NetInfo.fetch().then(state => {
            //     if (state.isConnected == true) {
            this.props.getData();
            // }
            // else{
            RootNavigation.navigate('Home')
            // }
            // });
        }, 3000);
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <StatusBar backgroundColor="#1b00ff" />
                <ImageBackground source={background} resizeMode="cover" style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center" }}>
                    <Image
                        source={logo}
                        style={{ width: 200, height: 200, alignSelf: "center", marginBottom: 100 }} resizeMode="contain"
                    />
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = store => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);