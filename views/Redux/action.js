import { BASE_URL, db } from "../library/Constants";
import { DASHBOARD_DETAILS, DISTRIBUTORS_LIST, EXPIRY_PRODUCT_LIST, INVOICE_LIST, LOADING_END, LOADING_START, SHORT_EXPIRY_LIST } from "./actionType";
import * as RootNavigation from '../navigation/Rootnavigation.js';
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";


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

export function updateLoader(status) {
    return function (dispatch) {
        if (status) {
            dispatch({ type: LOADING_START })
        } else {
            dispatch({ type: LOADING_END })
        }
    }
}

export function getData() {
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        AsyncStorage.getItem("MyData").then((value) => {
            if (value !== null) {
                // RootNavigation.navigate('Drawer', 'Home')
                dispatch({ type: DASHBOARD_DETAILS, payload: JSON.parse(value) })

                dispatch({ type: LOADING_END })
            }
            else {
                dispatch({ type: LOADING_END })
                RootNavigation.navigate("Login")
            }
        });
    }
}

export function createTable(drugsBazarId, type) {
    return function (dispatch) {
        NetInfo.fetch().then(state => {
            internetStatus = state.isConnected
            if (state.isConnected == true) {
                dispatch({ type: LOADING_START })
                db.transaction((tx) => {
                    tx.executeSql(`DROP TABLE ${nameList(type).tableName}`)
                    tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS "
                        + `${nameList(type).tableName} `
                        + nameList(type).tableKeysType
                    )
                })
                dispatch(fetchDataList(drugsBazarId, type))
                dispatch({ type: LOADING_END })

            }
            else {
                dispatch(getOfflineData(type))
                dispatch({ type: LOADING_END })
            }
        });
    }

}

export const setData = (list, type) => {

    return function (dispatch) {
        dispatch({ type: LOADING_START })
        db.transaction(async (tx) => {
            list.length > 0 && list.map(async (item, index) => {
                await tx.executeSql(
                    `INSERT INTO ${nameList(type).tableName} ${nameList(type).tableKeys} VALUES ${nameList(type).tableQsMarks}`,
                    nameList(type, item).tableValues
                )
            })
        });
        dispatch({ type: LOADING_END })

        dispatch(getOfflineData(type))
    }

}

export const getOfflineData = (type) => {
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        var list = []
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM ${nameList(type).tableName}`,
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    for (var i = 0; i < len; i++) {
                        list.push(results.rows.item(i))
                    }

                    dispatch(setDataToRedux(list, type))
                    dispatch({ type: LOADING_END })
                }
            )
        })
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
                        dispatch({ type: DASHBOARD_DETAILS, payload: data.data[0] })
                    }
                    // RootNavigation.navigate('Drawer', 'Home')
                    RootNavigation.navigate('Home')

                }
                else
                    alert(data.msg)
            })
    }
}

export function fetchInvoiceList(id, type) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetch(`${BASE_URL}api/invoicelist/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.Code == '200') {
                    dispatch(setData(data.data_value, type))
                    dispatch({ type: INVOICE_LIST, payload: data.data_value })
                    dispatch({ type: LOADING_END })
                }
                else {
                    alert(data.msg)
                    dispatch({ type: LOADING_END })
                }
            })
    }
}

export function fetchShortExpiry(id, type) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetch(`${BASE_URL}api/shortexpiry/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.Code == '200') {
                    dispatch(setData(data.data_value, type))
                    dispatch({ type: SHORT_EXPIRY_LIST, payload: data.data_value })
                    dispatch({ type: LOADING_END })
                }
                else {
                    alert(data.msg)
                    dispatch({ type: LOADING_END })
                }
            })
    }
}

export function fetchExpiryProduct(id, type) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetch(`${BASE_URL}api/expiryproducts/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.Code == '200') {
                    dispatch(setData(data.data_value, type))
                    dispatch({ type: EXPIRY_PRODUCT_LIST, payload: data.data_value })
                    dispatch({ type: LOADING_END })
                }
                else {
                    alert(data.msg)
                    dispatch({ type: LOADING_END })
                }
            })
    }
}

export function fetchDistributorList(id, type) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "dbzrid": id,
            "dtyp": "1"
        })
    };
    return function (dispatch) {
        dispatch({ type: LOADING_START })
        fetch(`${BASE_URL}api/distributorslist`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.Code == '200') {
                    dispatch(setData(data.data_value, type))
                    dispatch({ type: DISTRIBUTORS_LIST, payload: data.data_value })
                    dispatch({ type: LOADING_END })
                }
                else {
                    alert(data.msg)
                    dispatch({ type: LOADING_END })
                }
            })
    }
}

export const setDataToRedux = (list, type) => {
    return function (dispatch) {
        dispatch({ type: nameList(type).actionTypeName, payload: list })
    }
}

export const nameList = (type, item = {}) => {
    switch (type) {
        case 'DistributorList':
            return { "actionTypeName": DISTRIBUTORS_LIST, 'tableName': 'Distributor_List', 'tableKeys': '(COMPID, COMPNAME, COMPTOWN, DRGBZRID)', 'tableQsMarks': '(?, ?, ?, ?)', tableValues: [item.COMPID, item.COMPNAME, item.COMPTOWN, item.DRGBZRID], tableKeysType: '(ID INTEGER PRIMARY KEY AUTOINCREMENT , COMPID INTEGER, COMPNAME TEXT, COMPTOWN TEXT, DRGBZRID TEXT);' }
        case 'Invoice':
            return { "actionTypeName": INVOICE_LIST, 'tableName': 'Invoice_List', 'tableKeys': '(dwnld, compname, comptown, invdt, invamt, invid, invno)', 'tableQsMarks': '(?, ?, ?, ?, ?, ?, ?)', tableValues: [item.dwnld, item.compname, item.comptown, item.invdt, item.invamt, item.invid, item.invno], tableKeysType: '(ID INTEGER PRIMARY KEY AUTOINCREMENT , dwnld INTEGER, compname TEXT, comptown TEXT, invdt TEXT, invamt INTEGER, invid INTEGER, invno TEXT);' }
        case 'ShortExpiry':
            return { "actionTypeName": SHORT_EXPIRY_LIST, 'tableName': 'Short_Expiry', 'tableKeys': '(batch_no, disrt, expmnth, free, invdt, invno, hsncode, mrp, pname, ppack, qty, rate, supplier, town)', 'tableQsMarks': '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', tableValues: [item.batch_no, item.disrt, item.expmnth, item.free, item.invdt, item.invno, item.hsncode, item.mrp, item.pname, item.ppack, item.qty, item.rate, item.supplier, item.town], tableKeysType: '(ID INTEGER PRIMARY KEY AUTOINCREMENT , batch_no TEXT, disrt INTEGER, expmnth TEXT, free INTEGER, invdt TEXT, invno TEXT, hsncode TEXT, mrp INTEGER, pname TEXT, ppack TEXT, qty INTEGER, rate INTEGER, supplier TEXT, town TEXT);' }
        case 'ExpiryProduct':
            return { "actionTypeName": EXPIRY_PRODUCT_LIST, 'tableName': 'Expiry_Product', 'tableKeys': '(batch_no, disrt, expmnth, free, invdt, invno, hsncode, mrp, pname, ppack, qty, rate, supplier, town)', 'tableQsMarks': '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', tableValues: [item.batch_no, item.disrt, item.expmnth, item.free, item.invdt, item.invno, item.hsncode, item.mrp, item.pname, item.ppack, item.qty, item.rate, item.supplier, item.town], tableKeysType: '(ID INTEGER PRIMARY KEY AUTOINCREMENT , batch_no TEXT, disrt INTEGER, expmnth TEXT, free INTEGER, invdt TEXT, invno TEXT, hsncode TEXT, mrp INTEGER, pname TEXT, ppack TEXT, qty INTEGER, rate INTEGER, supplier TEXT, town TEXT);' }
        default:
            break;
    }
}

export function fetchDataList(drugsBazarId, type) {
    return function (dispatch) {
        switch (type) {
            case 'DistributorList':
                dispatch(fetchDistributorList(drugsBazarId, type))
                break;
            case 'Invoice':
                dispatch(fetchInvoiceList(drugsBazarId, type))
                break;
            case 'ShortExpiry':
                dispatch(fetchShortExpiry(drugsBazarId, type))
                break;
            case 'ExpiryProduct':
                dispatch(fetchExpiryProduct(drugsBazarId, type))
                break;
            default:
                break;
        }
    }
}


