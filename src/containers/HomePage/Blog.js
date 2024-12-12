import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Blog.scss'
import logo from '../../assets/images/logo.png';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import fanpage from '../../assets/images/fanpage.png';
import Header_menu from './Header_menu';
import Footer from './Footer';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions/index.js";





// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';
// import TextField from '@mui/material/TextField';




class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,
        };
    }

    choseNews = (event) => {
        // Lấy giá trị của thuộc tính 'data-name'
        const linkName = event.currentTarget.getAttribute('data-name');
        this.props.chonseNewsClick(linkName)
        console.log(linkName); // In ra tên của thẻ Link
    };


    render() {
        console.log("check props from chose news", this.props.propschosenews)


        return (


            <div class="indochinaqueen-main-blog">
                <div className='indochinaqueen-main-blog-header'>
                    <Header_menu></Header_menu>
                    <div className='indochinaqueen-main-blog-header-navbar'>
                        <div className='navbar-new1'>ALL</div>
                        <div className='navbar-new1'>COOKING</div>

                        <div className='navbar-new1'>VISIT HCM</div>

                        <div className='navbar-new1'>NEWS</div>

                        <div className='navbar-new1'>ALL</div>



                    </div>

                </div>
                <div className='indochinaqueen-main-body'>
                    <div className='indochinaqueen-main-body-box1'>
                        <div className='indochinaqueen-main-body-news1'>
                            <div className=''>All &gt;</div>
                            <div className=''>Blog &gt;</div>
                            <div className=''>Blog </div>
                        </div>
                        <Link data-name="new1" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new2" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new3" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new4" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new5" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new6" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new7" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new8" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new9" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>  <Link data-name="new1" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                        <Link data-name="new10" // Sử dụng data-name thay cho name

                            onClick={this.choseNews} to="/vn/indochinaqueen/news"><div className='indochinaqueen-main-body-news'>
                                <div className='indochinaqueen-main-body-news-item1'>
                                    <img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img>
                                </div>
                                <div className='indochinaqueen-main-body-news-item2'>
                                    <div className='indochinaqueen-main-body-news-item2-list1'>Affordable eats: 7 Michelin-recommended eateries in Da Nang</div>
                                    <div className='indochinaqueen-main-body-news-item2-list2'>The Michelin Guide made its debut in Da Nang in June, listing 35 restaurants and eateries, including 7 affordable establishments highlighted below.</div>
                                    <div className=''>Da Nang, known for its street food scene, shines with 7 affordable Michelin-recommended eateries, offering authentic flavors and exceptional value for both locals and tourists.</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='indochinaqueen-main-body-footer'>
                        <Footer></Footer>


                    </div>
                </div>

            </div>





        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        propschosenews: state.admin.chosenews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        chonseNewsClick: (data) => dispatch(actions.chonseNewsClick(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
