import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Rent.scss';
import { ceil } from 'lodash';
import { gettAllRoom } from '../../../services/userService';




class Rent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            roomwaiting: true,
            roomemployee: false,
            roomclean: false,
            history: false,
            hover1: false,
            room: [],
            roomstandardsingle: []




        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.room !== prevState.room) {
            this.gettAllRoom();


        }


    }
    roomwaiting = () => {

        this.setState((prev) => (
            {
                roomwaiting: true,
                roomemployee: false,
                roomclean: false,
                history: false,
                hover1: !prev.hover1,


            }
        ))


    }

    roomemployee = () => {

        this.setState({
            roomwaiting: false,
            roomemployee: true,
            roomclean: false,
            history: false


        })


    }

    roomclean = () => {

        this.setState({
            roomwaiting: false,
            roomemployee: false,
            roomclean: true,
            history: false


        })


    }
    history = () => {

        this.setState({
            roomwaiting: false,
            roomemployee: false,
            roomclean: false,
            history: true


        })


    }


    componentDidMount() {
        this.gettAllRoom();
    }
    gettAllRoom = async () => {
        let check = await gettAllRoom();
        console.log(check.room)
        this.setState({

            room: check.room


        })
        console.log('allroom', this.state.room[0])
        this.handleRoomStandard()


    }
    handleRoomStandard = () => {
        const room = this.state.room;
        const newRoomStandard = []; // Tạo một mảng trống để lưu các phần tử có MAHP <= 4

        for (let i = 0; i < room.length; i++) {
            if (room[i].MAHP <= 4) {
                console.log("ma hạng phòng", room[i]);
                newRoomStandard.push(room[i]); // Thêm phần tử vào mảng mới
            }
        }

        // Cập nhật state với mảng mới sau khi hoàn thành vòng lặp
        this.setState({
            roomstandardsingle: newRoomStandard
        });
    }


    // Xác định số ngày trong một tháng



    // Hàm để cập nhật các ngày trong state dựa trên ngày thực tế


    render() {
        console.log('roomStand1', (this.state.roomstandard))




        return (

            < React.Fragment >
                <div className='containerRent'>
                    <div className='containerRent-box1'>
                        <div onClick={this.roomwaiting} className={this.state.hover1 ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i _ngcontent-c28="" class="fas fa-door-open fa-lg text-primary ng-star-inserted"></i></div>
                            <div className=''>   Phòng chờ  </div>

                        </div>
                        <div onClick={this.roomemployee} className={this.state.hover ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i _ngcontent-c28="" class="fas fa-door-closed fa-lg text-warning ng-star-inserted"></i></div>
                            <div className=''>Phòng đang thuê</div>
                        </div>

                        <div onClick={this.roomclean} className={this.state.hover ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i _ngcontent-c28="" class="fas fa-broom fa-lg text-danger ng-star-inserted"></i></div>
                            <div className=''>Phòng cần dọn</div>
                        </div>

                        <div onClick={this.history} className={this.state.hover ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i class="fa-regular fa-clock"></i></div>
                            <div className=''>Lịch sử</div>
                        </div>

                        <div className={this.state.hover ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i class="fa-solid fa-arrow-up"></i><i class="fa-solid fa-arrow-down"></i>
                            </div>
                            <div className=''>Xắp xếp theo tên</div>
                            <div className=''><i class="fa-solid fa-caret-down"></i></div>

                        </div>


                        <div className={this.state.hover ? ('containerRent-box1-list1') : ('containerRent-box1-list1-cus')}>
                            <div className=''><i class="fa-solid fa-magnifying-glass"></i></div>
                            <div className=''>Tìm kiếm phòng</div>
                        </div>




                    </div>
                    {this.state.roomwaiting &&
                        <React.Fragment><div className='containerRent-box2'>
                            <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                            <div className='containerRent-box2-list2'>
                                <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                <div className='containerRent-box2-list2-item2'>
                                    {this.state.roomstandardsingle.map((item, index) => (
                                        <div key={index} className='containerRent-box2-list2-item2-status'>
                                            <div className='status--nameroom'>
                                                <div className='status--nameroom-list1'>Phòng:{item.MAP}</div>
                                                <div className='status--nameroom-list1.5'>Tầng:{item.Tang}</div>

                                                <div className='status--nameroom-list2'>
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                    {/* <div className='status--nameroom-list2-item'>1234</div> */}
                                                </div>

                                            </div>
                                            <div className='status--status'>
                                                <div className=''><i class="fa-solid fa-crown"></i></div>
                                                <div className=''>
                                                    {item.MAHP == 1 && "Standard"}
                                                    {item.MAHP == 2 && "Standard"}
                                                    {item.MAHP == 3 && "Standard"}
                                                    {item.MAHP == 4 && "Standard"}
                                                </div>

                                                <div className=''>Loại:
                                                    {item.MAHP == 1 && "Đơn1G"}
                                                    {item.MAHP == 2 && "Đơn2G"}
                                                    {item.MAHP == 3 && "Đơn3G"}
                                                    {item.MAHP == 4 && "Đơn4G"}

                                                </div>
                                            </div>
                                            <div className='status--style'>
                                                <div className=''><i class="fa-solid fa-circle-xmark"></i></div>
                                                <div className=''>Trạng Thái:{item.MATT == 1 && "Sẵn Sàng"} {item.MATT == 2 && "Dơ"}{item.MATT == 3 && "Đã Đặt"}{item.MATT == 4 && "Bảo Trì"}</div>
                                            </div>


                                        </div>




                                    ))}

                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'>1</div>
                                    <div className='containerRent-box2-list2-item2-status'>2</div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>

                                </div>

                            </div>
                            <div className='containerRent-box2-list3'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>

                                <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                <div className='containerRent-box2-list2-item2'>
                                    {this.state.roomstandardsingle.map((item, index) => (
                                        <div key={index} className='containerRent-box2-list2-item2-status'>
                                            <div className='status--nameroom'>
                                                <div className='status--nameroom-list1'>Phòng:{item.MAP}</div>
                                                <div className='status--nameroom-list1.5'>Tầng:{item.Tang}</div>

                                                <div className='status--nameroom-list2'>
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                    {/* <div className='status--nameroom-list2-item'>1234</div> */}
                                                </div>

                                            </div>
                                            <div className='status--status'>
                                                <div className=''><i class="fa-solid fa-crown"></i></div>
                                                <div className=''>
                                                    {item.MAHP == 1 && "Standard"}
                                                    {item.MAHP == 2 && "Standard"}
                                                    {item.MAHP == 3 && "Standard"}
                                                    {item.MAHP == 4 && "Standard"}
                                                </div>

                                                <div className=''>Loại:
                                                    {item.MAHP == 1 && "Đơn1G"}
                                                    {item.MAHP == 2 && "Đơn2G"}
                                                    {item.MAHP == 3 && "Đơn3G"}
                                                    {item.MAHP == 4 && "Đơn4G"}

                                                </div>
                                            </div>
                                            <div className='status--style'>
                                                <div className=''><i class="fa-solid fa-circle-xmark"></i></div>
                                                <div className=''>Trạng Thái:{item.MATT == 1 && "Sẵn Sàng"} {item.MATT == 2 && "Dơ"}{item.MATT == 3 && "Đã Đặt"}{item.MATT == 4 && "Bảo Trì"}</div>
                                            </div>


                                        </div>




                                    ))}
                                    <div className='containerRent-box2-list2-item2-status'>1</div>
                                    <div className='containerRent-box2-list2-item2-status'>2</div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>


                            </div>
                            <div className='containerRent-box2-list4'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        {this.state.roomstandardsingle.map((item, index) => (
                                            <div key={index} className='containerRent-box2-list2-item2-status'>
                                                <div className='status--nameroom'>
                                                    <div className='status--nameroom-list1'>Phòng:{item.MAP}</div>
                                                    <div className='status--nameroom-list1.5'>Tầng:{item.Tang}</div>

                                                    <div className='status--nameroom-list2'>
                                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                                        {/* <div className='status--nameroom-list2-item'>1234</div> */}
                                                    </div>

                                                </div>
                                                <div className='status--status'>
                                                    <div className=''><i class="fa-solid fa-crown"></i></div>
                                                    <div className=''>
                                                        {item.MAHP == 1 && "Standard"}
                                                        {item.MAHP == 2 && "Standard"}
                                                        {item.MAHP == 3 && "Standard"}
                                                        {item.MAHP == 4 && "Standard"}
                                                    </div>

                                                    <div className=''>Loại:
                                                        {item.MAHP == 1 && "Đơn1G"}
                                                        {item.MAHP == 2 && "Đơn2G"}
                                                        {item.MAHP == 3 && "Đơn3G"}
                                                        {item.MAHP == 4 && "Đơn4G"}

                                                    </div>
                                                </div>
                                                <div className='status--style'>
                                                    <div className=''><i class="fa-solid fa-circle-xmark"></i></div>
                                                    <div className=''>Trạng Thái:{item.MATT == 1 && "Sẵn Sàng"} {item.MATT == 2 && "Dơ"}{item.MATT == 3 && "Đã Đặt"}{item.MATT == 4 && "Bảo Trì"}</div>
                                                </div>


                                            </div>




                                        ))}
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                            </div>




                        </div>

                            <div className='containerRent-box2 containerRent-box2-cus'>
                                <div className='containerRent-box2-list1'>Phòng VIPP</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                                <div className='containerRent-box2-list3'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>

                                    <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'>1</div>
                                        <div className='containerRent-box2-list2-item2-status'>2</div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>


                                </div>
                                <div className='containerRent-box2-list4'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                </div>

                                <div className='containerRent-box2'>
                                    <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                    <div className='containerRent-box2-list3'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>

                                        <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'>1</div>
                                            <div className='containerRent-box2-list2-item2-status'>2</div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>


                                    </div>
                                    <div className='containerRent-box2-list4'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                        <div className='containerRent-box2-list2'>
                                            <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                            <div className='containerRent-box2-list2-item2'>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                            </div>

                                        </div>
                                    </div>




                                </div>




                            </div></React.Fragment>}

                    {this.state.roomemployee &&
                        <React.Fragment><div className='containerRent-box2'>
                            <div className='containerRent-box2-list1'>Phòng STANDARD ĐANG</div>
                            <div className='containerRent-box2-list2'>
                                <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>

                            </div>
                            <div className='containerRent-box2-list3'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>

                                <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'>1</div>
                                    <div className='containerRent-box2-list2-item2-status'>2</div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>


                            </div>
                            <div className='containerRent-box2-list4'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                            </div>




                        </div>

                            <div className='containerRent-box2'>
                                <div className='containerRent-box2-list1'>Phòng VIP</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                                <div className='containerRent-box2-list3'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>

                                    <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'>1</div>
                                        <div className='containerRent-box2-list2-item2-status'>2</div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>


                                </div>
                                <div className='containerRent-box2-list4'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                </div>

                                <div className='containerRent-box2'>
                                    <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                    <div className='containerRent-box2-list3'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>

                                        <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'>1</div>
                                            <div className='containerRent-box2-list2-item2-status'>2</div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>


                                    </div>
                                    <div className='containerRent-box2-list4'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                        <div className='containerRent-box2-list2'>
                                            <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                            <div className='containerRent-box2-list2-item2'>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                            </div>

                                        </div>
                                    </div>




                                </div>




                            </div></React.Fragment>}


                    {this.state.roomclean &&
                        <React.Fragment><div className='containerRent-box2'>
                            <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                            <div className='containerRent-box2-list2'>
                                <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>

                            </div>
                            <div className='containerRent-box2-list3'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>

                                <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'>1</div>
                                    <div className='containerRent-box2-list2-item2-status'>2</div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>


                            </div>
                            <div className='containerRent-box2-list4'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                            </div>




                        </div>

                            <div className='containerRent-box2'>
                                <div className='containerRent-box2-list1'>Phòng VIP</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                                <div className='containerRent-box2-list3'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>

                                    <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'>1</div>
                                        <div className='containerRent-box2-list2-item2-status'>2</div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>


                                </div>
                                <div className='containerRent-box2-list4'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                </div>

                                <div className='containerRent-box2'>
                                    <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                    <div className='containerRent-box2-list3'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>

                                        <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'>1</div>
                                            <div className='containerRent-box2-list2-item2-status'>2</div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>


                                    </div>
                                    <div className='containerRent-box2-list4'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                        <div className='containerRent-box2-list2'>
                                            <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                            <div className='containerRent-box2-list2-item2'>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                            </div>

                                        </div>
                                    </div>




                                </div>




                            </div></React.Fragment>}


                    {this.state.history &&
                        <React.Fragment><div className='containerRent-box2'>
                            <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                            <div className='containerRent-box2-list2'>
                                <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>

                            </div>
                            <div className='containerRent-box2-list3'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>

                                <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                <div className='containerRent-box2-list2-item2'>
                                    <div className='containerRent-box2-list2-item2-status'>1</div>
                                    <div className='containerRent-box2-list2-item2-status'>2</div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                    <div className='containerRent-box2-list2-item2-status'></div>
                                </div>


                            </div>
                            <div className='containerRent-box2-list4'>
                                <div className='containerRent-box2-list1'>Phòng STANDARD</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                            </div>




                        </div>

                            <div className='containerRent-box2'>
                                <div className='containerRent-box2-list1'>Phòng VIP</div>
                                <div className='containerRent-box2-list2'>
                                    <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>

                                </div>
                                <div className='containerRent-box2-list3'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>

                                    <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                    <div className='containerRent-box2-list2-item2'>
                                        <div className='containerRent-box2-list2-item2-status'>1</div>
                                        <div className='containerRent-box2-list2-item2-status'>2</div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                        <div className='containerRent-box2-list2-item2-status'></div>
                                    </div>


                                </div>
                                <div className='containerRent-box2-list4'>
                                    <div className='containerRent-box2-list1'>Phòng VIP</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                </div>

                                <div className='containerRent-box2'>
                                    <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                    <div className='containerRent-box2-list2'>
                                        <div className='containerRent-box2-list2-item1'>Phòng đơn</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>

                                    </div>
                                    <div className='containerRent-box2-list3'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>

                                        <div className='containerRent-box2-list2-item1'>Phòng đôi</div>
                                        <div className='containerRent-box2-list2-item2'>
                                            <div className='containerRent-box2-list2-item2-status'>1</div>
                                            <div className='containerRent-box2-list2-item2-status'>2</div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                            <div className='containerRent-box2-list2-item2-status'></div>
                                        </div>


                                    </div>
                                    <div className='containerRent-box2-list4'>
                                        <div className='containerRent-box2-list1'>Phòng SUPER</div>
                                        <div className='containerRent-box2-list2'>
                                            <div className='containerRent-box2-list2-item1'>Phòng ba</div>
                                            <div className='containerRent-box2-list2-item2'>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                                <div className='containerRent-box2-list2-item2-status'></div>
                                            </div>

                                        </div>
                                    </div>




                                </div>




                            </div></React.Fragment>}











                </div>










            </React.Fragment >








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

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
