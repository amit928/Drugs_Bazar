import { BackHandler, Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../common/Header';

class DistributorOrder extends Component {

    
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
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
        <Header icon={'back'} header={'Distributors Order'} />
        <Text>DistributorOrder</Text>
      </View>
    )
  }
}

export default DistributorOrder;