import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';

// import 'themify-icons/css/themify-icons.css';

import { userIsAuthenticated, userIsAuthenticatedcase1, userIsNotAuthenticated, userIsNotAuthenticatedcase2 } from '../hoc/authentication';

import { path } from '../utils'

import ScrollToTop from './ScrollToTop';

import Home from '../routes/Home';
import Login from '../routes/Login';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import ConfirmModal from '../components/ConfirmModal';
import HomePage from './HomePage/HomePage.js';
import Blog from './HomePage/Blog.js';
import Booking from './HomePage/Booking.js';
import Booking_menu from './HomePage/Booking_menu.js';
import Thanhtoan from './HomePage/Thanhtoan.js'; //
import Qrthanhtoan from './HomePage/Qrthanhtoan.js';
import Blognews from './HomePage/Blognews.js';










class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        console.log(window.innerWidth + ' x ' + window.innerHeight);
        return (
            <Fragment>

                <Router history={history}>
                    <ScrollToTop /> {/* Đặt ở đây, ngay sau <Router> */}



                    <div className="main-container">
                        <ConfirmModal />
                        {/* {this.props.isLoggedIn && <Header />} */}

                        <span className="content-container">
                            <span className="content-container"> {/* Thanh cuộn sẽ áp dụng cho div này */}
                                {/* <div className='content-container-message'>sơn đẹp trai lắm nha châu</div> */}
                                <ScrollToTop />
                                <Switch>


                                    <Route path={path.HOME} exact component={(HomePage)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={path.HOMEPAGE} component={HomePage} />
                                    <Route path={path.BLOG} component={Blog} />
                                    <Route path={path.BOOKING} component={Booking} />
                                    <Route path={path.BOOKINGMENU} component={Booking_menu} />
                                    <Route path={path.THANHTOAN} component={Thanhtoan} />
                                    <Route path={path.QRTHANHTOAN} component={Qrthanhtoan} />
                                    <Route path={path.BLOGNEWS} component={Blognews} />



                                </Switch>
                            </span>
                        </span>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);