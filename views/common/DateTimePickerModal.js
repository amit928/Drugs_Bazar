import { Modal, Text, View, Button } from 'react-native';
import React, { Component } from 'react';
import DatePickerModal from './DatePickerModal';
import { SCREEN } from '../library/Constants';

export default class DateTimePickerModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            time: ''
        }
    }

    componentWillUnmount = () => {
        this.setState({
            date: '',
            time: ''
        })
    }
    
    render() {
        return (
            <View>
                <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>

                    <View style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", width: "90%", height: "30%", borderRadius: 15 }}>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: "500", marginRight: 10 }}>{this.props.title} Task</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', display: "flex", marginHorizontal: 20 }}>
                            <View style={{ width: SCREEN.WIDTH / 2.5, padding: 5 }}>
                                <Text style={{ marginLeft: 5 }}>Select Date</Text>
                                <DatePickerModal
                                    value={this.props.mydate}
                                    onConfirm={(data) => { this.setState({ date: data }); this.props.date(data) }}
                                    placeholder='DD/MM/YY'
                                    onCancel={() => { }}
                                    mode="date"
                                />
                            </View>
                            <View style={{ width: SCREEN.WIDTH / 2.5, padding: 5 }}>
                                <Text style={{ marginLeft: 5 }}>Select Time</Text>
                                <DatePickerModal
                                    value={this.props.mytime}
                                    placeholder="HH:MM"
                                    onConfirm={(data) => { this.setState({ time: data }); this.props.time(data) }}
                                    onCancel={() => { }}
                                    mode="time"
                                />
                            </View>
                        </View>
                        <Button style={{ width: "82%", marginTop: 10 }} onPress={() => this.props.onSubmit()}>
                            <Text style={{ fontWeight: "bold", color: "white" }}>{this.props.title.toUpperCase()}</Text>
                        </Button>
                    </View>
                </Modal>
            </View>
        )
    }
}