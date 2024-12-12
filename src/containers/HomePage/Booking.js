import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Booking.scss'
import logo from '../../assets/images/logo.png';
import _ from 'lodash';
import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header_menu from './Header_menu';
import Footer from './Footer';
import * as actions from "../../store/actions/index.js";
import { handleAllMenu } from "../../store/actions/adminActions.js"




class Booking extends Component {
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

            //
            menuInitialized: false


        };
        this.headerRef = null;
        this.observer = null;
    }

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
    handleDottest = (event) => {
        const hoverId = event.target.getAttribute('data-hover-id');
        console.log("check hoverID", hoverId);
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

    handleMenuBF1 = (event) => {
        const hoverId = event.target.getAttribute('data-hover-id');
        console.log("check hoverID", hoverId);
        const menuMapping = {
            bookinhMenu1: "1",
            bookinhMenu2: "2",
            bookinhMenu3: "3",
            bookinhMenu4: "4",
            bookinhMenu5: "5",

            bookinhMenu6: "6",

            bookinhMenu7: "7",

            bookinhMenu8: "8",

            bookinhMenu9: "9",

            bookinhMenu10: "10",

            bookinhMenu11: "11",

            bookinhMenu12: "12",

            bookinhMenu13: "13",

            bookinhMenu14: "14",



            // Thêm các ánh xạ khác ở đây
        };

        if (menuMapping[hoverId]) {
            this.props.dataAllMenu(menuMapping[hoverId]);
            console.log('da gui roi nhé', menuMapping[hoverId]);
        }




        // Gọi props để lưu menu
        // Đặt trạng thái để ngăn hàm chạy lại
        this.setState({ menuInitialized: true });




    }








    render() {

        console.log("check data redux", this.props.dataAllMenuu)



        return (
            <div class="indochinaqueen-main-blog">
                <div className='indochinaqueen-main-blog-header'>
                    <Header_menu></Header_menu>
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
                        {this.state.chose1 === 0 && <div className='indochinaqueen-body-box6'>
                            <div onClick={this.test} className='indochinaqueen-body-box6-item1'>TThực đơn tàu Indochina Queen – Nữ Hoàng Đông Dương</div>
                            <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item2'>Không gì tuyệt vời bằng thưởng thức món ngon tại Nhà Hàng Du thuyền Nữ Hoàng Đông Dương. Tinh hoa ẩm thực Việt Nam hội tụ trong những món ăn do các đầu bếp tài ba chế biến cùng chuyến du ngoạn ngắm Sài Gòn về đêm trên sông. Hãy đặt bàn ngay để tận hưởng tiệc tối trên Du thuyền sang trọng Indochina Queen!</div>
                            {this.state.hovermenu1 === 0 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 1-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>499.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet </div>

                                    <div className='list1-item8'>
                                        <div className='list1-item8-contain'>Số chứa</div>
                                        <div className='list1-item8-contain'><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu1" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>

                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 2-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>550.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu2" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>600.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu3" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>650.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu4" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu2 === 1 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>TTàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>650.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu5" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>750.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu6" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>750.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu7" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>850.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu8" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu3 === 2 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>850.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu9" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>950.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu10" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>950.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu11" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.100.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu12" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu4 === 3 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4 LẦN 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.300.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu13" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.500.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu14" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.620.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu15" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.620.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <Link to="/vn/bookingmenu/indo">
                                            <div onClick={this.handleMenuBF1} data-hover-id="bookinhMenu16" className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>
                                        </Link>
                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            <div className='indochinaqueen-body-box6-item4 '>
                                <div onClick={this.handleDot} data-hover-id="hover1" className={`dot ${this.state.hovermenu1 === 0 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover2" className={`dot ${this.state.hovermenu2 === 1 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover3" className={`dot ${this.state.hovermenu3 === 2 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover4" className={`dot ${this.state.hovermenu4 === 3 ? 'active-hover' : ''}`}></div>

                            </div>




                        </div>
                        }




                    </div>
                    <div className='indochinaqueen-main-body-box1'>
                        {this.state.chose2 === 1 && <div className='indochinaqueen-body-box7'>
                            <div onClick={this.test} className='indochinaqueen-body-box6-item1'>Thực đơn tàu Indochina Queen – Nữ Hoàng Đông Dương</div>
                            <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item2'>Không gì tuyệt vời bằng thưởng thức món ngon tại Nhà Hàng Du thuyền Nữ Hoàng Đông Dương. Tinh hoa ẩm thực Việt Nam hội tụ trong những món ăn do các đầu bếp tài ba chế biến cùng chuyến du ngoạn ngắm Sài Gòn về đêm trên sông. Hãy đặt bàn ngay để tận hưởng tiệc tối trên Du thuyền sang trọng Indochina Queen!</div>
                            <div className='indochinaqueen-body-box7-chosemenu'>
                                <div onClick={this.handleDot} data-hover-id="hover5" className={`indochinaqueen-body-box7-chosemenu-list1 ${this.state.hovermenu5 === 0 ? 'active-hover' : ''}`} >BUFFET</div>
                                <div onClick={this.handleDot} data-hover-id="hover6" className={`indochinaqueen-body-box7-chosemenu-list1 ${this.state.hovermenu6 === 1 ? 'active-hover' : ''}`}>SET MENU</div>

                                <div onClick={this.handleDot} data-hover-id="hover7" className={`indochinaqueen-body-box7-chosemenu-list1 ${this.state.hovermenu7 === 2 ? 'active-hover' : ''}`}>MENU ÂU</div>

                                <div onClick={this.handleDot} data-hover-id="hover8" className={`indochinaqueen-body-box7-chosemenu-list1 ${this.state.hovermenu8 === 3 ? 'active-hover' : ''}`}>MENU TÀU</div>

                            </div>
                            {this.state.hovermenu5 === 0 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev1} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 1-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>499.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet </div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 2-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>550.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className='list1-item8-detail'>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>600.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>650.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext1} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu6 === 1 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev1} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>TTàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>650.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>750.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>750.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>850.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext1} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu7 === 2 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev1} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>850.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>950.000<i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>950.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.100.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext1} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            {this.state.hovermenu8 === 3 && <div className='indochinaqueen-body-box6-item3'>
                                <div onClick={this.handleChangePrev1} className='indochinaqueen-body-box6-item3-list1-left'><i class="fa-solid fa-arrow-left"></i></div>

                                <div className='indochinaqueen-body-box6-item3-list1'>

                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4 LẦN 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.300.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>

                                </div>
                                <div className='indochinaqueen-body-box6-item3-list2'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.500.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list3'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.620.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div className='indochinaqueen-body-box6-item3-list4'>
                                    <div className='list1-item1'><img className='list1-item1' src='https://indochinaqueencruise.com.vn/wp-content/uploads/2021/01/ca-hoi.jpg'></img></div>
                                    <div className='list1-item2'>
                                        <div className=''><i class="fa-solid fa-location-crosshairs" style={{ color: '#004da6' }}></i>Tàu Indochia Queen - Số 5 Nguyễn Tất Thành - Quận 4
                                        </div>

                                    </div>

                                    <div className='list1-item3'>BUFFET TẦNG 3-TÀU INDOCHINA QUEEN</div>

                                    <div className='list1-item4'>1.620.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                    <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                    <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                    <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Set menu</div>

                                    <div className='list1-item8'>
                                        <div className=''>Số chứa</div>
                                        <div className=''><i class="fa-solid fa-user-group"></i>70</div>
                                        <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

                                    </div>
                                </div>
                                <div onClick={this.handleChangeNext1} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                            </div>}
                            <div className='indochinaqueen-body-box6-item4 '>
                                <div onClick={this.handleDot} data-hover-id="hover5" className={`dot ${this.state.hovermenu5 === 0 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover6" className={`dot ${this.state.hovermenu6 === 1 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover7" className={`dot ${this.state.hovermenu7 === 2 ? 'active-hover' : ''}`}></div>
                                <div onClick={this.handleDot} data-hover-id="hover8" className={`dot ${this.state.hovermenu8 === 3 ? 'active-hover' : ''}`}></div>

                            </div>

                        </div>
                        }


                    </div>
                    <div className='indochinaqueen-main-body-box1'>
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
//dataAllMenu
const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        dataAllMenuu: state.admin.dataAllMenu

    };
};

const mapDispatchToProps = dispatch => {
    return {
        dataAllMenu: (data) => dispatch(actions.handleAllMenu(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
