import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        const { checkLogin } = this.props
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/home'; // /system/user-manage
        let linkToRedirect1 = checkLogin ? '/home' : '/vi/login'; // /system/user-manage


        return (
            <React.Fragment>
                <Redirect to={linkToRedirect} />
                <Redirect to={linkToRedirect1} />

            </React.Fragment>





        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        checkLogin: state.admin.checkLogin

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
