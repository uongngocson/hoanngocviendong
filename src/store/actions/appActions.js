import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});
export const changelangue = (datainput) => ({

    type: actionTypes.LANGUAGE_CHANGE,
    data: datainput,



});

export const logouthomepage = () => ({

    type: actionTypes.LOGOUT_HOME,



});

