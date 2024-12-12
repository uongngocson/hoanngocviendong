import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    checkLogin: false,
    pageNumbers: null,
    isLoggedInHomepage: false,
    dataallanswer: "test",
    dataAllMenu: "",
    idMenu: "",
    stateNumberTicket: 0,
    stateDate: "",
    countNumberChildTicket: 0,
    allMenuchosen: "",

    dataCountChild: "1",

    testStatus: "1234abc",
    statusBookingChildren: [],
    chosenews: ""



}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo,
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null,
            }
        case actionTypes.ADMIN_LOGIN_SUCCESS1:
            return {
                ...state,
                adminInfo: action.adminInfo,
                checkLogin: true,
                isLoggedInHomepage: true
            }
        case actionTypes.ADMIN_LOGIN_FAIL1:
            return {
                ...state,
                adminInfo: null,
                checkLogin: false
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUTAFTER:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_TOTALPAGE:
            return {
                ...state,
                pageNumbers: action.pageNumbers

            }
        case actionTypes.LOGOUT_HOME:
            return {
                ...state,
                isLoggedInHomepage: false

            }
        case actionTypes.PROCESS_ALLANSWER:
            return {
                ...state,
                dataallanswer: action.data

            }
        case actionTypes.HANDLEALLSTATESAVE:
            return {
                ...state,
                stateDate: action.dataDate,
                countNumberChildTicket: action.dataAdult,
                stateNumberTicket: action.dataChild,
                allMenuchosen: action.dataAllMenu,
                dataCountChild: action.dataCountChild



            }
        case actionTypes.HANDLEALLMENU:
            return {
                ...state,
                dataAllMenu: action.data,



            }
        case actionTypes.HANDLETEST:
            return {
                ...state,
                testStatus: action.data,



            }

        case actionTypes.HANDLEBOOKINGCHILD:
            return {
                ...state,
                statusBookingChildren: action.data,



            }

        case actionTypes.CHONSENEW:
            return {
                ...state,
                chosenews: action.data,



            }

        case actionTypes.RESET_STORE:
            return initialState; // Reset về trạng thái ban đầu
        // case 'persist/REHYDRATE': HANDLETEST
        //     return {
        //         ...state,
        //         rehydrated: true, // Đặt cờ khi khôi phục xong
        //     };
        //  stateNumberTicket: "",
        // stateDateChose: ""

        default:
            return state;
    }
}

export default appReducer;