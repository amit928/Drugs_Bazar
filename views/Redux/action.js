import { BASE_URL } from "../Constants";
import { DASHBOARD, LOGIN_DETAILS, PROFILE_DATA, TASK_LIST, TASK_REPORT } from "./actionType";
import * as RootNavigation from '../Rootnavigation.js';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const _storeData = async (data) => {
    try {
        await AsyncStorage.setItem(
            'MyData',
            JSON.stringify(data)
        );
    } catch (error) {
        // Error saving data
    }
};

export function getData() {
    return function (dispatch) {
        AsyncStorage.getItem("MyData").then((value) => {
            if (value !== null) {
                // RootNavigation.navigate('Drawer', 'Home')
                RootNavigation.navigate('Home')

            }
            else {
                RootNavigation.navigate("Login")
            }
        });
    }
}

export function onLogin(body, isChecked) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    };
    return function (dispatch) {
        fetch(`${BASE_URL}/api/login`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.Code == '200') {
                    if (isChecked) {
                        _storeData(data.data[0])
                    }
                    // RootNavigation.navigate('Drawer', 'Home')
                    RootNavigation.navigate('Home')

                }
                else
                    alert(data.msg)
            })
    }
}


export function fetchDistributorList() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return function (dispatch) {
        fetch(`${BASE_URL}api/distributorslist`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("data", data)

                // if (data.Code == '200') {
                //     console.log("data", data)
                // }
                // else
                //     alert(data.msg)
            })
    }
}
