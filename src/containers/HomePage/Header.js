import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Header.scss'
import logo from '../../assets/images/logo.png';
import _ from 'lodash';
import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { logouthomepage } from "../../store/actions"
import { FormattedMessage } from 'react-intl';
import { changelangue } from "../../store/actions"
import { LANGUAGES } from "../../utils"




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
        };
        this.headerRef = null;
        this.observer = null;
    }


    componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && !this.state.isSticky) {
                    // Khi header rời khỏi viewport hoàn toàn
                    this.setState({ isSticky: true });
                } else if (entry.isIntersecting && this.state.isSticky) {
                    // Khi header quay lại viewport
                    this.setState({ isSticky: false });
                }
            },
            {
                root: null, // Theo dõi so với viewport
                threshold: 0, // Header rời viewport hoàn toàn
            }
        );

        this.headerRef = document.querySelector('header.indochinaqueen-header-navbar1-box1');
        if (this.headerRef) {
            observer.observe(this.headerRef); // Theo dõi header
        }

        this.observer = observer; // Lưu reference để hủy theo dõi sau này
    }

    componentWillUnmount() {
        if (this.headerRef && this.observer) {
            this.observer.unobserve(this.headerRef); // Hủy theo dõi header
        }
    }

    // Hàm xử lý sự kiện click để cuộn trang về đầu

    //chuyển language
    handleloginenglish = (language) => {
        this.props.changelanguageget(language)



    }








    render() {
        console.log("kiểm tra isSticky", this.state.isSticky)

        console.log('check language', this.props.language)


        return (
            <div id="top" className='indochinaqueen-header'>
                <div className='indochinaqueen-header-navbar1'>
                    <div className={`indochinaqueen-header-navbar1-box-sticky ${this.state.isSticky ? 'show' : ''}`}>
                        <div className='indochinaqueen-header-list1'>
                            <div className='indochinaqueen-header-list1--logo'><img src={logo}></img></div>
                            <ScrollIntoView selector="#top">
                                <div className='indochinaqueen-header-list1--menu'>
                                    <div className=''><i class="fa-solid fa-arrow-up"></i></div>

                                    <div className=''>MENU</div>


                                </div>  </ScrollIntoView>

                        </div>
                        <div className='indochinaqueen-header-list2'>


                            <div className='indochinaqueen-header-list2-text1'>Call us at:
                            </div>
                            <div className='indochinaqueen-header-list2-text2'>09 48 17 00 36</div>





                        </div>




                    </div>
                    <header className='indochinaqueen-header-navbar1-box1'>
                        <Link to="/home"> <div className='indochinaqueen-header-list1'>
                            <div className='indochinaqueen-header-list1--logo'><img src={logo}></img></div>
                        </div></Link>
                        <div className='indochinaqueen-header-list2'>
                            <Link to="/home"><div className='header-hover-test'> <FormattedMessage id="common.home" /></div></Link>
                            <Link to="/vn/introduce"><div className='header-hover-test'>Giới thiệu</div></Link>

                            <Link to="/vn/booking"> <div className='header-hover-test'>Đặt đơn</div></Link>

                            <Link to="/vn/blog"> <div className='header-hover-test'>Tin tức</div></Link>

                            <Link to="/vn/contact"> <div className='header-hover-test'>Liên Hệ</div></Link>

                            <a href='https://www.facebook.com/antoitrenduthuyensaigon' className='header-hover-test'>Fanpage</a>

                            <div className=' indochinaqueen-header-list2-cartshop header-hover-test '>
                                <div className='indochinaqueen-header-list2-cartshop-1'>
                                    <img className='indochinaqueen-header-list2-cartshop-1-img' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/panier@2x.png.webp'></img>
                                    <div>ĐƠN
                                        {/* <div className='loginenglish' onClick={() => this.handleloginenglish(LANGUAGES.VI)}>VI</div>
                                        <div className='loginenglish' onClick={() => this.handleloginenglish(LANGUAGES.EN)}>EN</div> */}

                                    </div>
                                </div>
                            </div>

                            <div className='header-hover-choose-language'>
                                <div className='header-hover-choose-language-list1'>
                                    {this.props.language == "vi" &&
                                        <React.Fragment>
                                            <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg'></img>
                                            <div className=''>VN <i class="fa-solid fa-caret-down"></i>
                                            </div>
                                        </React.Fragment>
                                    }
                                    {this.props.language == "en" && <React.Fragment>

                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/831d31936756640eb504e6f8b952b87c.svg'></img>
                                        <div className=''>EN
                                            <i class="fa-solid fa-caret-down"></i>
                                        </div>
                                    </React.Fragment>

                                    }


                                </div>
                                <div className='header-hover-choose-language-list2'>

                                    <div onClick={() => this.handleloginenglish(LANGUAGES.VI)} className='header-hover-choose-language-list2-item1'>
                                        <div className='header-hover-choose-language-list2-item1-text1'><img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg'></img></div>
                                        <div className='header-hover-choose-language-list2-item1-text2'>VN</div>

                                    </div>
                                    <div onClick={() => this.handleloginenglish(LANGUAGES.EN)} className='header-hover-choose-language-list2-item1'>
                                        <div className='header-hover-choose-language-list2-item1-text1'><img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/831d31936756640eb504e6f8b952b87c.svg'></img></div>
                                        <div className='header-hover-choose-language-list2-item1-text2'>EN</div>

                                    </div>

                                </div>
                            </div>





                        </div>




                    </header >
                    <div className='indochinaqueen-header-navbar1-box2'>
                        <div className='indochinaqueen-header-navbar1-box2-text'>Your restaurant for lunch and dinner on a cruise through Paris</div>
                        <div className='indochinaqueen-header-navbar1-box2-text'>Call us: (+84) 09 48 17 00 36
                        </div>
                    </div>

                </div >
                <div className='indochinaqueen-header-navbar2'>
                    <div className='indochinaqueen-header-navbar2-text1'>Book your Valentine's Day dinner  cruise now.</div>
                    <Link to="/vn/booking"><div className='indochinaqueen-header-navbar2-text2'> Book a cruise!</div></Link>
                </div>
                <div className='indochinaqueen-header-navbar3'>
                    Our restaurant-cruises on the Seine

                </div>

            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changelanguageget: (language) => dispatch(changelangue(language)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
