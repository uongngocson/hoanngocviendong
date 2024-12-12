import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
    authenticatedSelector: state => state.admin.isLoggedIn,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/login'
});

export const userIsNotAuthenticated = connectedRouterRedirect({
    // Want to redirect the user when they are authenticated
    authenticatedSelector: state => !state.admin.isLoggedIn,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false
});


const locationHelpercase = locationHelperBuilder({});

export const userIsAuthenticatedcase1 = connectedRouterRedirect({
    authenticatedSelector: state => state.admin.checkLogin,
    wrapperDisplayName: 'UserIsAuthenticated',
    redirectPath: '/vi/login'
});

export const userIsNotAuthenticatedcase2 = connectedRouterRedirect({
    // Want to redirect the user when they are authenticated
    authenticatedSelector: state => !state.admin.checkLogin,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    redirectPath: (state, ownProps) => locationHelpercase.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false
});