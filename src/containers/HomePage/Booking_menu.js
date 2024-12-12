import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Booking_menu.scss'
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
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  font-family: 'Roboto', sans-serif;
  color: #333;

  font-family: 'Roboto', sans-serif;
  color: #333;
// background-color: #004da6;
margin: 0;
position: relative;
left: 0;
justify-content: space-between;




   
`;

const StyledDatePickerWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  .ant-picker-suffix{
  color: #fff;
  font-size: 20px;
  }

  .ant-picker-input input::placeholder {
        color: #fff; /* Thay đổi thành màu mong muốn */
        opacity: 1;  /* Đảm bảo màu không bị mờ */
    }
  

  .ant-picker {
    background-color: #004da6;
    width: 210px;
    border-radius: 8px;
    border: 2px solid #FFF !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;
    font-size: 16px;
    transition: all 0.3s ease;
    margin-left: 0px;
    margin-top: -15px;

    

    &:hover {
      border-color: #45a049;
    }

    &:focus {
      border-color: #66bb6a;
      box-shadow: 0 0 8px rgba(102, 187, 106, 0.6);
    }
  }

  .ant-picker-input input {
    color: #FFF;
    font-weight: bold;
  }

  .ant-picker-clear {
      color: #fff;
      font-size: 25px;
      &:hover {
      border-color: #fff;
    }


  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #4caf50;
  margin-bottom: 20px;
`;

class Booking_menu extends Component {
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
            countNumberChildTicket: 0,
            countNumberChildTicketAge: 0,


            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,

            describe: true,
            comment: false,

            //
            allMenuIndo: "",
            idMenu: "",
            dataMenuBooking: [],



            testdate: "1234567",
            canRedirect: false, // Trạng thái điều kiện
            datereal: null,
            stateNumberTicket: "",

            testredux: "sơn đẹp trai nhất thế giới",

            pushInformChidl: true,

            // define arrBookingchildren
            arrBookingChildren: [{ id: "1" }, { id: "2" }, { id: "3" }],
            arrBookingList: [],

            countAge: 0




        };
        this.headerRef = null;
        this.observer = null;
    }
    showToast = () => {
        toast.success("Đây là thông báo thành công!", {
            position: "top-right",
            autoClose: false, // Không tự động đóng
        });
    };

    CustomToastCloseButton = ({ closeToast }) => (
        <button onClick={closeToast} style={{ backgroundColor: "red", color: "white" }}>
            Đóng
        </button>
    );
    handleCheck = (event) => {
        event.preventDefault(); // Ngăn hành vi mặc định của Link
        // console.log("kiểm tra giá trị", this.state.datereal); // Kiểm tra giá trị


        if (!this.state.datereal) {
            alert("Quý khách chưa chọn ngày");
        } else if (this.state.countNumberTicket < 1) {
            alert("Quý khách chưa chọn số lượng người");
        } else {
            // Nếu cả hai điều kiện thỏa mãn, thực hiện điều hướng
            this.props.history.push("/vn/thanhtoan/indo");
        }

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
        // console.log("check hoverID", hoverId);

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
        // console.log("như cc")
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




        // console.log("check hovermenu1", this.state.hovermenu1)
        // console.log("check hovermenu2", this.state.hovermenu2)
        // console.log("check hovermenu3", this.state.hovermenu3)
        // console.log("check hovermenu4", this.state.hovermenu4)



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




        // console.log("check hovermenu1", this.state.hovermenu1)
        // console.log("check hovermenu2", this.state.hovermenu2)
        // console.log("check hovermenu3", this.state.hovermenu3)
        // console.log("check hovermenu4", this.state.hovermenu4)



    }
    handleChangePrev1 = () => {
        if (this.state.hovermenu5 === 0) {
            // console.log("test sơn đẹp trai")
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

        if (this.state.datereal !== this.props.stateDay) {
            // console.log("cho ơi là chó")
            this.setState({
                datereal: this.props.stateDay

            })
        }
        if (this.state.countNumberTicket !== this.props.countNumberChildTicket) {
            // console.log("cho ơi là chó")
            this.setState({
                countNumberTicket: this.props.countNumberChildTicket

            })
        }
        //

        if (this.state.countNumberChildTicket !== this.props.stateNumberTicket) {
            // console.log("cho ơi là chó")
            this.setState({
                countNumberChildTicket: this.props.stateNumberTicket

            })
        }





        const allMenu = [
            { name: "BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", giaAdult: "499000", giaChild: "499000", tang: "TẦNG 1" },
            { name: "BUFFET TẦNG 2-TÀU INDOCHINA QUEEN", giaAdult: "550000", giaChild: "550000", tang: "TẦNG 2" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600000", tang: "TẦNG 3" },
            { name: "SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650000", giaChild: "650000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650000", giaChild: "650000", tang: "SẢNH VIP" },
            { name: "SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750000", giaChild: "750000", tang: "SẢNH VIP" },
            { name: "SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750000", giaChild: "750000", tang: "SẢNH VIP" },
            { name: "SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850000", giaChild: "850000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850000", giaChild: "850000", tang: "SẢNH VIP" },
            { name: "SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950000", giaChild: "950000", tang: "SẢNH VIP" },
            { name: "SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950000", giaChild: "950000", tang: "SẢNH VIP" },
            { name: "SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1100000", giaChild: "1100000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1300000", giaChild: "1300000", tang: "SẢNH VIP" },
            { name: "SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1500000", giaChild: "1500000", tang: "SẢNH VIP" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600.000", tang: "SẢNH VIP" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600.000", tang: "SẢNH VIP" },
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
        this.setState({ dataMenuBooking }, () => {
            this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, dataMenuBooking, this.state.countNumberChildTicketAge)
            // console.log("Ngày đã chọn:", this.state.datereal);
        }

        );



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
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.datereal !== this.props.stateDay) {
    //         console.log("cho ơi là chó HHHH")
    //         this.setState({
    //             datereal: this.props.stateDay

    //         })
    //     }
    //     if (prevState.countNumberTicket !== this.props.countNumberChildTicket) {
    //         console.log("cho ơi là chó HHHH")
    //         this.setState({
    //             countNumberTicket: this.props.countNumberChildTicket

    //         })
    //     }

    //     if (prevState.countNumberChildTicket !== this.props.stateNumberTicket) {
    //         console.log("cho ơi là chó HHHH cay thế nhờ")
    //         this.setState({
    //             countNumberChildTicket: this.props.stateNumberTicket

    //         })
    //     }
    //     const allMenu = [
    //         { name: "BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", giaAdult: "499.000", tang: "TẦNG 1" },
    //         { name: "BUFFET TẦNG 2-TÀU INDOCHINA QUEEN", giaAdult: "550.000", tang: "TẦNG 2" },
    //         { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600.000", tang: "TẦNG 3" },
    //         { name: "SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650.000", tang: "SẢNH VIP" },

    //         //
    //         { name: "SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850.000", tang: "SẢNH VIP" },

    //         //
    //         { name: "SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1.100.000", tang: "SẢNH VIP" },

    //         //
    //         { name: "SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1.300.000", tang: "SẢNH VIP" },
    //         { name: "SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1.500.000", tang: "SẢNH VIP" },
    //         { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600.000", tang: "SẢNH VIP" },
    //         { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600.000", tang: "SẢNH VIP" },
    //     ];

    //     const menuMapping = {
    //         1: allMenu[0],
    //         2: allMenu[1],
    //         3: allMenu[2],
    //         4: allMenu[3],

    //         5: allMenu[4],
    //         6: allMenu[5],
    //         7: allMenu[6],
    //         8: allMenu[7],

    //         9: allMenu[8],
    //         10: allMenu[9],
    //         11: allMenu[10],
    //         12: allMenu[11],

    //         13: allMenu[12],
    //         14: allMenu[13],
    //         15: allMenu[14],
    //         16: allMenu[15],



    //         // Thêm các giá trị khác tại đây
    //         // 3: allMenu[2],
    //         // 4: allMenu[3],
    //     };

    //     if (prevProps.dataAllMenu !== this.props.dataAllMenu) {
    //         const selectedMenu = menuMapping[this.props.dataAllMenu]; // Lấy menu dựa trên giá trị `dataAllMenu`

    //         if (selectedMenu) { // Kiểm tra nếu tồn tại giá trị trong mapping
    //             const array = Object.values(selectedMenu);
    //             this.setState({ dataMenuBooking: array });
    //         }
    //     }

    //     if (prevProps.stateNumberTicketprint !== this.props.stateNumberTicketprint || prevState.testdate !== this.state.testdate) {
    //         console.log("ngủ đi ông già")

    //     }

    //     // if (prevState.date !== this.state.date) {
    //     //     this.props.allStateSave(this.state.date, this.state.countNumberTicket)

    //     // }
    //     // if (prevState.countNumberTicket !== this.state.countNumberTicket) {
    //     //     this.props.allStateSave(this.state.date, this.state.countNumberTicket)

    //     // }
    //     //stateNumberTicketprint: state.admin.stateNumberTicket,
    //     //stateDateChoseprint


    // }

    componentDidUpdate(prevProps, prevState) {
        const { props, state } = this; // Giảm truy cập vào `this`
        const updates = {};
        if (prevState.countNumberChildTicket !== this.state.countNumberChildTicket) {
            this.setState({
                pushInformChidl: this.state.countNumberChildTicket === 0 ? true : false,
            });
        }

        // 1. Cập nhật `datereal` khi `stateDay` thay đổi
        if (prevState.datereal !== props.stateDay) {
            updates.datereal = props.stateDay;
            // console.log("Update datereal");
        }

        // 2. Cập nhật `countNumberTicket` khi `countNumberChildTicket` thay đổi
        if (prevState.countNumberTicket !== props.countNumberChildTicket) {
            updates.countNumberTicket = props.countNumberChildTicket;
            // console.log("Update countNumberTicket");
        }

        // 3. Cập nhật `countNumberChildTicket` khi `stateNumberTicket` thay đổi
        if (prevState.countNumberChildTicket !== props.stateNumberTicket) {
            updates.countNumberChildTicket = props.stateNumberTicket;
            // console.log("Update countNumberChildTicket");
        }

        if (prevState.countNumberChildTicketAge !== props.dataCountChild) {
            updates.countNumberChildTicketAge = props.dataCountChild;
            // console.log("Update countNumberChildTicket");
        }

        // 4. Cập nhật menu dựa trên `dataAllMenu`
        if (prevProps.dataAllMenu !== props.dataAllMenu) {
            const selectedMenu = this.getMenuMapping()[props.dataAllMenu];
            if (selectedMenu) {
                updates.dataMenuBooking = Object.values(selectedMenu);
                // console.log("Update dataMenuBooking");
            }
        }

        // 5. Kiểm tra `stateNumberTicketprint` hoặc `testdate` để log thông báo
        // if (
        //     prevProps.stateNumberTicketprint !== props.stateNumberTicketprint ||
        //     prevState.testdate !== state.testdate
        // ) {
        //     console.log("Ngủ đi ông già");
        // }

        // 6. Thực hiện cập nhật trạng thái nếu có thay đổi
        if (Object.keys(updates).length > 0) {
            this.setState(updates);
        }
    }

    // Helper: Tách logic ánh xạ menu thành một hàm riêng
    getMenuMapping() {
        const allMenu = [
            { name: "BUFFET TẦNG 1-TÀU INDOCHINA QUEEN", giaAdult: "499000", giaChild: "499000", tang: "TẦNG 1" },
            { name: "BUFFET TẦNG 2-TÀU INDOCHINA QUEEN", giaAdult: "550000", giaChild: "550000", tang: "TẦNG 2" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600000", tang: "TẦNG 3" },
            { name: "SET INDO7-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650000", giaChild: "650000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO8-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "650000", giaChild: "650000", tang: "SẢNH VIP" },
            { name: "SET INDO9-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750000", giaChild: "750000", tang: "SẢNH VIP" },
            { name: "SET INDO10-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "750000", giaChild: "750000", tang: "SẢNH VIP" },
            { name: "SET INDO11-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850000", giaChild: "850000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO12-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "850000", giaChild: "850000", tang: "SẢNH VIP" },
            { name: "SET INDO13-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950000", giaChild: "950000", tang: "SẢNH VIP" },
            { name: "SET INDO14-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "950000", giaChild: "950000", tang: "SẢNH VIP" },
            { name: "SET INDO15-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1100000", giaChild: "1100000", tang: "SẢNH VIP" },

            //
            { name: "SET INDO16-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1300000", giaChild: "1300000", tang: "SẢNH VIP" },
            { name: "SET INDO17-SẢNH VIP TÀU INDOCHINA QUEEN", giaAdult: "1500000", giaChild: "1500000", tang: "SẢNH VIP" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600.000", tang: "SẢNH VIP" },
            { name: "BUFFET TẦNG 3-TÀU INDOCHINA QUEEN", giaAdult: "600000", giaChild: "600.000", tang: "SẢNH VIP" },
        ];

        // Tạo mapping từ mảng
        return allMenu.reduce((acc, item, index) => {
            acc[index + 1] = item; // Key là số thứ tự (index + 1)
            return acc;
        }, {});
    }


    componentWillUnmount() {
        if (this.headerRef && this.observer) {
            this.observer.unobserve(this.headerRef); // Hủy theo dõi header
        }
    }
    //changle date

    handleChange = (date) => {
        if (date) {
            const day = date.date().toString().padStart(2, "0"); // Lấy ngày (thêm 0 nếu nhỏ hơn 10)
            const month = (date.month() + 1).toString().padStart(2, "0"); // Lấy tháng (thêm 0 nếu nhỏ hơn 10)
            const year = date.year(); // Lấy năm

            // Tạo chuỗi ngày tháng năm
            const formattedDate = `${day}/${month}/${year}`;

            // Lưu chuỗi vào state
            this.setState({
                date,
                datereal: formattedDate
            }, () => {
                this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, this.state.dataMenuBooking, this.state.countNumberChildTicketAge)
                // console.log("Ngày đã chọn:", this.state.datereal);
            });
        } else {
            // console.log("Không có ngày được chọn!");
        }
    };



    // Hàm xử lý sự kiện click để cuộn trang về đầu
    // Xử lý add 
    handleSubtract = () => {
        const count = this.state.countNumberTicket - 1
        if (count > 0)
            this.setState({
                countNumberTicket: count

            }, () => {
                this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, this.state.dataMenuBooking, this.state.countNumberChildTicketAge)
                // console.log("Ngày đã chọn:", this.state.datereal);
            })

    }
    handleAdd = () => {
        const count = this.state.countNumberTicket + 1
        this.setState({
            countNumberTicket: count

        }, () => {
            this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, this.state.dataMenuBooking, this.state.countNumberChildTicketAge)
            // console.log("Ngày đã chọn:", this.state.datereal);
        })

    }

    //
    handleSubtractChild = () => {
        const count = this.state.countNumberChildTicket - 1;

        // Kiểm tra nếu count lớn hơn 0 để tránh việc giảm xuống dưới 0
        if (count >= 0) {
            const arrBookingList = Array.from({ length: count }, (_, index) => ({
                id: index + 1,
                [`${"age"}${index + 1}`]: 0, // Sử dụng [] để tạo key động
            }));

            this.setState({
                arrBookingList: arrBookingList, // Cập nhật lại mảng sau khi giảm
                countNumberChildTicket: count, // Cập nhật số lượng vé trẻ em
            }, () => {
                this.props.statusBookingChildren(arrBookingList)

                this.props.allStateSave(
                    this.state.datereal,
                    this.state.countNumberTicket,
                    this.state.countNumberChildTicket,
                    this.state.dataMenuBooking,
                    this.state.countNumberChildTicketAge
                );
                // console.log("Ngày đã chọn:", this.state.datereal);
            });
        }
    };

    handleAddChild = () => {
        const count = this.state.countNumberChildTicket + 1
        const arrBookingList = []
        arrBookingList.push(count)
        const transformedArray = Array.from({ length: arrBookingList[0] }, (_, index) => ({
            id: index + 1,
            [`${"age"}${index + 1}`]: 0, // Sử dụng [] để tạo key động

        }));
        console.log("chuyển rùi nè", transformedArray);
        // Kết quả: [{1: 1}, {2: 2}, {3: 3}, {4: 4}, {5: 5}]

        console.log("happy nhé +", arrBookingList)

        this.setState((prev) => ({
            ...prev,
            arrBookingList: transformedArray,
            countNumberChildTicket: count,
            pushInformChidl: false

        }), () => {
            this.props.statusBookingChildren(transformedArray)

            this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, this.state.dataMenuBooking, this.state.countNumberChildTicketAge)
            console.log("Ngày đã chọn:", this.state.datereal);
        })

    }
    // age child



    handleSubtractChildAge = (event) => {
        const name = event.target.getAttribute('name'); // Lấy giá trị "childAge"
        console.log("name cần lấy là", name);

        if (2 > 1) { // Điều kiện kiểm tra (đoạn này không cần thiết lắm, bạn có thể bỏ)
            const arrBookingTest = this.props.statusBookingChildrenn.map((item) => {
                // Kiểm tra item.id
                console.log("itemid cần take", item.id);

                if (item.id == name) {
                    const count1 = item[`${"age"}${item.id}`] - 1;

                    // Chỉ cập nhật nếu count1 trong khoảng 0 đến 10
                    if (count1 >= 0 && count1 <= 10) {
                        return {
                            ...item, // Sao chép các thuộc tính hiện tại
                            [`${"age"}${item.id}`]: count1, // Thay đổi giá trị age
                        };
                    }
                }
                return item; // Giữ nguyên phần tử nếu id không khớp
            });

            // Cập nhật lại state chỉ khi có sự thay đổi hợp lệ
            this.setState({ arrBookingList: arrBookingTest }, () => {
                this.props.statusBookingChildren(arrBookingTest)

                console.log("Cập nhật arrBookingList:", this.state.arrBookingList);
            });
        }
    };

    handleAddChildAge = (event) => {
        // const count = this.state.countNumberChildTicketAge + 1

        const name = event.target.getAttribute('name'); // Lấy giá trị "childAge"


        console.log("name cần lấy là", name)

        if (2 > 1) {
            const arrBookingTest = this.props.statusBookingChildrenn.map((item) => {
                // Nếu item.id === 1, thay đổi age
                if (item.id == name) {
                    const count1 = item[`${"age"}${item.id}`] + 1
                    if (count1 >= 0 && count1 < 10) {
                        return {
                            ...item, // Sao chép các thuộc tính hiện tại
                            [`${"age"}${item.id}`]: count1, // Thay đổi giá trị age
                        };
                    }


                }
                return item; // Giữ nguyên phần tử nếu id khác 1
            });

            // Cập nhật lại state
            this.setState({ arrBookingList: arrBookingTest }, () => {
                this.props.statusBookingChildren(arrBookingTest)

                console.log("Cập nhật arrBookingList:", this.state.arrBookingList);
            });
            console.log("name cần lấyyyyyyyyyyyyyyyyyyyyyyyyyyyjjjjjjjjjjjj", arrBookingTest);



            // arrChildrenNeed.push({ id: id, count: count })
            // console.log('check arrChildrenNeed', arrChildrenNeed)

            // if ((count >= 0) && (count < 10))
            //     this.setState({
            //         countNumberChildTicketAge: count

            //     }, () => {
            //         this.props.allStateSave(this.state.datereal, this.state.countNumberTicket, this.state.countNumberChildTicket, this.state.dataMenuBooking, this.state.countNumberChildTicketAge)
            //         // console.log("Ngày đã chọn:", this.state.datereal);
            //     })


        }




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

    handleInformChidl = () => {
        this.setState((prev) => ({
            ...prev,
            pushInformChidl: !prev.pushInformChidl



        }))


    }












    render() {
        if (1 > 2) {
            return <div>Loading...</div>; // Hiển thị loading trong khi chờ dữ liệu khôi phục
        }

        console.log('test list', this.state.arrBookingList)

        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', this.props.statusBookingChildrenn)




        //


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
                        <div className='indochinaqueen-main-body-box1-menu'>
                            <div className='indochinaqueen-main-body-box1-menu-item1'>
                                <div className='indochinaqueen-main-body-box1-menu-item1-img'>
                                    <img className='indochinaqueen-main-body-box1-menu-item1-img' src={menu1}></img>
                                </div>
                                <div className='indochinaqueen-main-body-box1-menu-item1-text'>
                                    <div className='menu-item1-text--list1'>{this.state.dataMenuBooking[0]}</div>
                                    <div className='menu-item1-text--list2'>{Number(this.state.dataMenuBooking[1]).toLocaleString('vi-VN')}<i class="fa-solid fa-dong-sign"></i></div>
                                    <div className='menu-item1-text--list3'>Chọn Ngày Đặt Bàn{this.props.testStatus}</div>
                                    <div className='menu-item1-text--listdate'>
                                        <div className='lisdatecus'>
                                            <StyledWrapper>
                                                <StyledDatePickerWrapper>
                                                    <DatePicker
                                                        value={this.state.date}
                                                        onChange={this.handleChange}
                                                        placeholder={this.state.datereal}
                                                        disabledDate={this.disabledDate} // Áp dụng hàm disabledDate
                                                        format="DD/MM/YYYY"

                                                    />
                                                </StyledDatePickerWrapper>
                                            </StyledWrapper>
                                        </div>
                                    </div>
                                    <div className='menu-item1-text--list4'>
                                        <div className='menu-item1-text--list4-box1'>
                                            <div className=''>Người lớn: </div>
                                            <div onClick={this.handleSubtract} className='menu-item1-text--list4-subtract'>-</div>
                                            <div className='menu-item1-text--list4-number'>{this.state.countNumberTicket}</div>

                                            <div onClick={this.handleAdd} className='menu-item1-text--list4-add'>+</div>

                                        </div>
                                        {/* <div className='menu-item1-text--list4-box2'>
                                            <div className='menu-item1-text--list4-box2-item1'>Trẻ em:</div>
                                            <div onClick={this.handleInformChidl} className='menu-item1-text--list4-box2-item2'>THÊM THÔNG TIN</div>

                                        </div> */}
                                        <div className='menu-item1-text--list4-box2'>
                                            <div className=''>Trẻ em</div>
                                            <div onClick={this.handleSubtractChild} className='menu-item1-text--list4-subtract'>-</div>
                                            <div className='menu-item1-text--list4-number'>{this.state.countNumberChildTicket}</div>

                                            <div onClick={this.handleAddChild} className='menu-item1-text--list4-add'>+</div>

                                        </div>
                                        {/* <div className='menu-item1-text--list4-box2'>
                                            <div className=''>Tuổi trẻ em</div>
                                            <div onClick={this.handleSubtractChildAge} className='menu-item1-text--list4-subtract'>-</div>
                                            <div className='menu-item1-text--list4-number'>{this.state.countNumberChildTicketAge}</div>

                                            <div onClick={this.handleAddChildAge} className='menu-item1-text--list4-add'>+</div>

                                        </div> */}

                                        {/* <div className='menu-item1-text--list4-box2'>
                                            <div className=''>Tuổi trẻ em</div>
                                            <div onClick={this.handleSubtractChildAge} className='menu-item1-text--list4-subtract'>-</div>
                                            <div className='menu-item1-text--list4-number'>{this.state.countNumberChildTicketAge}</div>

                                            <div onClick={this.handleAddChildAge} className='menu-item1-text--list4-add'>+</div>

                                        </div> */}





                                    </div>
                                    <div className='menu-item1-text--list5'>
                                        <div className='menu-item1-text--list5-item1'> <i class="fa-solid fa-cart-shopping"></i> THÊM VÀO GIỏ HÀNG</div>
                                        <div
                                            onClick={this.handleCheck}
                                            className="menu-item1-text--list5-item2"
                                            style={{ cursor: "pointer" }} // Thêm con trỏ giống Link
                                        >
                                            <i className="fa-regular fa-money-bill-1"></i>
                                            THANH TOÁN NGAY
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className='indochinaqueen-main-body-box1-menu-item2'>
                                <div className='indochinaqueen-main-body-box1-menu-item2-text'>
                                    Buffet tối trên Tàu Đông Dương
                                    Indochina Queen là lựa chọn hoàn hảo cho những du khách
                                    đang muốn tìm kiếm những trải nghiệm độc đáo. Những món ăn Âu Á và những món
                                    đặc trưng của Việt Nam được chế biến từ những đầu bếp giàu kinh nghiệm, chắc chắn sẽ cho bạn một buổi tối ngon miệng. Vừa thưởng thức hương vị đặc biệt của từng món ăn vừa xem những màn trình diễn nhạc và múa dân tộc đặc sắc từ các nghệ sĩ trong
                                    ban nhạc Dân Tộc, đây sẽ là lựa chọn hoàn hảo để kết thúc một đêm trọn vẹn
                                    bên cạnh những người thân yêu.
                                </div>
                                {this.state.pushInformChidl ? (<div className='indochinaqueen-main-body-box1-menu-item2-text2'>
                                    <div className=''>Chọn menu được miễn phí vé lên tàu. Mỗi nhóm khách chỉ chọn được 01 menu. Chính sách giá trẻ em: Từ 4 – 9 tuổi, Giá: 325.000đ/trẻ. Hotline đặt vé gọi ngay: 09 48 17 00 36. Giá không áp dụng vào dịp Lễ , Tết.</div>
                                    <div className=''>
                                        <div className=''><i className="fa-solid fa-utensils thumbtack-cus "></i> Tàu Indochina Queen:

                                        </div>
                                        <div className=''><i class="fa-solid fa-utensils thumbtack-cus"></i> Trẻ em từ 0-4 tuổi bên em  MIỄN PHÍ


                                        </div>
                                        <div className=''><i class="fa-solid fa-utensils thumbtack-cus"></i> Từ 10 tuổi bên em tính vé người lớn


                                        </div>
                                        <div className=''><i class="fa-solid fa-utensils thumbtack-cus"></i> Tàu Indochina Queen
                                        </div>
                                    </div>

                                </div>) : (

                                    <React.Fragment>
                                        <div className='indochinaqueen-main-body-box1-menu-item2-text'>
                                            <div className='maincontainer-booking'>

                                                {this.props.statusBookingChildrenn.map((item, index) => (
                                                    console.log('check index', index),
                                                    < div key={index} className='list-booking-children' >
                                                        <div className='menu-item1-text--list4-box2'>
                                                            <div>Tuổi trẻ em {item.id}</div>
                                                            <div name={item.id} onClick={this.handleSubtractChildAge} className='menu-item1-text--list4-subtract'>-</div>
                                                            <div className='menu-item1-text--list4-number'>  {item[`age${item.id}`]}</div>
                                                            <div name={item.id} onClick={this.handleAddChildAge} className='menu-item1-text--list4-add'>+</div>
                                                        </div>
                                                    </div>
                                                ))}





                                            </div>



                                        </div>



                                    </React.Fragment>



                                )}

                            </div>



                        </div>



                    </div>
                    <div className='indochinaqueen-main-body-box1'>
                        <div className='indochinaqueen-main-body-box1-describe'>
                            <div className='indochinaqueen-main-body-box1-describe-list1'>
                                <div onClick={this.describe} className={this.state.describe === true ? "indochinaqueen-main-body-box1-describe-list1-text1 indochinaqueen-main-body-box1-describe-list1-text1-hover " : "indochinaqueen-main-body-box1-describe-list1-text1"} >Mô tả</div>
                                <div onClick={this.comment} className={this.state.comment === true ? "indochinaqueen-main-body-box1-describe-list1-text2 indochinaqueen-main-body-box1-describe-list1-text2-hover " : "indochinaqueen-main-body-box1-describe-list1-text2"} >Đánh giá(5)</div>


                            </div>

                            {this.state.describe === true && <div className='indochinaqueen-main-body-box1-describe-list2'>
                                Khai vị 2 món (Trứng cút bách hoa + Chả giò tôm cua) <br />
                                Shrimps wrapped in quail egg + Spring roll w. shrimps and crab<br />
                                Súp gà xé với nấm đông cô<br />
                                Chicken soup w. mushroom<br />
                                Mực chiên nước mắm<br />
                                Fried squid w. fish sauce<br />
                                Cá chẽm hấp kỳ lân<br />
                                Steamed Sea Bass<br />
                                Đùi gà roti + Khoai tây chiên<br />
                                Roasted chicken legs + Fried potato<br />
                                Lẩu Thái hải sản + Bún & rau sống<br />
                                Thai seafood hot pot + Fresh nooldle & vegetable<br />
                                Tráng miệng<br />
                                Dessert<br />

                            </div>}
                            {this.state.comment === true && <div className='indochinaqueen-main-body-box1-describe-list3'>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box1'>
                                    Đánh giá


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box2'>
                                    Có 5 đánh giá.



                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box3'>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list1'>
                                        <div className='list3-box3-list1-test1'>S</div>
                                        <div className='list3-box3-list1-test2'>NGỌC SƠN</div>
                                        <div className='list3-box3-list1-test3'> <i class="fa-regular fa-clock"></i> 4/12/2024 17:51</div>

                                    </div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list3'>Sản phẩm ok. Nhân viên hổ trợ nhiệt tình.</div>


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box3'>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list1'>
                                        <div className='list3-box3-list1-test1'>S</div>
                                        <div className='list3-box3-list1-test2'>NGỌC SƠN</div>
                                        <div className='list3-box3-list1-test3'> <i class="fa-regular fa-clock"></i> 4/12/2024 17:51</div>

                                    </div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list3'>Sản phẩm ok. Nhân viên hổ trợ nhiệt tình.</div>


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box3'>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list1'>
                                        <div className='list3-box3-list1-test1'>S</div>
                                        <div className='list3-box3-list1-test2'>NGỌC SƠN</div>
                                        <div className='list3-box3-list1-test3'> <i class="fa-regular fa-clock"></i> 4/12/2024 17:51</div>

                                    </div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list3'>Sản phẩm ok. Nhân viên hổ trợ nhiệt tình.</div>


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box3'>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list1'>
                                        <div className='list3-box3-list1-test1'>S</div>
                                        <div className='list3-box3-list1-test2'>NGỌC SƠN</div>
                                        <div className='list3-box3-list1-test3'> <i class="fa-regular fa-clock"></i> 4/12/2024 17:51</div>

                                    </div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list3'>Sản phẩm ok. Nhân viên hổ trợ nhiệt tình.</div>


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-box3'>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list1'>
                                        <div className='list3-box3-list1-test1'>S</div>
                                        <div className='list3-box3-list1-test2'>NGỌC SƠN</div>
                                        <div className='list3-box3-list1-test3'> <i class="fa-regular fa-clock"></i> 4/12/2024 17:51</div>

                                    </div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list2'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                    <div className='indochinaqueen-main-body-box1-describe-list3-box3-list3'>Sản phẩm ok. Nhân viên hổ trợ nhiệt tình.</div>


                                </div>
                                <div className='indochinaqueen-main-body-box1-describe-list3-comment'>
                                    <div className='comment-list1'>Hãy nhận xét “BUFFET TẦNG 3 – TÀU INDOCHINA QUEEN” </div>
                                    <div className='comment-list2'>
                                        <div className='comment-list2-box1'>Đánh giá của bạn</div>
                                        <input className='comment-list2-box2' type='text'></input>

                                    </div>
                                    <div className='comment-list3'>
                                        <div className='comment-list3-box1'>
                                            <div className='comment-list3-box1-item1'>Tên*</div>
                                            <input className='comment-list3-box1-item2'></input>

                                        </div>
                                        <div className='comment-list3-box2'>
                                            <div className='comment-list3-box2-item1'>Email*</div>
                                            <input className='comment-list3-box2-item2'></input>
                                        </div>

                                    </div>
                                    <div className='comment-list4'>BÌNH LUẬN </div>
                                </div>



                            </div>}


                        </div>


                    </div>
                    {/* <div className='indochinaqueen-main-body-box1'>
                        <div>
                            <button onClick={this.showToast}>Hiển thị thông báo</button>
                            <ToastContainer
                                className="toast-container"
                                toastClassName="toast-item"
                                bodyClassName="toast-item-body"
                                autoClose={false}
                                hideProgressBar={true}
                                pauseOnHover={false}
                                pauseOnFocusLoss={true}
                                closeOnClick={false}
                                draggable={false}
                                closeButton={({ closeToast }) => (
                                    <button
                                        onClick={closeToast} // Gọi đúng hàm đóng
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            padding: "4px 8px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Đóng
                                    </button>
                                )}
                            />
                        </div>



                    </div> */}
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn, //dataAllMenu
        dataAllMenu: state.admin.dataAllMenu,
        idMenu: state.admin.idMenu,
        stateNumberTicketprint: state.admin.stateNumberTicket,
        stateDateChoseprint: state.admin.stateDateChose,
        stateDay: state.admin.stateDate,
        countNumberChildTicket: state.admin.countNumberChildTicket,
        stateNumberTicket: state.admin.stateNumberTicket,
        allMenuchosen: state.admin.allMenuchosen,
        dataCountChild: state.admin.dataCountChild,
        statusBookingChildrenn: state.admin.statusBookingChildren


        // trạng thái vé booking children




    };
};

const mapDispatchToProps = dispatch => {
    return {
        statusBookingChildren: (data) => dispatch(actions.statusBookingChildren(data)),
        allStateSave: (dataDate, dataAdult, dataChild, dataMenuBooking, countChild) => dispatch(actions.handleAllStateSave(dataDate, dataAdult, dataChild, dataMenuBooking, countChild))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booking_menu);
