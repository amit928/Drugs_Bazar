import { DASHBOARD_DETAILS, DISTRIBUTORS_LIST, DISTRIBUTORS_PRODUCT_COUNT, DISTRIBUTORS_PRODUCT_LIST, EXPIRY_PRODUCT_LIST, INVOICE_LIST, LOADING_END, LOADING_START, LOGIN_DETAILS, SALES_INVOICE_COUNT, SHORT_EXPIRY_LIST, } from "./actionType";

const initialState = {
    loading: false,
    dashboardDetails: {},
    loginDetails: {},
    invoiceList: [],
    profileData: {},
    taskReportList: [],
    shortExpiryList: [],
    expiryProductList: [],
    distributorsList: [],
    distributorsProductList: [],
    distributorsProductCount: [],
    salesInvoiceCount: []
};
const allInOneReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: true
            };
        case LOADING_END:
            return {
                ...state,
                loading: false
            };
        case DASHBOARD_DETAILS:
            return {
                ...state,
                dashboardDetails: action.payload
            };
        case LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload
            };
        case INVOICE_LIST:
            return {
                ...state,
                invoiceList: action.payload
            };
        case SHORT_EXPIRY_LIST:
            return {
                ...state,
                shortExpiryList: action.payload
            };
        case EXPIRY_PRODUCT_LIST:
            return {
                ...state,
                expiryProductList: action.payload
            };
        case DISTRIBUTORS_LIST:
            return {
                ...state,
                distributorsList: action.payload
            };
        case DISTRIBUTORS_PRODUCT_LIST:
            return {
                ...state,
                distributorsProductList: action.payload
            };
        case DISTRIBUTORS_PRODUCT_COUNT:
            return {
                ...state,
                distributorsProductCount: action.payload
            };
        case SALES_INVOICE_COUNT:
            return {
                ...state,
                salesInvoiceList: action.payload
            };
        default:
            return state;
    }
}
export default allInOneReducer;