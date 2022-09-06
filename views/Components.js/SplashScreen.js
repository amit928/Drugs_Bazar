import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Image, Text, View } from 'react-native';
// import { getData } from '../redux/action';
const logo = require('../Image/splashLogo.png')
import { connect } from 'react-redux';
import { getData } from '../Redux/action';

class SplashScreen extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            this.props.getData()
        }, 3000);
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
                    <Image
                        source={logo}
                        style={{ flex: 1, alignSelf: "center",  }} resizeMode="contain"
                    />

                </View>
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