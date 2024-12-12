import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Body.scss'
import { DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions/index.js";
import { withRouter } from 'react-router-dom';
import _ from 'lodash';





const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const StyledDatePickerWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  .ant-picker-suffix{
  color: #fff;
  font-size: 25px;
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
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,
            hovermenu1: 0,
            hovermenu2: "",
            hovermenu3: "",
            hovermenu4: "",

            hovermenu5: 0,
            hovermenu6: "",
            hovermenu7: "",
            hovermenu8: "",

            radiobooking: ""
        };
    }
    disabledDate = (current) => {
        // Disable tất cả các ngày trước hôm nay
        return current && current < moment().startOf('day');
    };
    handleChange = (date, dateString) => {
        console.log(date, dateString); // In ra đối tượng ngày và chuỗi ngày
        this.setState({ date });
    };
    //test function mới
    // handleChangePrev = () => {
    //     this.setState((prevState) => {
    //         const { hovermenu1, hovermenu2, hovermenu3, hovermenu4 } = prevState;

    //         if (hovermenu1 === 0) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: "",
    //                 hovermenu3: "",
    //                 hovermenu4: 3,
    //             };
    //         } else if (hovermenu2 === 1) {
    //             return {
    //                 hovermenu1: 0,
    //                 hovermenu2: "",
    //                 hovermenu3: "",
    //                 hovermenu4: "",
    //             };
    //         } else if (hovermenu3 === 2) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: 1,
    //                 hovermenu3: "",
    //                 hovermenu4: "",
    //             };
    //         } else if (hovermenu4 === 3) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: "",
    //                 hovermenu3: 2,
    //                 hovermenu4: "",
    //             };
    //         }

    //         // Trường hợp mặc định, không thay đổi gì
    //         return null;
    //     });
    // };

    // handleDot = (event) => {
    //     const hoverId = event.target.getAttribute('data-hover-id');
    //     console.log("check hoverID", hoverId);

    //     // Đối tượng ánh xạ hoverId tới các giá trị cần thiết
    //     const hoverValues = {
    //         hover1: { hovermenu1: 0, hovermenu2: "", hovermenu3: "", hovermenu4: "" },
    //         hover2: { hovermenu1: "", hovermenu2: 1, hovermenu3: "", hovermenu4: "" },
    //         hover3: { hovermenu1: "", hovermenu2: "", hovermenu3: 2, hovermenu4: "" },
    //         hover4: { hovermenu1: "", hovermenu2: "", hovermenu3: "", hovermenu4: 3 },

    //         //
    //         hover5: { hovermenu5: 0, hovermenu6: "", hovermenu7: "", hovermenu8: "" },
    //         hover6: { hovermenu5: "", hovermenu6: 1, hovermenu7: "", hovermenu8: "" },
    //         hover7: { hovermenu5: "", hovermenu6: "", hovermenu7: 2, hovermenu8: "" },
    //         hover8: { hovermenu5: "", hovermenu6: "", hovermenu7: "", hovermenu8: 3 }
    //     };

    //     // Kiểm tra hoverId có tồn tại trong đối tượng hoverValues
    //     if (hoverValues[hoverId]) {
    //         // Cập nhật state bằng cách lấy giá trị từ đối tượng hoverValues
    //         this.setState(hoverValues[hoverId]);
    //     }
    // }

    // test = () => {
    //     console.log("như cc")
    // }
    // handleChangeNext = () => {
    //     this.setState((prevState) => {
    //         const { hovermenu1, hovermenu2, hovermenu3, hovermenu4 } = prevState;

    //         if (hovermenu1 === 0) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: hovermenu1 + 1,
    //                 hovermenu3: "",
    //                 hovermenu4: "",
    //             };
    //         } else if (hovermenu2 === 1) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: "",
    //                 hovermenu3: hovermenu2 + 1,
    //                 hovermenu4: "",
    //             };
    //         } else if (hovermenu3 === 2) {
    //             return {
    //                 hovermenu1: "",
    //                 hovermenu2: "",
    //                 hovermenu3: "",
    //                 hovermenu4: hovermenu3 + 1,
    //             };
    //         } else if (hovermenu4 === 3) {
    //             return {
    //                 hovermenu1: 0,
    //                 hovermenu2: "",
    //                 hovermenu3: "",
    //                 hovermenu4: "",
    //             };
    //         }

    //         // Trường hợp mặc định, không thay đổi gì
    //         return null;
    //     }, () => {
    //         // Gọi callback sau khi setState hoàn tất để đảm bảo trạng thái đã cập nhật
    //         console.log("check hovermenu1", this.state.hovermenu1);
    //         console.log("check hovermenu2", this.state.hovermenu2);
    //         console.log("check hovermenu3", this.state.hovermenu3);
    //         console.log("check hovermenu4", this.state.hovermenu4);
    //     });
    // };

    handleChangePrev = () => {
        this.setState((prevState) => {
            const menus = [prevState.hovermenu1, prevState.hovermenu2, prevState.hovermenu3, prevState.hovermenu4];
            const currentIndex = menus.findIndex((menu) => menu !== ""); // Tìm index menu đang hoạt động

            // Nếu không có menu nào đang hoạt động, hoặc đang ở menu đầu tiên, chuyển về menu cuối
            if (currentIndex === -1 || currentIndex === 0) {
                return {
                    hovermenu1: "",
                    hovermenu2: "",
                    hovermenu3: "",
                    hovermenu4: 3,
                };
            }

            // Cập nhật menu trước đó
            const updatedMenus = Array(4).fill("");
            updatedMenus[currentIndex - 1] = currentIndex - 1;

            return {
                hovermenu1: updatedMenus[0],
                hovermenu2: updatedMenus[1],
                hovermenu3: updatedMenus[2],
                hovermenu4: updatedMenus[3],
            };
        });
    };

    handleChangeNext = () => {
        this.setState((prevState) => {
            const menus = [prevState.hovermenu1, prevState.hovermenu2, prevState.hovermenu3, prevState.hovermenu4];
            const currentIndex = menus.findIndex((menu) => menu !== ""); // Tìm index menu đang hoạt động

            // Nếu không có menu nào đang hoạt động, hoặc đang ở menu cuối, chuyển về menu đầu
            if (currentIndex === -1 || currentIndex === 3) {
                return {
                    hovermenu1: 0,
                    hovermenu2: "",
                    hovermenu3: "",
                    hovermenu4: "",
                };
            }

            // Cập nhật menu kế tiếp
            const updatedMenus = Array(4).fill("");
            updatedMenus[currentIndex + 1] = currentIndex + 1;

            return {
                hovermenu1: updatedMenus[0],
                hovermenu2: updatedMenus[1],
                hovermenu3: updatedMenus[2],
                hovermenu4: updatedMenus[3],
            };
        });
    };

    handleDot = (event) => {
        const hoverId = event.target.getAttribute("data-hover-id");
        console.log("check hoverID", hoverId);

        // Đối tượng ánh xạ hoverId tới các giá trị cần thiết
        const hoverValues = {
            hover1: { hovermenu1: 0, hovermenu2: "", hovermenu3: "", hovermenu4: "" },
            hover2: { hovermenu1: "", hovermenu2: 1, hovermenu3: "", hovermenu4: "" },
            hover3: { hovermenu1: "", hovermenu2: "", hovermenu3: 2, hovermenu4: "" },
            hover4: { hovermenu1: "", hovermenu2: "", hovermenu3: "", hovermenu4: 3 },

            hover5: { hovermenu5: 0, hovermenu6: "", hovermenu7: "", hovermenu8: "" },
            hover6: { hovermenu5: "", hovermenu6: 1, hovermenu7: "", hovermenu8: "" },
            hover7: { hovermenu5: "", hovermenu6: "", hovermenu7: 2, hovermenu8: "" },
            hover8: { hovermenu5: "", hovermenu6: "", hovermenu7: "", hovermenu8: 3 }
        };

        // Kiểm tra hoverId có tồn tại trong đối tượng hoverValues
        if (hoverValues[hoverId]) {
            this.setState(hoverValues[hoverId]);
        }
    };


    // handleChangeNext1 = () => {
    //     this.setState((prevState) => {
    //         const { hovermenu5, hovermenu6, hovermenu7, hovermenu8 } = prevState;

    //         if (hovermenu5 === 0) {
    //             return {
    //                 hovermenu5: "",
    //                 hovermenu6: hovermenu5 + 1,
    //                 hovermenu7: "",
    //                 hovermenu8: "",
    //             };
    //         } else if (hovermenu6 === 1) {
    //             return {
    //                 hovermenu5: "",
    //                 hovermenu6: "",
    //                 hovermenu7: hovermenu6 + 1,
    //                 hovermenu8: "",
    //             };
    //         } else if (hovermenu7 === 2) {
    //             return {
    //                 hovermenu5: "",
    //                 hovermenu6: "",
    //                 hovermenu7: "",
    //                 hovermenu8: hovermenu7 + 1,
    //             };
    //         } else if (hovermenu8 === 3) {
    //             return {
    //                 hovermenu5: 0,
    //                 hovermenu6: "",
    //                 hovermenu7: "",
    //                 hovermenu8: "",
    //             };
    //         }

    //         return null; // Trường hợp không có gì thay đổi
    //     }, () => {
    //         console.log("check hovermenu5", this.state.hovermenu5);
    //         console.log("check hovermenu6", this.state.hovermenu6);
    //         console.log("check hovermenu7", this.state.hovermenu7);
    //         console.log("check hovermenu8", this.state.hovermenu8);
    //     });
    // };

    // handleChangePrev1 = () => {
    //     this.setState((prevState) => {
    //         const { hovermenu5, hovermenu6, hovermenu7, hovermenu8 } = prevState;

    //         if (hovermenu5 === 0) {
    //             return {
    //                 hovermenu8: 3,
    //                 hovermenu5: "",
    //                 hovermenu6: "",
    //                 hovermenu7: "",
    //             };
    //         } else if (hovermenu6 === 1) {
    //             return {
    //                 hovermenu8: "",
    //                 hovermenu5: 0,
    //                 hovermenu6: "",
    //                 hovermenu7: "",
    //             };
    //         } else if (hovermenu7 === 2) {
    //             return {
    //                 hovermenu8: "",
    //                 hovermenu5: "",
    //                 hovermenu6: 1,
    //                 hovermenu7: "",
    //             };
    //         } else if (hovermenu8 === 3) {
    //             return {
    //                 hovermenu8: "",
    //                 hovermenu5: "",
    //                 hovermenu6: "",
    //                 hovermenu7: 2,
    //             };
    //         }

    //         return null; // Trường hợp không có gì thay đổi
    //     });
    // };
    handleChangeNext1 = () => {
        this.setState((prevState) => {
            const menus = [prevState.hovermenu5, prevState.hovermenu6, prevState.hovermenu7, prevState.hovermenu8];
            const currentIndex = menus.findIndex((menu) => menu !== ""); // Tìm index menu đang hoạt động

            // Nếu không có menu nào đang hoạt động, hoặc đang ở menu cuối, chuyển về menu đầu
            if (currentIndex === -1 || currentIndex === 3) {
                return {
                    hovermenu5: 0,
                    hovermenu6: "",
                    hovermenu7: "",
                    hovermenu8: "",
                };
            }

            // Cập nhật menu kế tiếp
            const updatedMenus = Array(4).fill("");
            updatedMenus[currentIndex + 1] = currentIndex + 1;

            return {
                hovermenu5: updatedMenus[0],
                hovermenu6: updatedMenus[1],
                hovermenu7: updatedMenus[2],
                hovermenu8: updatedMenus[3],
            };
        }, () => {
            // Gọi callback để kiểm tra state sau khi cập nhật
            console.log("check hovermenu5", this.state.hovermenu5);
            console.log("check hovermenu6", this.state.hovermenu6);
            console.log("check hovermenu7", this.state.hovermenu7);
            console.log("check hovermenu8", this.state.hovermenu8);
        });
    };

    handleChangePrev1 = () => {
        this.setState((prevState) => {
            const menus = [prevState.hovermenu5, prevState.hovermenu6, prevState.hovermenu7, prevState.hovermenu8];
            const currentIndex = menus.findIndex((menu) => menu !== ""); // Tìm index menu đang hoạt động

            // Nếu không có menu nào đang hoạt động, hoặc đang ở menu đầu tiên, chuyển về menu cuối
            if (currentIndex === -1 || currentIndex === 0) {
                return {
                    hovermenu5: "",
                    hovermenu6: "",
                    hovermenu7: "",
                    hovermenu8: 3,
                };
            }

            // Cập nhật menu trước đó
            const updatedMenus = Array(4).fill("");
            updatedMenus[currentIndex - 1] = currentIndex - 1;

            return {
                hovermenu5: updatedMenus[0],
                hovermenu6: updatedMenus[1],
                hovermenu7: updatedMenus[2],
                hovermenu8: updatedMenus[3],
            };
        });
    };

    choseNews = (event) => {
        // Lấy giá trị của thuộc tính 'data-name'
        const linkName = event.currentTarget.getAttribute('data-name');
        this.props.chonseNewsClick(linkName)
        console.log(linkName); // In ra tên của thẻ Link
    };


    //hande booking
    handleRadioChange = (event) => {
        // Lấy giá trị của id từ thẻ radio
        const radioId = event.target.id;
        console.log("radio", radioId); // In ra giá trị id của thẻ radio
        this.setState({
            radiobooking: radioId

        })




        // if (radioId == "indochina" || radioId == "hn-vien-dong") {
        //     this.props.history.push("/vn/booking");
        // } else {
        //     // Nếu cả hai điều kiện thỏa mãn, thực hiện điều hướng
        //     this.props.history.push("/vn/booking");
        // }
    };

    handleCheck = (event) => {
        // console.log("kiểm tra giá trị", this.state.datereal); // Kiểm tra giá trị

        if (this.state.radiobooking == "indochina") {
            this.props.history.push("/vn/booking");
        } else if (this.state.radiobooking == "hn-vien-dong") {
            this.props.history.push("/vn/booking");
        }
    };


    render() {


        return (
            <React.Fragment>
                <div className='indochinaqueen-body'>
                    <div className='indochinaqueen-body-box1'>
                        <div className='indochinaqueen-body-box1-cruise'>
                            <div className='indochinaqueen-body-box1-cruise-item1'>
                                <div className='indochinaqueen-body-box1-cruise-item1-text1'>Cruise</div>
                                <div className='indochinaqueen-body-box1-cruise-item1-text2'>12h30</div>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item2'>
                                <img src='https://www.marina-de-paris.com/wp-content/uploads/2016/02/20211006_GRAND_PAVOIS_01_JOUR_TABLES_DRESSE%E2%95%A0uE_630x420_72DPI_SRGB-2-300x200.jpg.webp' className=''>
                                </img>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item3'>
                                Orsay lunch cruise - Duration: 1h30 From  €49
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item4'>
                                BOOKING NGAY
                            </div>
                        </div>
                        <div className='indochinaqueen-body-box1-cruise'>
                            <div className='indochinaqueen-body-box1-cruise-item1'>
                                <div className='indochinaqueen-body-box1-cruise-item1-text1'>Cruise</div>
                                <div className='indochinaqueen-body-box1-cruise-item1-text2'>12h30</div>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item2'>
                                <img src='https://www.marina-de-paris.com/wp-content/uploads/2016/02/20211006_GRAND_PAVOIS_01_JOUR_TABLES_DRESSE%E2%95%A0uE_630x420_72DPI_SRGB-2-300x200.jpg.webp' className=''>
                                </img>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item3'>
                                Orsay lunch cruise - Duration: 1h30 From  €49
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item4'>
                                BOOKING NGAY
                            </div>
                        </div>
                        <div className='indochinaqueen-body-box1-cruise'>
                            <div className='indochinaqueen-body-box1-cruise-item1'>
                                <div className='indochinaqueen-body-box1-cruise-item1-text1'>Cruise</div>
                                <div className='indochinaqueen-body-box1-cruise-item1-text2'>12h30</div>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item2'>
                                <img src='https://www.marina-de-paris.com/wp-content/uploads/2016/02/20211006_GRAND_PAVOIS_01_JOUR_TABLES_DRESSE%E2%95%A0uE_630x420_72DPI_SRGB-2-300x200.jpg.webp' className=''>
                                </img>
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item3'>
                                Orsay lunch cruise - Duration: 1h30 From  €49
                            </div>
                            <div className='indochinaqueen-body-box1-cruise-item4'>
                                BOOKING NGAY
                            </div>
                        </div>
                        <div className='indochinaqueen-body-box1-cruise indochinaqueen-body-box1-cruise-booking'>
                            <div className='indochinaqueen-body-box1-cruise-booking-text1'>TO BOOK</div>
                            <div className='indochinaqueen-body-box1-cruise-booking-text2'>
                                <div className=''>Choose your date
                                </div>
                                <div className=''>
                                    <StyledWrapper>
                                        <StyledDatePickerWrapper>
                                            <DatePicker
                                                value={this.state.date}
                                                onChange={this.handleChange}
                                                placeholder={this.state.date}
                                                disabledDate={this.disabledDate} // Áp dụng hàm disabledDate
                                                format="DD/MM/YYYY"

                                            />
                                        </StyledDatePickerWrapper>
                                    </StyledWrapper>

                                </div>

                            </div>
                            <div className='indochinaqueen-body-box1-cruise-booking-text3'>
                                <div className='indochinaqueen-body-box1-cruise-booking-text3-list1'>Choose your cruise</div>
                                <div className='indochinaqueen-body-box1-cruise-booking-text3-list2'>
                                    <input // Thêm con trỏ giống Link
                                        onClick={this.handleRadioChange} type='radio' name='cruise' id='indochina'></input>
                                    <label className='cusorcus' htmlFor='indochina'>INDOCHINA</label>

                                    <input onClick={this.handleRadioChange} type='radio' name='cruise' id='hn-vien-dong'></input>
                                    <label className='cusorcus' htmlFor='hn-vien-dong'>HN VIỄN ĐÔNG</label>
                                </div>
                            </div>

                            <div id='hn-vien-dong' className='indochinaqueen-body-box1-cruise-booking-text4'>
                                <div onClick={this.handleCheck} className=''>TO BOOK</div>

                            </div>
                        </div>

                    </div>
                    <div className='indochinaqueen-body-box2'>

                    </div>
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
                    <div className='indochinaqueen-body-box4'>
                        <div className='indochinaqueen-body-box4-item1'>
                            <div className='indochinaqueen-body-box4-box-list1'>Event and privatization</div>
                            <div className='indochinaqueen-body-box4-box-list2'>

                                <div className='indochinaqueen-body-box4-box-list2-item1'>
                                    <div className='indochinaqueen-body-box4-box-list2-item1-text1'>PARTICULAR</div>

                                    <div className='indochinaqueen-body-box4-box-list2-item1-text2'>Wedding, birthday, family or friends reunion, we guarantee you an exceptional moment...</div>

                                    <div className='indochinaqueen-body-box4-box-list2-item1-text3'>INQUIRE</div>

                                </div>
                                <div className='indochinaqueen-body-box4-box-list2-item2'>
                                    <div className='indochinaqueen-body-box4-box-list2-item1-text1'>BUSINESS</div>

                                    <div className='indochinaqueen-body-box4-box-list2-item1-text2'>Seminar, client invitation, team meal… La Marina organizes your tailor-made event…</div>

                                    <div className='indochinaqueen-body-box4-box-list2-item1-text3'>INQUIRE</div>

                                </div>
                            </div>

                        </div>



                    </div>
                    <div className='indochinaqueen-body-box5'>
                        <div className='indochinaqueen-body-box5-list1'>INDOCHINA QUEEN BLOG</div>
                        <div className='indochinaqueen-body-box5-list2'>
                            <Link data-name="new1" // Sử dụng data-name thay cho name

                                onClick={this.choseNews} to="/vn/indochinaqueen/news"> <div className='indochinaqueen-body-box5-list2-blog1'>
                                    <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                    <div className='blog1-text'>
                                        <div className='blog1-text-img1'>Dinner cruise on the Seine
                                            Paris Seine La Marina
                                            <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                        </div>

                                    </div>

                                </div>
                            </Link>
                            <Link data-name="new2" // Sử dụng data-name thay cho name

                                onClick={this.choseNews} to="/vn/indochinaqueen/news"> <div className='indochinaqueen-body-box5-list2-blog2'>
                                    <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                    <div className='blog1-text'>
                                        <div className='blog1-text-img1'>Dinner cruise on the Seine
                                            Paris Seine La Marina
                                            <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                        </div>

                                    </div>

                                </div>
                            </Link>
                            <Link data-name="new3" // Sử dụng data-name thay cho name

                                onClick={this.choseNews} to="/vn/indochinaqueen/news">  <div className='indochinaqueen-body-box5-list2-blog3'>
                                    <div className='blog1-img'><img src='https://www.marina-de-paris.com/wp-content/uploads/2019/08/marina-de-paris-promenade-bateau-paris-1-190x190.jpg'></img></div>
                                    <div className='blog1-text'>
                                        <div className='blog1-text-img1'>Dinner cruise on the Seine
                                            Paris Seine La Marina
                                            <div className='blog1-text-img2'> Boat trip in Paris: the capital opens its doors to you</div>
                                        </div>

                                    </div>

                                </div>

                            </Link>

                        </div>
                        <div className='indochinaqueen-body-box5-list3'>READ MORE </div>


                    </div>
                    <div className='indochinaqueen-body-box6'>
                        <div onClick={this.test} className='indochinaqueen-body-box6-item1'>Thực đơn tàu Indochina Queen – Nữ Hoàng Đông Dương</div>
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

                                <div className='list1-item3'>BUFFET TẦNG 2-TÀU INDOCHINA QUEEN</div>

                                <div className='list1-item4'>550.000 <i style={{ color: '#004da6' }} class="fa-solid fa-dong-sign"></i></div>

                                <div className='list1-item5'> <i style={{ color: '#004da6' }} class="fa-solid fa-clock"></i> Lịch khởi hành: Đón khách 18:00 - Xuất bến 19:45 - Cập bến 21:15</div>

                                <div className='list1-item6'> <i style={{ color: '#004da6' }} class="fa-solid fa-calendar-days"></i> Thời gian:Tàu chạy 1 giờ 30 phút</div>

                                <div className='list1-item7'><i style={{ color: '#004da6' }} class="fa-solid fa-utensils"></i> Thực đơn: Buffet</div>

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
                            <div onClick={this.handleChangeNext} className='indochinaqueen-body-box6-item3-list1-right'><i class="fa-solid fa-arrow-right"></i></div>




                        </div>}
                        <div className='indochinaqueen-body-box6-item4 '>
                            <div onClick={this.handleDot} data-hover-id="hover1" className={`dot ${this.state.hovermenu1 === 0 ? 'active-hover' : ''}`}></div>
                            <div onClick={this.handleDot} data-hover-id="hover2" className={`dot ${this.state.hovermenu2 === 1 ? 'active-hover' : ''}`}></div>
                            <div onClick={this.handleDot} data-hover-id="hover3" className={`dot ${this.state.hovermenu3 === 2 ? 'active-hover' : ''}`}></div>
                            <div onClick={this.handleDot} data-hover-id="hover4" className={`dot ${this.state.hovermenu4 === 3 ? 'active-hover' : ''}`}></div>

                        </div>




                    </div>
                    <div className='indochinaqueen-body-box7'>
                        <div onClick={this.test} className='indochinaqueen-body-box6-item1'>Thực đơn tàu Indochina Queen – Nữ Hoàng Đông Dương</div>
                        <div onClick={this.handleChangeNext1} className='indochinaqueen-body-box6-item2'>Không gì tuyệt vời bằng thưởng thức món ngon tại Nhà Hàng Du thuyền Nữ Hoàng Đông Dương. Tinh hoa ẩm thực Việt Nam hội tụ trong những món ăn do các đầu bếp tài ba chế biến cùng chuyến du ngoạn ngắm Sài Gòn về đêm trên sông. Hãy đặt bàn ngay để tận hưởng tiệc tối trên Du thuyền sang trọng Indochina Queen!</div>
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
                                    <div className=''>Chi tiết <i class="fa-solid fa-arrow-right"></i></div>

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




                </div>

            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Body)); // Bọc với withRouter và connect
