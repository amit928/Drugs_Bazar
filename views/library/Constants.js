import { Dimensions } from "react-native"
import SQLite from 'react-native-sqlite-storage';

export const BASE_URL = 'https://protimes.co.in/dbapi/'

export const db = SQLite.openDatabase({
    name: "MainDB",
    location: "default"
  },
    () => { },
    error => { console.log(error) }
  );

export function validateTime(time) {
    var hour = time.getHours()
    var min = time.getMinutes()
    if (hour < 10) {
        hour = '0' + hour
    }
    return hour + ":" + min
}

export const SCREEN = {
    HEIGHT: Dimensions.get('window').height,
    WIDTH: Dimensions.get('window').width
}

export function formateDate(date) {
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var myDate = date.getDate();
    if (myDate < 10) {
        myDate = "0" + myDate;
    }
    return `${myDate}/${month}/${date.getUTCFullYear()}`;
};

export function formatDateTime(date) {
    var month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var myDate = date.getDate();
    if (myDate < 10) {
        myDate = "0" + myDate;
    }
    var hour = date.getHours()
    if (hour < 10) {
        hour = `0${hour}`
    }
    var minutes = date.getMinutes()
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    var seconds = date.getSeconds()
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${myDate}/${month}/${date.getFullYear()}, ${hour}:${minutes}:${seconds}`
}
