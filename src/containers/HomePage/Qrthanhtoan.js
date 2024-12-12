import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Qrthanhtoan.scss'
import menu1 from '../../assets/images/menu1.jpg';
import qr_code from '../../assets/images/Qr_code.jpg';

import _ from 'lodash';
import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header_menu from './Header_menu';
import Footer from './Footer';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import * as actions from "../../store/actions/index.js";
import logo from '../../assets/images/logo.png';
import axios from 'axios';










class Qrthanhtoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
            hovermenu1: 0,
            hovermenu2: "",
            hovermenu3: "",
            hovermenu4: "",
            hovermenu5: 0,
            hovermenu6: "",
            hovermenu7: "",
            hovermenu8: "",

            chose1: 0,
            chose2: "",
            chose3: "",
            chose4: "",
            chose5: "",

            countNumberTicket: 0,

            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,

            describe: true,
            comment: false,

            //
            allMenuIndo: "",
            idMenu: "",
            dataMenuBooking: [],



            testdate: "123",

            //
            amount: '',
            accountNumber: '',
            accountName: '',
            description: '',
            txnId: '',
            qrCode: '',

            //
            seconds: 5, // Số giây đếm ngược ban đầu
            countClock: false




        };
        this.headerRef = null;
        this.observer = null;
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleGenerateQRCode = async () => {
        const { amount, accountNumber, accountName, description, txnId } = this.state;
        try {
            const response = await axios.post('http://localhost:3001/generate-qrcode', {
                amount,
                accountNumber,
                accountName,
                description,
                txnId
            });
            this.setState({ qrCode: response.data.qrCode });
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    };

    handleChange = (date, dateString) => {
        console.log(date, dateString); // In ra đối tượng ngày và chuỗi ngày
        this.setState({ date });
    };
    handleChangePrev = () => {
        if (this.state.hovermenu1 === 0) {
            this.setState({
                hovermenu4: 3,
                hovermenu1: "",
                hovermenu2: "",
                hovermenu3: "",
            })
        } else if (this.state.hovermenu2 === 1) {
            this.setState({
                hovermenu4: "",
                hovermenu1: 0,
                hovermenu2: "",
                hovermenu3: "",
            })


        } else if (this.state.hovermenu3 === 2) {
            this.setState({
                hovermenu4: "",
                hovermenu1: "",
                hovermenu2: 1,
                hovermenu3: "",
            })

        } else if (this.state.hovermenu4 === 3) {
            this.setState({
                hovermenu4: "",
                hovermenu1: "",
                hovermenu2: "",
                hovermenu3: 2,
            })

        }


    }
    handleDot = (event) => {
        const hoverId = event.target.getAttribute('data-hover-id');
        console.log("check hoverID", hoverId);

        // Đối tượng ánh xạ hoverId tới các giá trị cần thiết
        const hoverValues = {
            hover1: { hovermenu1: 0, hovermenu2: "", hovermenu3: "", hovermenu4: "" },
            hover2: { hovermenu1: "", hovermenu2: 1, hovermenu3: "", hovermenu4: "" },
            hover3: { hovermenu1: "", hovermenu2: "", hovermenu3: 2, hovermenu4: "" },
            hover4: { hovermenu1: "", hovermenu2: "", hovermenu3: "", hovermenu4: 3 },

            //
            hover5: { hovermenu5: 0, hovermenu6: "", hovermenu7: "", hovermenu8: "" },
            hover6: { hovermenu5: "", hovermenu6: 1, hovermenu7: "", hovermenu8: "" },
            hover7: { hovermenu5: "", hovermenu6: "", hovermenu7: 2, hovermenu8: "" },
            hover8: { hovermenu5: "", hovermenu6: "", hovermenu7: "", hovermenu8: 3 },


            //
            choseboatIndo: { chose1: 0, chose2: "", chose3: "", chose4: "", chose5: "" },
            choseboatHN: { chose1: "", chose2: 1, chose3: "", chose4: "", chose5: "" },
            choseJy: { chose1: "", chose2: "", chose3: 3, chose4: "", chose5: "" },
            choseNews: { chose1: "", chose2: "", chose3: "", chose4: 4, chose5: "" },
            choseAll: { chose1: "", chose2: "", chose3: "", chose4: "", chose5: 5 },



        };

        // Kiểm tra hoverId có tồn tại trong đối tượng hoverValues
        if (hoverValues[hoverId]) {
            // Cập nhật state bằng cách lấy giá trị từ đối tượng hoverValues
            this.setState(hoverValues[hoverId]);
        }
    }

    test = () => {
        console.log("như cc")
    }
    handleChangeNext = () => {
        if (this.state.hovermenu1 === 0) {
            this.setState({
                hovermenu1: "",
                hovermenu2: this.state.hovermenu1 + 1,
                hovermenu3: "",
                hovermenu4: ""



            })

        } else if (this.state.hovermenu2 === 1) {
            this.setState({
                hovermenu1: "",
                hovermenu3: this.state.hovermenu2 + 1,
                hovermenu2: "",
                hovermenu4: ""

            })
        } else if (this.state.hovermenu3 === 2) {
            this.setState({
                hovermenu1: "",
                hovermenu4: this.state.hovermenu3 + 1,
                hovermenu2: "",
                hovermenu3: "",

            })

        } else if (this.state.hovermenu4 === 3) {
            this.setState({
                hovermenu1: 0,
                hovermenu4: "",
                hovermenu2: "",
                hovermenu3: "",

            })

        }




        console.log("check hovermenu1", this.state.hovermenu1)
        console.log("check hovermenu2", this.state.hovermenu2)
        console.log("check hovermenu3", this.state.hovermenu3)
        console.log("check hovermenu4", this.state.hovermenu4)



    }
    handleChangeNext1 = () => {
        if (this.state.hovermenu5 === 0) {
            this.setState({
                hovermenu5: "",
                hovermenu6: this.state.hovermenu5 + 1,
                hovermenu7: "",
                hovermenu8: ""



            })

        } else if (this.state.hovermenu6 === 1) {
            this.setState({
                hovermenu5: "",
                hovermenu7: this.state.hovermenu6 + 1,
                hovermenu6: "",
                hovermenu8: ""

            })
        } else if (this.state.hovermenu7 === 2) {
            this.setState({
                hovermenu5: "",
                hovermenu8: this.state.hovermenu7 + 1,
                hovermenu6: "",
                hovermenu7: "",

            })

        } else if (this.state.hovermenu8 === 3) {
            this.setState({
                hovermenu5: 0,
                hovermenu8: "",
                hovermenu6: "",
                hovermenu7: "",

            })

        }




        console.log("check hovermenu1", this.state.hovermenu1)
        console.log("check hovermenu2", this.state.hovermenu2)
        console.log("check hovermenu3", this.state.hovermenu3)
        console.log("check hovermenu4", this.state.hovermenu4)



    }
    handleChangePrev1 = () => {
        if (this.state.hovermenu5 === 0) {
            console.log("test sơn đẹp trai")
            this.setState({
                hovermenu8: 3,
                hovermenu5: "",
                hovermenu6: "",
                hovermenu7: "",
            })
        } else if (this.state.hovermenu6 === 1) {
            this.setState({
                hovermenu8: "",
                hovermenu5: 0,
                hovermenu6: "",
                hovermenu7: "",
            })


        } else if (this.state.hovermenu7 === 2) {
            this.setState({
                hovermenu8: "",
                hovermenu5: "",
                hovermenu6: 1,
                hovermenu7: "",
            })

        } else if (this.state.hovermenu8 === 3) {
            this.setState({
                hovermenu8: "",
                hovermenu5: "",
                hovermenu6: "",
                hovermenu7: 2,
            })

        }


    }


    componentDidMount() {


        const allMenu = [
            { name: "BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", gia: "499.000", },
            { name: "BUFFET TẦNG 2-TÀU INDOCHINA QUEEN", gia: "550.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
            { name: "SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "650.000", },

            //
            { name: "SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "650.000", },
            { name: "SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "750.000", },
            { name: "SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "750.000", },
            { name: "SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "850.000", },

            //
            { name: "SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "850.000", },
            { name: "SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "950.000", },
            { name: "SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "950.000", },
            { name: "SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.100.000", },

            //
            { name: "SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.300.000", },
            { name: "SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.500.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
        ];

        const menuMapping = {
            1: Object.values(allMenu[0]), // Mapping giá trị `1` tới allMenu[0]
            2: Object.values(allMenu[1]),
            3: Object.values(allMenu[2]),
            4: Object.values(allMenu[3]),

            5: Object.values(allMenu[4]), // Mapping giá trị `1` tới allMenu[0]
            6: Object.values(allMenu[5]),
            7: Object.values(allMenu[6]),
            8: Object.values(allMenu[7]),

            9: Object.values(allMenu[8]), // Mapping giá trị `1` tới allMenu[0]
            10: Object.values(allMenu[9]),
            11: Object.values(allMenu[10]),
            12: Object.values(allMenu[11]),

            13: Object.values(allMenu[12]), // Mapping giá trị `1` tới allMenu[0]
            14: Object.values(allMenu[13]),
            15: Object.values(allMenu[14]),
            16: Object.values(allMenu[15]),



            // Thêm nhiều điều kiện khác
            default: ["BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", "499.000 đ"],
        };


        const dataMenuBooking = menuMapping[this.props.dataAllMenu] || menuMapping.default;
        console.log('check ánh xạ', dataMenuBooking)
        console.log("check ánh xạ props", this.props.dataAllMenu)

        this.setState({ dataMenuBooking });



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
    componentDidUpdate(prevProps, prevState) {

        const allMenu = [
            { name: "BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", gia: "499.000", },
            { name: "BUFFET TẦNG 2-TÀU INDOCHINA QUEEN", gia: "550.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
            { name: "SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "650.000", },

            //
            { name: "SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "650.000", },
            { name: "SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "750.000", },
            { name: "SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "750.000", },
            { name: "SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "850.000", },

            //
            { name: "SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "850.000", },
            { name: "SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "950.000", },
            { name: "SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "950.000", },
            { name: "SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.100.000", },

            //
            { name: "SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.300.000", },
            { name: "SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN", gia: "1.500.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", gia: "600.000", },
        ];

        const menuMapping = {
            1: allMenu[0],
            2: allMenu[1],
            3: allMenu[2],
            4: allMenu[3],

            5: allMenu[4],
            6: allMenu[5],
            7: allMenu[6],
            8: allMenu[7],

            9: allMenu[8],
            10: allMenu[9],
            11: allMenu[10],
            12: allMenu[11],

            13: allMenu[12],
            14: allMenu[13],
            15: allMenu[14],
            16: allMenu[15],



            // Thêm các giá trị khác tại đây
            // 3: allMenu[2],
            // 4: allMenu[3],
        };

        if (prevProps.dataAllMenu !== this.props.dataAllMenu) {
            const selectedMenu = menuMapping[this.props.dataAllMenu]; // Lấy menu dựa trên giá trị `dataAllMenu`

            if (selectedMenu) { // Kiểm tra nếu tồn tại giá trị trong mapping
                const array = Object.values(selectedMenu);
                this.setState({ dataMenuBooking: array });
            }
        }

        // if (prevState.date !== this.state.date) {
        //     this.props.allStateSave(this.state.date, this.state.countNumberTicket)

        // }
        // if (prevState.countNumberTicket !== this.state.countNumberTicket) {
        //     this.props.allStateSave(this.state.date, this.state.countNumberTicket)

        // }
        //stateNumberTicketprint: state.admin.stateNumberTicket,
        //stateDateChoseprint


    }

    componentWillUnmount() {
        if (this.headerRef && this.observer) {
            this.observer.unobserve(this.headerRef); // Hủy theo dõi header
        }
        clearInterval(this.timer);

    }
    //changle date

    handleChange = (date, dateString) => {
        console.log(date, dateString); // In ra đối tượng ngày và chuỗi ngày
        this.setState({ date });
    };

    // Hàm xử lý sự kiện click để cuộn trang về đầu
    // Xử lý add 
    handleSubtract = () => {
        const count = this.state.countNumberTicket - 1
        if (count > 0)
            this.setState({
                countNumberTicket: count

            })

    }
    handleAdd = () => {
        const count = this.state.countNumberTicket + 1
        this.setState({
            countNumberTicket: count

        })

    }
    // handle comment
    comment = () => {
        this.setState({
            describe: false,
            comment: true



        })


    }

    describe = () => {
        this.setState({
            describe: true,
            comment: false
        })


    }

    disabledDate = (current) => {
        // Disable tất cả các ngày trước hôm nay
        return current && current < moment().startOf('day');
    };
    startCountdown = () => {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.seconds > 0) {
                    return { seconds: prevState.seconds - 1 };
                } else {
                    clearInterval(this.timer); // Dừng bộ đếm khi đếm xong
                    return { seconds: 0 };
                }
            });
        }, 1000); // Cập nhật mỗi 1 giây
    };

    handleRequestBank = () => {
        this.setState({
            countClock: true
        })


    }










    render() {
        if (1 > 2) {
            return <div>Loading...</div>; // Hiển thị loading trong khi chờ dữ liệu khôi phục
        }




        //
        const { amount, accountNumber, accountName, description, txnId, qrCode } = this.state;



        return (

            <div class="indochinaqueen-main-thanhtoanQr">
                <div className='indochinaqueen-main-blog-header'>
                    <div id="top" className='indochinaqueen-header-menu-thanhtoan'>
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

                                    <Link to="/vn/booking"> <div className='header-hover-test'>Đặt hàng</div></Link>

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

                        <div className='indochinaqueen-header-navbar3'>
                            NEWS

                        </div>

                    </div >
                    <div className='indochinaqueen-main-blog-header-navbar'>
                        <div onClick={this.handleDot} data-hover-id="choseboatIndo" className={this.state.chose1 === 0 ? " navbar-new1 navbar-new1 navbar-new1-active-color" : "navbar-new1"} >TÀU INDOCHINA QUEEN</div>
                        <div onClick={this.handleDot} data-hover-id="choseboatHN" className={this.state.chose2 === 1 ? " navbar-new1 navbar-new1 navbar-new1-active-color" : "navbar-new1"}>TÀU NỮ HOÀNG ĐÔNG DƯƠNG</div>

                        <div onClick={this.handleDot} data-hover-id="choseJy" className={this.state.chose3 === 3 ? " navbar-new1 navbar-new1 navbar-new1-active-color" : "navbar-new1"}>LỘ TRÌNH</div>

                        <div onClick={this.handleDot} data-hover-id="choseNews" className={this.state.chose4 === 4 ? " navbar-new1 navbar-new1 navbar-new1-active-color" : "navbar-new1"}>NEWS</div>

                        <div onClick={this.handleDot} data-hover-id="choseAll" className={this.state.chose5 === 5 ? " navbar-new1 navbar-new1 navbar-new1-active-color" : "navbar-new1"}>ALL</div>


                    </div>

                </div>
                <div className='indochinaqueen-main-body'>
                    <div className='indochinaqueen-main-body-box1'>
                        <div className='indochinaqueen-main-body-box1-list1'>
                            <div className='qr-list1'>Mã QR chuyển khoản ngân hàng</div>
                            <img className='qr-list2' src={qr_code}></img>

                            <div className='qr-list3'>Thông tin chuyển khoản ngân hàng</div>

                            <div className='qr-list4'>Vui lòng chuyển đúng nội dung DH5315 để chúng tôi xác nhận thanh toán
                            </div>
                            <div className='qr-list5'>
                                <div className='qr-list5-item1'>
                                    <div className=''>Lê Hoàng Thảo Nguyên</div>

                                </div>
                                <div className='qr-list5-item1'>
                                    <div className=''>Số tài khoản:</div>
                                    <div className=''>103869965433
                                    </div>
                                </div>
                                <div className='qr-list5-item1'>
                                    <div className=''>Ngân hàng:
                                    </div>
                                    <div className=''>ACB Á Châu</div>

                                </div>
                                <div className='qr-list5-item1'>
                                    <div className=''>Số tiền:
                                    </div>
                                    <div className=''>650,000 vnđ
                                    </div>

                                </div>
                                <div className='qr-list5-item1'>
                                    <div className=''>Nội dung*: </div>
                                    <div className=''>	DH5315</div>

                                </div>


                            </div>
                            <div className='qr-list6'>
                                <div onClick={this.handleRequestBank} className='qr-list6-item1'>TÔI ĐÃ THANH TOÁN
                                </div>
                                {/* {this.state.countClock !== 0 && <div className='qr-list6-item3'>{this.state.seconds}
                                </div>} */}


                                {this.state.countClock == true && <div className='qr-list6-item2'>
                                    <div className='qr-list6-item2-box1'>
                                        Không tìm thấy giao dịch nào phù hợp.
                                        Hệ thống vẫn đang kiểm tra. Có thể tốn 1 khoảng thời gian


                                    </div>
                                    <div className='qr-list6-item2-box2'>
                                        Hệ thống đã nhận được thông tin và thanh toán từ bạn(nếu thành công). <br />

                                        Thời gian: 30 Phút - 1H làm việc nhân viên sẽ LIÊN HỆ mình để xác nhận và HƯỚNG DẪN các quý khách hàng

                                        <br /> Hotline: 09 48 17 00 36 (nếu khách hàng cần LH gấp)
                                        <br /> Cảm ơn các quý khách hàng đã tin tưởng và mua vé.


                                    </div>

                                </div>

                                }

                            </div>

                            <div className='qr-list7'>
                                <div className='qr-list7-item1'>CHI TIẾT ĐƠN HÀNG</div>
                                <div className='qr-list7-item2'>
                                    <div className=''>Sản phẩm	</div>
                                    <div className=''>Tổng</div>
                                </div>
                                <div className='qr-list7-item3'>
                                    <div className=''>BUFFET TẦNG 1-TÀU INDOCHINA QUEEN</div>
                                </div>
                                <div className='qr-list7-item4'>
                                    <div className=''>Menu 1:</div>
                                    <div className=''>  Set 17 – Vị Trí Ngồi Tầng 3</div>


                                </div>
                                <div className='qr-list7-item5'>
                                    <div className=''>Vị trí ngồi:

                                    </div>
                                    <div className=''>Tầng 1</div>
                                </div>
                                <div className='qr-list7-item6'>
                                    <div className=''>Lịch khởi hành:
                                    </div>
                                    <div className=''> 19-12-2024</div>
                                </div>
                                <div className='qr-list7-item7'>
                                    <div className=''>Tổng số phụ:</div>
                                    <div className=''>	650.000vnd</div>
                                </div>
                                <div className='qr-list7-item8'>
                                    <div className=''>Phương thức thanh toán:</div>
                                    <div className=''>	Chuyển khoản
                                    </div>
                                </div>
                                <div className='qr-list7-item9'>
                                    <div className=''>Tổng cộng:</div>
                                    <div className=''>	650.000vnd
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className='indochinaqueen-main-body-box1-list2'>
                            <div className='indochinaqueen-main-body-box1-list2-item1'>Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</div>
                            <div className='indochinaqueen-main-body-box1-list2-item2'>

                                <div className='list2-item2-noty1'>
                                    <div className=''>Mã đơn hàng:</div>
                                    <div className='list2-item2-noty1-cuscolor'> 5315</div>

                                </div>
                                <div className='list2-item2-noty1'>
                                    <div className=''>Ngày:</div>

                                    <div className='list2-item2-noty1-cuscolor'>08/12/2024</div>

                                </div>
                                <div className='list2-item2-noty1'>
                                    <div className=''>Tổng cộng:</div>

                                    <div className='list2-item2-noty1-cuscolor'>650.000vnd</div>

                                </div>
                                <div className='list2-item2-noty1'>Phương thức thanh toán: Chuyển khoản
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='indochinaqueen-main-body-box2'>
                        <div className='indochinaqueen-body-box3'>
                            <div className='indochinaqueen-body-box3-item1'>
                                <div className='indochinaqueen-body-box3-item1-list1'>Why choose Marina de Paris barges and cruises?</div>
                                <div className='indochinaqueen-body-box3-item1-list2'>
                                    <div className='indochinaqueen-body-box3-item1-list2-box1'>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text1'>Paris and the illuminated Eiffel Tower</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text2'>The Marina offers you an exceptional view of Paris and its monuments with an unmissable passage in front of the illuminated Eiffel Tower...</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text3'><img className='indochinaqueen-body-box3-item1-list2-box1-text3' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/img-tour.jpg.webp'></img></div>

                                    </div>
                                    <div className='indochinaqueen-body-box3-item1-list2-box1'>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text1'>Paris and the illuminated Eiffel Tower</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text2'>The Marina offers you an exceptional view of Paris and its monuments with an unmissable passage in front of the illuminated Eiffel Tower...</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text3'><img className='indochinaqueen-body-box3-item1-list2-box1-text3' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/img-tour.jpg.webp'></img></div>

                                    </div>
                                    <div className='indochinaqueen-body-box3-item1-list2-box1'>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text1'>Paris and the illuminated Eiffel Tower</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text2'>The Marina offers you an exceptional view of Paris and its monuments with an unmissable passage in front of the illuminated Eiffel Tower...</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text3'><img className='indochinaqueen-body-box3-item1-list2-box1-text3' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/img-tour.jpg.webp'></img></div>

                                    </div>
                                    <div className='indochinaqueen-body-box3-item1-list2-box1'>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text1'>Paris and the illuminated Eiffel Tower</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text2'>The Marina offers you an exceptional view of Paris and its monuments with an unmissable passage in front of the illuminated Eiffel Tower...</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text3'><img className='indochinaqueen-body-box3-item1-list2-box1-text3' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/img-tour.jpg.webp'></img></div>

                                    </div>
                                    <div className='indochinaqueen-body-box3-item1-list2-box1'>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text1'>Paris and the illuminated Eiffel Tower</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text2'>The Marina offers you an exceptional view of Paris and its monuments with an unmissable passage in front of the illuminated Eiffel Tower...</div>
                                        <div className='indochinaqueen-body-box3-item1-list2-box1-text3'><img className='indochinaqueen-body-box3-item1-list2-box1-text3' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/img-tour.jpg.webp'></img></div>

                                    </div>
                                </div>

                            </div>
                            <div className='indochinaqueen-body-box3-item2'>
                                <div className='item2-cus-more'>
                                    <div className='indochinaqueen-body-box3-item2-text1'>"Very nice experience"</div>
                                    <div className='indochinaqueen-body-box3-item2-text2'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className='indochinaqueen-body-box3-item2-text3'>"Of course, you have to pay the price, but the setting is just idyllic. We went there for the dinner cruise starting at 9 p.m., and what a joy to enjoy a meal under the lights of Paris. The meal is very…</div>
                                    <div className='indochinaqueen-body-box3-item2-text4'>Read more new</div>
                                </div>


                            </div>


                        </div>
                    </div>
                    <div className='indochinaqueen-main-body-footer'>
                        <Footer></Footer>


                    </div>
                </div>

            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn, //dataAllMenu
        dataAllMenu: state.admin.dataAllMenu,
        idMenu: state.admin.idMenu,
        stateNumberTicketprint: state.admin.stateNumberTicket,
        stateDateChoseprint: state.admin.stateDateChose,
        allMenuchosen: state.admin.allMenuchosen


        //



    };
};

const mapDispatchToProps = dispatch => {
    return {
        allStateSave: (data1, data2) => dispatch(actions.handleAllStateSave(data1, data2))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Qrthanhtoan);
