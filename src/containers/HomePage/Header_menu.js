import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Header_menu.scss'
import logo from '../../assets/images/logo.png';
import banner from '../../assets/images/banner1.jpg';

import _ from 'lodash';
import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



class Header_menu extends Component {
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








    render() {
        console.log("kiểm tra isSticky", this.state.isSticky)


        return (
            <div id="top" className='indochinaqueen-header-menu'>
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
                            <div className='indochinaqueen-header-list2-text1'>Call us at: </div>
                            <div className='indochinaqueen-header-list2-text2'>09 48 17 00 36</div>





                        </div>




                    </div>
                    <header className='indochinaqueen-header-navbar1-box1'>
                        <Link to="/home"> <div className='indochinaqueen-header-list1'>
                            <div className='indochinaqueen-header-list1--logo'><img src={logo}></img></div>
                        </div></Link>
                        <div className='indochinaqueen-header-list2'>
                            <Link to="/home"><div className='header-hover-test'>Trang Chủ</div></Link>
                            <Link to="/vn/introduce"><div className='header-hover-test'>Giới thiệu</div></Link>

                            <Link to="/vn/booking"> <div className='header-hover-test'>Đặt đơn</div></Link>

                            <Link to="/vn/blog"> <div className='header-hover-test'>Tin tức</div></Link>

                            <Link to="/vn/contact"> <div className='header-hover-test'>Liên Hệ</div></Link>

                            <a href='https://www.facebook.com/antoitrenduthuyensaigon' className='header-hover-test'>Fanpage</a>

                            <Link to="/vn/blog"><div className=' indochinaqueen-header-list2-cartshop header-hover-test '>
                                <div className='indochinaqueen-header-list2-cartshop-1'>
                                    <img className='indochinaqueen-header-list2-cartshop-1-img' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/panier@2x.png.webp'></img>
                                    <div>ĐƠN
                                    </div>
                                </div>
                            </div>
                            </Link>
                            <div className='header-hover-choose-language'>
                                <div className='header-hover-choose-language-list1'>
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFnSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f0NIKPoFJH/9//ULyGaUlQXaABBALAx/Gf4zAt31F4i+ffj3/cN/XrFfzOx//v///f//LzACM/79ZmD8/e8TA0AAMYHdDVT958vXP38nMDB0s3x94/Tj5y+YahhiAKLfQKUAAcQEdtJfoDHMF2L+vPzDmFXLelf551tGFOOhev4A/QgQQExgHwAd8IdFT/Wz6j+GhlpmXSOW/2z///8Eq/sJ18Dw/zdQA0AAMQExxJjjdy9x2/76EfLz4MXdP/i+wsyGkkA3Aw3984cBIIAYfzIwMKel/bt3jwEaLNAwgZIQxp/fDH/+MqqovL14ESCAWICeZvr9h0FSEhSgwBgAygFDEMT+wwAhgQgc4kAEVAwQQIxfUSMSTxxDAECAAQAJWke8v4u1tAAAAABJRU5ErkJggg=='></img>
                                    <div className=''>VN <i class="fa-solid fa-caret-down"></i></div>

                                </div>
                                <div className='header-hover-choose-language-list2'>
                                    <div className='header-hover-choose-language-list2-item1'>
                                        <div className=''>VN</div>
                                        <div className=''><i class="fa-solid fa-caret-down"></i></div>

                                    </div>
                                    <div className='header-hover-choose-language-list2-item1'>
                                        <div className=''>EN</div>
                                        <div className=''><i class="fa-solid fa-caret-down"></i></div>

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

                </div>
                <div className='indochinaqueen-header-navbar2'>
                    <div className='indochinaqueen-header-navbar2-text1'>Book your Valentine's Day dinner  cruise now.</div>
                    <div className='indochinaqueen-header-navbar2-text2'> Book a cruise!</div>
                </div>
                <div className='indochinaqueen-header-navbar3'>
                    NEWS

                </div>

            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(Header_menu);
