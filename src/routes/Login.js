import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        loginError: ''
    }

    state = {
        ...this.initialState
    };

    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);  // gửi một action lên redux bên dưới bạn có thẻ dung this.props.navigate()
    }

    // processLogin = () => {
    //     const { username, password } = this.state;

    //     const { adminLoginSuccess, adminLoginFail } = this.props;
    //     let loginBody = {
    //         username: 'admin',
    //         password: '123456'
    //     }
    //     //sucess
    //     let adminInfo = {
    //         "tlid": "0",
    //         "tlfullname": "Administrator",
    //         "custype": "A",
    //         "accessToken": "eyJhbGciOiJIU"
    //     }

    //     adminLoginSuccess(adminInfo);
    //     this.refresh();
    //     this.redirectToSystemPage();
    //     try {
    //         adminService.login(loginBody)
    //     } catch (e) {
    //         console.log('error login : ', e)
    //     }

    // }
    processLogin = () => {
        const { username, password } = this.state;
        const { adminLoginSuccess, adminLoginFail } = this.props;

        // Kiểm tra thông tin đăng nhập
        if (username === 'admin' && password === '12345') {
            // Nếu thông tin đúng, tiến hành đăng nhập
            let adminInfo = {
                "tlid": "0",
                "tlfullname": "Administrator",
                "custype": "A",
                "accessToken": "eyJhbGciOiJIU" // Access token giả lập
            }

            // Gọi hành động đăng nhập thành công
            adminLoginSuccess(adminInfo);
            this.refresh(); // Reset form
            this.redirectToSystemPage(); // Chuyển hướng đến trang hệ thống
        } else {
            // Nếu thông tin sai, hiển thị lỗi
            this.setState({ loginError: "Invalid username or password!" });
            adminLoginFail();
        }
    }





    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
            this.btnLogin.current.click();
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="form_login">
                        <h2 className="title">
                            <FormattedMessage id="login.login" />
                        </h2>
                        <div className="form-group icon-true">
                            <img className="icon" src={userIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("login.username", lang)}
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={this.onUsernameChange}
                            />
                        </div>

                        <div id="phone-input-container" className="form-group icon-true">
                            <img className="icon" src={passIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("login.password", lang)}
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={this.onPasswordChange}
                            />
                        </div>

                        {loginError !== '' && (
                            <div className='login-error'>
                                <span className='login-error-message'>{loginError}</span>
                            </div>
                        )}

                        <div className="form-group login">
                            <input
                                ref={this.btnLogin}
                                id="btnLogin"
                                type="submit"
                                className="btn"
                                value={LanguageUtils.getMessageByKey("login.login", lang)}
                                onClick={this.processLogin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
