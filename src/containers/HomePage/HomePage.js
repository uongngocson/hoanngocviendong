import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './HomePage1.scss'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'





class HomePage extends Component {

    render() {


        return (
            <div className='indochinaqueen-main'>
                <div className='indochinaqueen-header'>
                    <Header></Header>


                </div>
                <div className='indochinaqueen-body'>
                    <Body></Body>
                </div>
                <div className='indochinaqueen-footer'><Footer></Footer></div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
