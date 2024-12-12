import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss';
import * as actions from "../../store/actions";
import ManageRole from './ManageRole'
import { getALLUser } from '../../services/userService'
import AllListUser from './UserStudent/AllListUser'
import StudentDetails from './UserStudent/AllListUser'
import StudentPromotion from './UserStudent/AllListUser'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import HomeHotel from './HomeHotel/HomeHotel';
import BookingHotel from './HomeHotel/BookingHotel';
import Rent from './HomeHotel/Rent';
import Stock from './HomeHotel/Stock';
import TotalBill from './HomeHotel/TotalBill';
import Account from './HomeHotel/Account';

import SystemManagement from './HomeHotel/SystemManagement';












class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponentList: false, // Trạng thái để điều khiển việc hiển thị component
            isOpen1: false, // Trạng thái cho bảng con đầu tiên
            isOpen2: false, // Trạng thái cho bảng con thứ hai
            isOpen3: false, // Bạn có thể thêm nhiều trạng thái nếu có nhiều bảng con
            dashbordmd: true,
            bookingroom: false,
            RentHome: false,
            Stock: false,
            TotalBill: false,
            Account: false,
            SystemManagement: false,
            showComponentmanageRole: false,
            usercheck: '',
            showComponentUserList: false,
            showComponentAllList: false,
            showComponentDashbord: false,
            showComponentStudentDashbord: false,
            showComponentParentDashbord: false,
            showComponentTeachertDashbord: false,
            defaultdashbord: false,
            isLoggedIn: this.props.isLoggedIn,
            user1: []



            // dropdownHeight: '0px', // Khởi tạo chiều cao dropdown là 0


        };

        this.interval = null; // Biến để lưu trữ interval

    }


    componentDidMount() {
        // console.log('dddddddđ', this.state.isLoggedIn)


        setTimeout(() => {
            this.setState({

                isLoggedIn: false

            })
            console.log('kieermt tra thử isloggedin', this.state.isLoggedIn)
            this.props.processLogoutsafter()



        }, 300000000);

        // let response = await getALLUser()
        // console.log('check view----------------', response)

        // this.setState({
        //     usercheck: response

        // })
        // console.log('hhhhhhhhhhhhh', this.state.usercheck)










    }
    homehotel = () => {
        this.setState({
            dashbordmd: true,
            bookingroom: false,
            RentHome: false,
            Stock: false,
            TotalBill: false,
            Account: false,
            SystemManagement: false,



        })


    }

    setStateBooking = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: true,
            RentHome: false,
            Stock: false,
            TotalBill: false,
            Account: false,
            SystemManagement: false,



        })
    }
    RentHome = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: false,
            RentHome: true,
            Stock: false,
            TotalBill: false,
            Account: false,
            SystemManagement: false,


        })
    }

    Stock = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: false,
            RentHome: false,
            Stock: true,
            TotalBill: false,
            Account: false,
            SystemManagement: false,


        })
    }
    TotalBill = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: false,
            RentHome: false,
            Stock: false,
            TotalBill: true,
            Account: false,
            SystemManagement: false,



        })
    }
    SystemManagement = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: false,
            RentHome: false,
            Stock: false,
            TotalBill: false,
            Account: false,
            SystemManagement: true,



        })
    }
    Account = () => {
        this.setState({
            dashbordmd: false,
            bookingroom: false,
            RentHome: false,
            Stock: false,
            TotalBill: false,
            Account: true,
            SystemManagement: false,



        })
    }

    defaultdashbord = () => {
        this.setState(prevState => ({
            showComponentAllList: false, // Đảo ngược giá trị của showComponent
            dashbordmd: true,
            showComponentDashbord: true,
            showComponentStudentDashbord: false,
            showComponentParentDashbord: false,
            showComponentTeachertDashbord: false,
            defaultdashbord: false

        }));


    }

    handleClickAllUser = () => {
        this.setState(prevState => ({
            showComponentAllList: true, // Đảo ngược giá trị của showComponent
            dashbordmd: false,
            showComponentmanageRole: false,
            showComponentUserList: false,


        }));
    };

    handleClickUserList = () => {
        this.setState(prevState => ({
            showComponentUserList: true, // Đảo ngược giá trị của showComponent
            dashbordmd: false,
            showComponentmanageRole: false,
            showComponentAllList: false



        }));
    };

    handleClickManageRole = () => {
        this.setState(prevState => ({
            showComponentmanageRole: true, // Đảo ngược giá trị của showComponent
            dashbordmd: false,
            showComponentList: false, // Đảo ngược giá trị của showComponent



        }));
    };

    showComponentDashbord = () => {
        this.setState(prevState => ({
            showComponentUserList: false,

            showComponentDashbord: true,
            dashbordmd: false,
            showComponentStudentDashbord: false,
            showComponentParentDashbord: false,
            showComponentTeachertDashbord: false,
            showComponentAllList: false, // Đảo ngược giá trị của showComponent








        }));
    };

    showComponentStudentDashbord = () => {
        this.setState(prevState => ({

            showComponentDashbord: false,
            dashbordmd: false,
            showComponentStudentDashbord: true,
            showComponentParentDashbord: false,
            showComponentTeachertDashbord: false






        }));
    };

    showComponentTeacherDashbord = () => {
        this.setState(prevState => ({

            showComponentDashbord: false,
            dashbordmd: false,
            showComponentStudentDashbord: false,
            showComponentParentDashbord: false,
            showComponentTeachertDashbord: true






        }));
    };
    showComponentParentDashbord = () => {
        this.setState(prevState => ({

            showComponentStudentDashbord: false,
            dashbordmd: false,
            showComponentDashbord: false,
            showComponentParentDashbord: true,
            showComponentTeachertDashbord: false








        }));
    };



    // Hàm xử lý toggle hiển thị bảng con của header-column-box1
    toggleDropdown1 = () => {
        this.setState({ isOpen1: !this.state.isOpen1 });
    }
    // toggleDropdown1 = () => {
    //     if (this.state.isOpen1) {
    //         // Nếu dropdown đang mở, thu hẹp về chiều cao 0
    //         this.closeDropdown();
    //     } else {
    //         // Nếu dropdown đang đóng, mở rộng chiều cao của dropdown
    //         this.openDropdown();
    //     }
    // };

    // openDropdown = () => {
    //     this.setState({ isOpen1: true });
    //     let height = 0; // Bắt đầu từ 0
    //     this.interval = setInterval(() => {
    //         if (height >= 200) {
    //             clearInterval(this.interval); // Dừng lại khi đạt 300px
    //         } else {
    //             height += 20; // Tăng dần chiều cao mỗi lần
    //             this.setState({ dropdownHeight: `${height}px` });
    //         }
    //     }, 10); // Cập nhật mỗi 30ms
    // };

    // closeDropdown = () => {
    //     let height = 200; // Bắt đầu từ 300
    //     this.interval = setInterval(() => {
    //         if (height <= 0) {
    //             clearInterval(this.interval); // Dừng lại khi đạt 0
    //             this.setState({ isOpen1: false, dropdownHeight: '0px' });
    //         } else {
    //             height -= 20; // Giảm dần chiều cao mỗi lần
    //             this.setState({ dropdownHeight: `${height}px` });
    //         }
    //     }, 30); // Cập nhật mỗi 30ms
    // };

    // componentWillUnmount() {
    //     // Dọn dẹp interval khi component bị tháo gỡ
    //     clearInterval(this.interval);
    // }


    toggleDropdown2 = () => {
        this.setState({ isOpen2: !this.state.isOpen2 });
    }

    toggleDropdown3 = () => {
        this.setState({ isOpen3: !this.state.isOpen3 });
    }
    toggleDropdown4 = () => {
        this.setState({ isOpen4: !this.state.isOpen4 });
    }
    toggleDropdown5 = () => {
        this.setState({ isOpen5: !this.state.isOpen5 });
    }
    toggleDropdown6 = () => {
        this.setState({ isOpen6: !this.state.isOpen6 });
    }
    toggleDropdown7 = () => {
        this.setState({ isOpen7: !this.state.isOpen7 });
    }
    toggleDropdown8 = () => {
        this.setState({ isOpen8: !this.state.isOpen8 });
    }
    toggleDropdown9 = () => {
        this.setState({ isOpen9: !this.state.isOpen9 });
    }
    toggleDropdown10 = () => {
        this.setState({ isOpen10: !this.state.isOpen10 });
    }
    toggleDropdown11 = () => {
        this.setState({ isOpen11: !this.state.isOpen11 });
    }
    toggleDropdown12 = () => {
        this.setState({ isOpen12: !this.state.isOpen12 });
    }
    toggleDropdown13 = () => {
        this.setState({ isOpen13: !this.state.isOpen13 });
    }


    render() {
        const { usercheck, user1 } = this.state;

        const { processLogout } = this.props;
        return (
            <div className="text-center">
                <div className='text-center-logo'><i class="fa-solid fa-gear cuscolor" ></i></div>
                {/* Header */}
                <div className='header-row'>
                    <div className='header-row-box1'>
                        <div onClick={this.defaultdashbord} className=''><Link to='/system/user-manage'><img className='header-row-box1-img' src='https://admin.shotel.vn/assets/img/logo.png' alt="logo"></img></Link></div>
                        <div className='header-row-box1-texthotel'>STAR HOTEL</div>
                        <div className=''><i className="fa-solid fa-bars"></i></div>
                    </div>
                    <div className='header-row-box2'>
                        <i className="fas fa-search search-icon header-row-box2-cus"></i>
                        <input type="text" className="search-input" placeholder="Search ..." />
                    </div>
                    <div className='header-row-box3'>
                        <div className=''><i className="fa-solid fa-envelope"></i></div>
                        <div className=''><i className="fa-solid fa-bell"></i></div>
                        <div className=''><i className="fa-solid fa-layer-group"></i></div>
                        <div className=''>IMG LOGO

                        </div>

                        <div className="btn btn-logout" onClick={processLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>




                </div>



                <div class="scroll-container">

                    <div className='header-column'>
                        <div className='layout'>
                            <div className='layout-text'>ADMIN </div>
                            <div className='layout-nav'></div>

                        </div>

                        {/* Mục 1 */}
                        <div className='header-column-box1' onClick={this.toggleDropdown1}>
                            <div className='header-column-box1-con1'><i className="fas fa-tachometer-alt"></i></div>
                            <div className='header-column-box1-con2'>Dashboard </div>
                            <div className='header-column-box1-con3 '><i className="fa-solid fa-caret-right"></i></div>
                        </div>



                        {/* Mục 2 */}

                        <div className='header-column-box2' onClick={this.toggleDropdown2}>
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Application</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>






                        {/* Mục 3 */}
                        <div className='header-column-box3' >

                            <div className='layout-text2'>MANAGEMENT</div>
                            <div className='layout-nav2'></div>
                        </div>



                        <div onClick={this.homehotel} className={this.state.dashbordmd ? 'header-column-box4plus' : 'header-column-box4'} >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Trang Chính</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>






                        <div onClick={this.setStateBooking} className={this.state.bookingroom ? 'header-column-box5plus' : 'header-column-box5'} >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div onClick={this.setStateBooking} className='header-column-box1-con2'> Đặt Phòng</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>


                        <div onClick={this.RentHome} className={this.state.RentHome ? 'header-column-box6plus' : 'header-column-box6'} >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Thuê - Trả Phòng</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>


                        <div onClick={this.Stock} className={this.state.Stock ? 'header-column-box7plus' : 'header-column-box7'}  >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Quản Lý Kho</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>

                        {this.state.isOpen6 && (
                            <div className='dropdown'>
                                <div className='dropdown-main'>
                                    <div className='dropdown-main-box1'>Tổng số khóa học (Courses)</div>
                                    <div className='dropdown-main-box2'>Tổng số bài học (Lessons)</div>
                                    <div className='dropdown-main-box3'>Số lượng thanh toán (Payments)
                                    </div>
                                    <div className='dropdown-main-box4'>Số lượng phản hồi (Feedback)
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Mục 3 */}
                        <div onClick={this.TotalBill} className={this.state.TotalBill ? 'header-column-box8plus' : 'header-column-box8'}  >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Quản Lý Thu Chi</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>

                        {/* {this.state.isOpen77 && (
                            <div className='dropdown'>
                                <div className='dropdown-main'>
                                    <div className='dropdown-main-box1'>Tổng số khóa học (Courses)</div>
                                    <div className='dropdown-main-box2'>Tổng số bài học (Lessons)</div>
                                    <div className='dropdown-main-box3'>Số lượng thanh toán (Payments)
                                    </div>
                                    <div className='dropdown-main-box4'>Số lượng phản hồi (Feedback)
                                    </div>
                                </div>
                            </div>
                        )} */}
                        {/* Mục 3 */}
                        <div className='header-column-box9' >
                            <div className='layout-text2'>PEOPLES</div>
                            <div className='layout-nav2'></div>
                        </div>

                        {/* {this.state.isOpen88 && (
                            <div className='dropdown'>
                                <div className='dropdown-main'>
                                    <div className='dropdown-main-box1'>  • All Studentss</div>
                                    <div className='dropdown-main-box2'>• Students List</div>
                                    <div className='dropdown-main-box3'>• Student Details
                                    </div>
                                    <div className='dropdown-main-box4'>• Student Promotion
                                    </div>
                                </div>
                            </div>
                        )} */}
                        {/* Mục 3 */}
                        <div className={this.state.SystemManagement ? 'header-column-box10plus' : 'header-column-box10'} onClick={this.SystemManagement}>
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Quản Lý Hệ Thống</div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>

                        {/* {this.state.isOpen7 && (
                            <div className='dropdown'>
                                <div className='dropdown-main'>
                                    <div onClick={this.handleClickAllUser} className='dropdown-main-box1'>• All Users</div>
                                    <div onClick={this.handleClickUserList} className='dropdown-main-box2'>• Users List</div>
                                    <div className='dropdown-main-box3'>• Students Details
                                    </div>
                                    <div className='dropdown-main-box4'>• Students Promotions
                                    </div>
                                </div>
                            </div>
                        )} */}
                        <div onClick={this.Account} className={this.state.Account ? 'header-column-box11plus' : 'header-column-box11'} >
                            <div className='header-column-box1-con1'><i className="fa-solid fa-house"></i></div>
                            <div className='header-column-box1-con2'>Tài Khoản </div>
                            <div className='header-column-box1-con3'><i className="fa-solid fa-caret-right"></i></div>
                        </div>

                        {/* {this.state.isOpen9 && (
                            <div className='dropdown'>
                                <div className='dropdown-main'>
                                    <div className='dropdown-main-box1'>All Parents</div>
                                    <div className='dropdown-main-box2'>Parent List</div>
                                    <div className='dropdown-main-box3'>Parent Feeback
                                    </div>
                                    <div className='dropdown-main-box4'>
                                    </div>
                                </div>
                            </div>
                        )} */}
                        {/* Mục 3 */}













                    </div>
                    <div class="scroll-overlay-top"></div>
                    <div class="scroll-overlay-bottom"></div>

                </div>

                <div className='body-dashboard'>
                    {this.state.dashbordmd && <div className=''>
                        <HomeHotel></HomeHotel>

                    </div>}
                    {this.state.bookingroom && <div className=''>
                        <BookingHotel></BookingHotel>

                    </div>}
                    {this.state.RentHome && <div className=''>
                        <Rent></Rent>

                    </div>}

                    {this.state.Stock && <div className=''>
                        <Stock></Stock>

                    </div>}

                    {this.state.TotalBill && <div className=''>
                        <TotalBill></TotalBill>

                    </div>}

                    {this.state.SystemManagement && <div className=''>
                        <SystemManagement></SystemManagement>

                    </div>}

                    {this.state.Account && <div className=''>
                        <Account></Account>

                    </div>}

                    <div>

                        {/* {this.state.showComponentAllList && <AllListUser />}
                        {this.state.showComponentStudentDetails && <StudentDetails />}
                        {this.state.showComponentStudentPromotion && <StudentPromotion />}
                        {this.state.showComponentDashbord && <Dashbordadmin />}
                        {this.state.showComponentStudentDashbord && <Studentdashbord />}
                        {this.state.showComponentParentDashbord && <Parentdashbord />}

                        {this.state.showComponentTeachertDashbord && <Teacherdashbord />} */}












                    </div>

                </div>
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
        processLogout: () => dispatch(actions.processLogout()),
        processLogoutsafter: () => dispatch(actions.processLogoutsafter())






    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
