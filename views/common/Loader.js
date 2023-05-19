import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Loader extends Component {
  render() {
    
  // console.log(this.props.loading)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.loading}
      >
        <View style={styles.centeredView}>
          <ActivityIndicator size={'large'} />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});


export const mapStateToProps = (store) => {
  return {
    loading: store.allInOneReducer.loading,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
