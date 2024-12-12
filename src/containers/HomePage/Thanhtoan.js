import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Thanhtoan.scss'
import menu1 from '../../assets/images/menu1.jpg';
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










class Thanhtoan extends Component {
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

            countfree: "",
            count50percent: "",

            isChecked: false, // trạng thái mặc định của checkbox




        };
        this.headerRef = null;
        this.observer = null;
    }

    handleCheckboxChange = (event) => {
        this.setState({
            isChecked: event.target.checked, // cập nhật trạng thái checkbox
        });
    };

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
    //function reset

    // resetRedux = () => {
    //     this.props.resetRedux()

    // }
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
        this.totalcostChilren()


    }
    componentDidUpdate(prevProps, prevState) {



    }

    componentWillUnmount() {
        if (this.headerRef && this.observer) {
            this.observer.unobserve(this.headerRef); // Hủy theo dõi header
        }
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

    handleCostChidlren = () => {
        const costAdult = Number(this.props.allMenuchosen[1]) || 0;
        const costChild = Number(this.props.allMenuchosen[2]) || 0;
        const numberTicketAdult = Number(this.props.countNumberChildTicket);
        const numberTicketChild = Number(this.props.stateNumberTicket);
        const dataCountChild = Number(this.props.dataCountChild);

        console.log('Tuổi đang chọn', dataCountChild);

        if (dataCountChild > 0 && dataCountChild <= 4) {
            const totalcost = 0
            console.log("Tiền 1", totalcost);

            return totalcost;
        } else if (dataCountChild > 4 && dataCountChild <= 9) {
            const totalcost = ((costChild) / 2);
            console.log("Tiền 2", totalcost);

            return totalcost;
        } else {
            const totalcost = costAdult;
            console.log("Tiền 3", totalcost);

            return totalcost;
        }

    }

    totalcostChilren = () => {
        const arrlist = this.props.statusBookingChildrenn;
        console.log('this is list booking', arrlist);

        let count = 0;
        let count1 = 0;

        arrlist.forEach((item, index) => {
            if (0 < item[`age${index + 1}`] && item[`age${index + 1}`] <= 4) {
                count++;
            }
            if (4 < item[`age${index + 1}`] && item[`age${index + 1}`] < 10) {
                count1++;
            }
        });

        console.log('Count for age 0-4:', count);
        console.log('Count for age 5-9:', count1);


        // Trả về đối tượng
        return { count, count1 };
    };






    totalCost = () => {
        const { count, count1 } = this.totalcostChilren();
        console.log('Count:', count);
        console.log('Count1:', count1);


        // Chuyển đổi các giá trị sang số
        const costAdult = Number(this.props.allMenuchosen[1]) || 0;
        const costChild = Number(this.props.allMenuchosen[2]) || 0;
        const numberTicketAdult = Number(this.props.countNumberChildTicket);
        const numberTicketChild = Number(this.props.stateNumberTicket);
        const dataCountChild = Number(this.props.dataCountChild);

        console.log('Tuổi đang chọn', dataCountChild);
        const totalcost = (costAdult * numberTicketAdult) + (count * 0 * costChild) + ((costChild * count1) / 2)
        const vattotalcost = (totalcost * 0.08)

        const totalvat = totalcost + vattotalcost;

        // if (dataCountChild > 0 && dataCountChild <= 4) {
        //     const totalcost = costAdult * numberTicketAdult;
        //     console.log("Tiền 1", totalcost);

        //     return totalcost;
        // } else if (dataCountChild > 4 && dataCountChild <= 9) {
        //     const totalcost = (costAdult * numberTicketAdult) + ((costChild * numberTicketChild) / 2);
        //     console.log("Tiền 2", totalcost);

        //     return totalcost;
        // } else {
        //     const totalcost = costAdult * numberTicketAdult;
        //     console.log("Tiền 3", totalcost);

        // }
        return { totalcost, vattotalcost, totalvat };

    };



    render() {
        if (1 > 2) {
            return <div>Loading...</div>; // Hiển thị loading trong khi chờ dữ liệu khôi phục
        }
        console.log("check ánh xạ props check ở bên thanh toán", this.props.dataCountChild)





        //
        const { amount, accountNumber, accountName, description, txnId, qrCode } = this.state;
        const { count, count1 } = this.totalcostChilren();

        const { totalcost, vattotalcost, totalvat } = this.totalCost();




        return (

            <div class="indochinaqueen-main-thanhtoan">
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
                    {/* <div className='indochinaqueen-main-body-box1'>123</div> */}
                    <div className='indochinaqueen-main-body-box1'>
                        <div className='indochinaqueen-main-body-box1-thanhtoan'>
                            <div className='indochinaqueen-main-body-box1-thanhtoan-list1'>Đơn hàng của bạn</div>
                            <div className='indochinaqueen-main-body-box1-thanhtoan-list2'>
                                Thông tin
                            </div>
                            <div className='indochinaqueen-main-body-box1-thanhtoan-list3'>
                            </div>
                            <div className='indochinaqueen-main-body-box1-thanhtoan-list4'>
                                <div className='indochinaqueen-main-body-box1-thanhtoan-list4-box1'>
                                    <div className='indochinaqueen-main-body-box1-thanhtoan-list4-item1'>
                                        <img className='indochinaqueen-main-body-box1-thanhtoan-list4-item1' src='https://duthuyensaigon.vn/wp-content/uploads/z2534258183213_1a37bee0909bd73ce99bb0dde9f008cc-500x500.jpg'></img>
                                    </div>
                                    <div className='indochinaqueen-main-body-box1-thanhtoan-list4-item2'>
                                        <div className='list4-item2-text1'>Ăn Tối Trên Du Thuyền Indochina Queen</div>
                                        <div className='list4-item2-text1'>
                                            <div className=''>MENU:</div>
                                            <div className='indochinaqueen-main-body-box1-thanhtoan-list4-item2-color'>{this.props.allMenuchosen[0]}</div>

                                        </div>

                                        <div className='list4-item2-text1'>
                                            <div className=''>Vị trí ngồi:</div>
                                            <div className='indochinaqueen-main-body-box1-thanhtoan-list4-item2-color'> {this.props.allMenuchosen[3]}</div>


                                        </div>

                                        <div className='list4-item2-text1'>
                                            <div className=''>Lịch khởi hành:</div>
                                            <div className='indochinaqueen-main-body-box1-thanhtoan-list4-item2-color'>{this.props.stateDay}</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-main-body-box1-thanhtoan-list4-box2'>
                                    <div className='thanhtoan-list4-box1'>
                                        <div className='thanhtoan-list4-box1-list1'>Người Lớn:</div>
                                        <div className='thanhtoan-list4-box1-list2'>{Number(this.props.allMenuchosen[1]).toLocaleString('vi-VN') + " đ"}


                                        </div>


                                        <div className='thanhtoan-list4-box1-list1'>TRẺ EM:</div>
                                        <div className='thanhtoan-list4-box1-list2'>{this.handleCostChidlren().toLocaleString('vi-VN') + " đ"}

                                        </div>
                                        <div className='thanhtoan-list4-box1-list1'>Tạm tính:</div>
                                        <div className='thanhtoan-list4-box1-list2'>{totalcost.toLocaleString('vi-VN') + " đ"}

                                        </div>



                                    </div>

                                    <div className='thanhtoan-list4-box2'>
                                        <div className='thanhtoan-list4-box1-list1'>SỐ LƯỢNG</div>
                                        <div className='thanhtoan-list4-box1-list2'>{this.props.countNumberChildTicket}

                                        </div>
                                        <div className='thanhtoan-list4-box1-list1'>SỐ LƯỢNG</div>
                                        <div className='thanhtoan-list4-box1-list2'>{this.props.stateNumberTicket}

                                        </div>
                                        <div className='thanhtoan-list4-box1-list1'>Tổng</div>
                                        <div className='thanhtoan-list4-box1-list2'>{totalcost.toLocaleString('vi-VN') + " đ"}

                                        </div>


                                    </div>

                                </div>


                            </div>
                            <div className='indochinaqueen-main-body-box1-thanhtoan-list5'>
                                {/* <div className='bill-detail'>
                                    HÓA ĐƠN CHI TIẾT TẠM TÍNH
                                </div> */}
                                <div class="invoice-container">
                                    <div class="header">
                                        <div class="logo">
                                            <p>indochinaqueenbooking.com</p>

                                            <p>LIÊN HỆ: 09 48 17 00 36</p>
                                        </div>
                                        <div class="title">
                                            <h1>HOÁ ĐƠN CHI TIẾT</h1>
                                        </div>
                                    </div>

                                    <div class="customer-info">

                                        <div class="invoice-details">
                                            <b>KÈM VAT(nếu có):
                                            </b>
                                            <input type="checkbox"
                                                checked={this.state.isChecked}
                                                onChange={this.handleCheckboxChange}>

                                            </input>


                                        </div>
                                    </div>

                                    <table class="invoice-table">
                                        <thead>
                                            <tr>
                                                <th>Mục</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>NGƯỜI LỚN<br />&gt;10 TUỔI(100% GIÁ)</td>
                                                <td>{Number(this.props.countNumberChildTicket)}</td>
                                                <td>{Number(this.props.allMenuchosen[1]).toLocaleString('vi-VN') + " đ"}</td>
                                                <td>{Number(this.props.allMenuchosen[1] * Number(this.props.countNumberChildTicket)).toLocaleString('vi-VN') + " đ"}</td>
                                            </tr>
                                            <tr>
                                                <td>TRẺ EM<br />TỪ 0-4 TUỔI(MIỄN PHÍ)</td>
                                                <td>{count}
                                                </td>
                                                <td>{0 + " đ"}</td>
                                                <td>{0 + " đ"}</td>
                                            </tr>
                                            <tr>
                                                <td>TRẺ EM<br />TỪ 5-9 TUỔI (50% NGƯỜI LỚN)</td>
                                                <td>{count1}</td>
                                                <td>{Number(this.props.allMenuchosen[1] / 2).toLocaleString('vi-VN') + " đ"}</td>
                                                <td>{Number((this.props.allMenuchosen[1] / 2) * count1).toLocaleString('vi-VN') + " đ"}</td>

                                            </tr>
                                            {this.state.isChecked == true && <tr>
                                                <td>VAT<br />(KHÁCH MUỐN XUẤT VAT)</td>
                                                <td>1</td>
                                                <td>{vattotalcost.toLocaleString('vi-VN') + " đ"}</td>
                                                <td>{vattotalcost.toLocaleString('vi-VN') + " đ"}</td>

                                            </tr>}
                                            <tr>
                                                <td> TỔNG<br />TỔNG HÓA ĐƠN</td>
                                                <td>1</td>
                                                <td>{this.state.isChecked == true ? (totalvat.toLocaleString('vi-VN') + " đ") : (totalcost.toLocaleString('vi-VN') + " đ")}</td>
                                                <td>{this.state.isChecked == true ? (totalvat.toLocaleString('vi-VN') + " đ") : (totalcost.toLocaleString('vi-VN') + " đ")}</td>

                                            </tr>
                                        </tbody>
                                    </table>


                                </div>


                            </div>
                        </div>
                        <div className='indochinaqueen-main-body-box1-inform'>
                            <div className='indochinaqueen-main-body-box1-inform--list1'>Thông tin thanh toán</div>
                            <div className='indochinaqueen-main-body-box1-inform--list2'>
                                <div className=''>Họ Tên:</div>
                                <input className='list-cusinput' type='text'></input>

                            </div>
                            <div className='indochinaqueen-main-body-box1-inform--list3'>
                                <div className=''>Số Điện Thoại</div>
                                <input className='list-cusinput' type='text'></input>
                            </div>
                            <div className='indochinaqueen-main-body-box1-inform--list4'>
                                <div className=''>Địa Chỉ Email</div>
                                <input className='list-cusinput' type='text'></input>
                            </div>
                            <div className='indochinaqueen-main-body-box1-inform--list5'>
                                <div className=''>Địa Chỉ</div>
                                <input className='list-cusinput' type='text'></input>
                            </div>
                            <div className='indochinaqueen-main-body-box1-inform--list6'>
                                <div className='inform--list6-item'>Phương thức thanh toán</div>

                                <div className='inform--list6-item1'>
                                    <div className='item1-list1'>Chuyển khoản</div>
                                    <img className='item1-list2' src='https://blognganhangviet.com/wp-content/uploads/2020/12/logo-acb-4.jpg'></img>

                                </div>
                                <div className='inform--list6-item2'>
                                    <span className=''> Chuyển khoản vào tài khoản ACB Á Châu của chúng tôi. Đơn hàng sẽ được xác nhận ngay sau khi chuyển khoản
                                    </span>
                                    <span className=''>Tra soát giao dịch tự động bởi Casso Robot
                                    </span>




                                </div>
                                <div className='inform--list6-item3'>  Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng tôi.
                                </div>

                                <Link onClick={this.resetRedux} to="/vn/thanhtoan/banking/qr"> <div className='inform--list6-item4'>
                                    <div className='list6-item4-item1'>
                                        ĐẶT HÀNG
                                    </div>
                                </div>
                                </Link>



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
        allMenuchosen: state.admin.allMenuchosen,
        stateDay: state.admin.stateDate,
        countNumberChildTicket: state.admin.countNumberChildTicket,
        stateNumberTicket: state.admin.stateNumberTicket,
        dataCountChild: state.admin.dataCountChild,
        statusBookingChildrenn: state.admin.statusBookingChildren // vé booking





    };
};

const mapDispatchToProps = dispatch => {
    return {
        allStateSave: (data1, data2) => dispatch(actions.handleAllStateSave(data1, data2)),

        resetRedux: () => dispatch(actions.resetStore())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanhtoan);
