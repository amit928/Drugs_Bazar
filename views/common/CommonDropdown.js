import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export class CommonDropdown extends Component {
    render() {
        return (
            <View>
                <Text style={{ marginBottom: 5 }}>{this.props.label}</Text>
                <TouchableOpacity style={{ ...styles.searchField, marginBottom: 10, paddingHorizontal: 10 }} onPress={() => this.props.onClick(true)}>

                    <Text style={{ width: "85%", fontSize: 14, }} >{this.props.selectedData ? this.props.selectedData : 'Select'}</Text>
                    <AntDesign name='down' size={17} style={{ marginRight: 10, color: "#8c80ff" }}></AntDesign>

                </TouchableOpacity>
                {/* <View style={{
                    position: "absolute", backgroundColor: 'white',
                    padding: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    zIndex: 5,
                    maxHeight: 180, 
                    width:"100%",
                    top: 80, borderRadius:5
                }}>


                    <ScrollView style={{ width: "100%", paddingHorizontal: 5 }}>
                        {
                            this.props.list.length > 0 && this.props.list.map((item, index) => {
                                return (
                                    <TouchableOpacity>
                                        <Text key={index} style={{ borderBottomColor: "gray", borderBottomWidth: 0.5, paddingVertical: 5 }}>{item}</Text>
                                    </TouchableOpacity>

                                )
                            })
                        }
                    </ScrollView>
                </View> */}

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.props.openDropdownStatus}
                        onRequestClose={() => {
                            this.props.onClick(false);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => this.props.onClick(false)} style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                    <Entypo name='cross' color={'#8c80ff'} size={25} />
                                </TouchableOpacity>
                                <ScrollView style={{ width: "90%", paddingHorizontal: 5 }}>
                                    {
                                        this.props.list.length > 0 && this.props.list.map((item, index) => {
                                            return (
                                                <TouchableOpacity key={index}
                                                    onPress={() => { this.props.onSelect(item); this.props.onClick(false); }}>
                                                    <Text style={{ borderBottomColor: "gray", borderBottomWidth: 0.5, paddingVertical: 15, fontSize: 20 }}
                                                    >{item}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchField: { width: "100%", alignSelf: "center", flexDirection: "row", borderWidth: 0.5, borderRadius: 5, borderColor: "#bfbfbf", display: "flex", alignItems: "center", height: 40 },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: "85%",
        maxHeight: "60%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingVertical: 20
    },
})

export default CommonDropdown