import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { rowsPerPage } from '../library/Constants'

class Pagination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1
        }
    }
    render() {
        return (
            <View style={{ marginTop: 10, marginLeft: 10 }}>

                <Text style={{fontWeight:"500"}}>Total Items : {this.props.listCount}</Text>
                {
                    this.props.listCount > rowsPerPage &&
                    <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={{ padding: 5, backgroundColor: "#e8e6ff", borderWidth: 0.5 }}
                            onPress={() => {
                                this.state.currentPage > 1 && this.props.onPress(this.state.currentPage - 1);
                                this.state.currentPage > 1 && this.setState({ currentPage: this.state.currentPage - 1 })
                            }}><Text> {`< Prev`}</Text></TouchableOpacity>

                        <Text style={{ padding: 5, paddingHorizontal: 10, borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>{this.state.currentPage}</Text>

                        <TouchableOpacity onPress={() => {
                            this.state.currentPage * rowsPerPage < this.props.listCount && this.props.onPress(this.state.currentPage + 1);
                            this.state.currentPage * rowsPerPage < this.props.listCount && this.setState({ currentPage: this.state.currentPage + 1 })
                        }}
                            style={{ padding: 5, backgroundColor: "#e8e6ff", borderWidth: 0.5 }}><Text>{"Next >"}</Text></TouchableOpacity>
                    </View>
                }

            </View>
        )
    }
}



export const mapStateToProps = (store) => {
    return {
        listCount: store.allInOneReducer.listCount,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);