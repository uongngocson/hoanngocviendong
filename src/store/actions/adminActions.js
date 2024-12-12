import actionTypes from './actionTypes';

export const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})
export const adminLoginSuccess1 = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS1,
    adminInfo: adminInfo
})

export const adminLoginFail1 = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL1
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})


export const processLogoutsafter = () => ({
    type: actionTypes.PROCESS_LOGOUTAFTER
})

export const sentvaluePage = (pageNumbers) => ({
    type: actionTypes.PROCESS_TOTALPAGE,
    pageNumbers: pageNumbers
})

export const dataallanswer = (data) => ({
    type: actionTypes.PROCESS_ALLANSWER,
    data: data


    //HANDLEALLMENU


})
export const handleAllMenu = (data) => ({
    type: actionTypes.HANDLEALLMENU,
    data: data,
    //handleAllStateSave
})

export const handleAllStateSave = (dataDate, dataAdult, dataChild, dataAllMenu, dataCountChild) => ({
    type: actionTypes.HANDLEALLSTATESAVE,
    dataDate: dataDate,
    dataAdult: dataAdult,
    dataChild: dataChild,
    dataAllMenu: dataAllMenu,
    dataCountChild: dataCountChild


    //handleAllStateSave  statusBookingChildren
})
export const testStatus = (data) => ({
    type: actionTypes.HANDLETEST,
    data: data,
    //handleAllStateSave
})

export const statusBookingChildren = (data) => ({
    type: actionTypes.HANDLEBOOKINGCHILD,
    data: data,
    //handleAllStateSave chonseNewsClick
})

export const chonseNewsClick = (data) => ({
    type: actionTypes.CHONSENEW,
    data: data,
    //handleAllStateSave chonseNewsClick
})

export const resetStore = () => ({
    type: actionTypes.RESET_STORE
});

