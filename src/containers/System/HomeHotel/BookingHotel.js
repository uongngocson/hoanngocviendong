import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './BookingHotel.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getAllstypeRoom } from '.../../../src/services/userService'
import { getAllUserBooking } from '.../../../src/services/userService'
import { gettAllRoom } from '.../../../src/services/userService'
import { createDetailBooking } from '.../../../src/services/userService'









class BookingHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            selectedDate: null,
            selectedDate1: null,
            selectedDate2: null,
            selectedDate3: null,
            datepicker1: false,
            datepicker2: false,
            datepicker3: false,
            datepicker4: false,
            valueStypeRoom: [],
            test: [1, 2, 3],
            getAllUserBooking: [],
            createbooking: false,
            modalcreate: false,
            firstname: "",
            lastname: "",
            fullname: "",
            cmnd: "",
            gender: "",
            datebirth: "",
            numberphone: "",
            email: "",
            address: "",
            allclient: [],
            allRoom: [],
            listBookingRoom: true,
            listRoomReady: false,
            handleChoosenRoom: [],
            listRoomChoosen: [],
            allRoomChoosen: []




        };
    }
    componentDidUpdate() {
        // if (2 > 1) {
        //     this.handleAllRoom()


        // }



    }


    componentDidMount() {
        this.getAllStypeRoom()
        this.getAllUserBooking()
        this.handleAllRoom()

    }

    createbooking = () => {
        this.setState((prev) => ({
            createbooking: !prev.createbooking
        }))
    }

    getAllStypeRoom = async () => {
        try {
            let check = await getAllstypeRoom();

            this.setState({
                valueStypeRoom: check.checkRoom
            })
            console.log("lôi con mẹ nó rồi hh", (this.state.valueStypeRoom))
        } catch (error) {
            console.log("lôi con mẹ nó rồi", error)
        }
    }

    getAllUserBooking = async () => {
        try {
            let checkALlBooking = await getAllUserBooking();
            console.log('check allbooking test', checkALlBooking.getListBooking)

            this.setState({
                getAllUserBooking: checkALlBooking.getListBooking
            })
        } catch (error) {
            console.log("lôi con mẹ nó rồi", error)
        }
    }

    // Xác định số ngày trong một tháng
    daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Chọn ngày khi người dùng click vào ngày trong lịch
    handleDateClick = (day) => {
        const { currentDate } = this.state;
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        this.setState({
            selectedDate,
            datepicker1: false
        });
    };

    // Thay đổi tháng khi nhấn vào nút next hoặc previous
    changeMonth = (offset) => {
        const { currentDate } = this.state;
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        this.setState({ currentDate: newDate });
    };

    renderDays = () => {
        const { currentDate } = this.state;
        const daysInMonth = this.daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysArray = [];

        // Tạo các ô trống cho các ngày trước ngày đầu tiên của tháng
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Tạo các ô cho ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(
                <div
                    key={day}
                    className="calendar-day"
                    onClick={() => this.handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }
        return daysArray;
    };

    handleDateClick1 = (day) => {
        const { currentDate } = this.state;
        const selectedDate1 = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        this.setState({
            selectedDate1,
            datepicker2: false
        });
    };

    // Thay đổi tháng khi nhấn vào nút next hoặc previous
    changeMonth1 = (offset) => {
        const { currentDate } = this.state;
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        this.setState({ currentDate: newDate });
    };

    renderDays1 = () => {
        const { currentDate } = this.state;
        const daysInMonth = this.daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysArray = [];

        // Tạo các ô trống cho các ngày trước ngày đầu tiên của tháng
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Tạo các ô cho ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(
                <div
                    key={day}
                    className="calendar-day"
                    onClick={() => this.handleDateClick1(day)}
                >
                    {day}
                </div>
            );
        }
        return daysArray;
    };

    datepicker1 = () => {
        this.setState((prev) => ({
            datepicker1: !prev.datepicker1,
        }
        ))
    }

    datepicker2 = () => {
        this.setState((prev) => ({
            datepicker2: !prev.datepicker2,
        }
        ))
    }

    datepicker3 = () => {
        this.setState((prev) => ({
            datepicker3: !prev.datepicker3,
        }
        ))
    }
    datepicker4 = () => {
        this.setState((prev) => ({
            datepicker4: !prev.datepicker4,
        }
        ))
    }

    handleDateClick2 = (day) => {
        const { currentDate } = this.state;
        const selectedDate2 = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        this.setState({
            selectedDate2,
            datepicker3: false
        });
    };

    // Thay đổi tháng khi nhấn vào nút next hoặc previous
    changeMonth2 = (offset) => {
        const { currentDate } = this.state;
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        this.setState({ currentDate: newDate });
    };

    renderDays2 = () => {
        const { currentDate } = this.state;
        const daysInMonth = this.daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysArray = [];

        // Tạo các ô trống cho các ngày trước ngày đầu tiên của tháng
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Tạo các ô cho ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(
                <div
                    key={day}
                    className="calendar-day"
                    onClick={() => this.handleDateClick2(day)}
                >
                    {day}
                </div>
            );
        }
        return daysArray;
    };

    handleDateClick3 = (day) => {
        const { currentDate } = this.state;
        const selectedDate3 = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        this.setState({
            selectedDate3,
            datepicker4: false
        });
    };

    // Thay đổi tháng khi nhấn vào nút next hoặc previous
    changeMonth3 = (offset) => {
        const { currentDate } = this.state;
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        this.setState({ currentDate: newDate });
    };

    renderDays3 = () => {
        const { currentDate } = this.state;
        const daysInMonth = this.daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysArray = [];

        // Tạo các ô trống cho các ngày trước ngày đầu tiên của tháng
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Tạo các ô cho ngày trong tháng
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(
                <div
                    key={day}
                    className="calendar-day"
                    onClick={() => this.handleDateClick3(day)}
                >
                    {day}
                </div>
            );
        }
        return daysArray;
    };

    modalcreate = () => {
        this.setState((prev) => ({
            modalcreate: !prev.modalcreate

        }))


    }

    cancerModal
        = () => {
            this.setState((prev) => ({
                modalcreate: !prev.modalcreate

            }))


        }

    // firstname = (event, name) => {
    //     console.log('name', name)

    //     this.setState({
    //         firstname: event.target.value
    //     })
    // }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    handleGetAllClient = () => {
        try {
            let allClient = []
            const { firstname, lastname, fullname, cmnd, gender, datebirth, numberphone, email, address } = this.state
            allClient.push(firstname, lastname, fullname, cmnd, gender, datebirth, numberphone, email, address)
            this.setState({ allclient: allClient }, () => {
                // Callback sau khi setState hoàn tất
                createDetailBooking(this.state.allclient);
            });



        } catch (error) {
            console.log(error)

        }

        // alert(this.state.allclient)


    }

    handleAllRoom = async () => {
        let getAllRoom = await gettAllRoom();
        console.log('All Room', getAllRoom.room)
        this.setState({
            allRoom: getAllRoom.room
        })
    }
    createRoom = () => {
        this.setState({
            listBookingRoom: false,
            listRoomReady: true
        })
    }
    // handleChoosenRoom
    handleChoosenRoom = (event) => {
        // Lấy danh sách hiện tại từ state
        const { allRoomChoosen = [] } = this.state;

        // Lấy giá trị JSON từ sự kiện và phân tích nó
        const { MAP, MOTA } = JSON.parse(event.target.value);
        console.log('check lại xem sao', MAP);
        console.log('check lại xem sao', MOTA);

        // Kiểm tra nếu MAP chưa có trong danh sách allRoomChoosen
        if (!allRoomChoosen.some(item => item.MAP === MAP)) {
            // Thêm đối tượng mới vào mảng
            allRoomChoosen.push({ MAP, MOTA });

            console.log('This is choosen room:', allRoomChoosen);

            // Cập nhật state
            this.setState({
                allRoomChoosen: [...allRoomChoosen], // Tạo mảng mới từ mảng đã thay đổi
            });
        } else {
            console.log('Room already chosen:', MAP);
        }
    };



    // handleChoosenRoom = (event) => {
    //     // Lấy danh sách hiện tại từ state
    //     const { allRoomChoosen = [] } = this.state;

    //     // Lấy giá trị mới từ sự kiện
    //     const newRoom = event.target.value;

    //     // Kiểm tra nếu giá trị chưa tồn tại trong mảng thì mới thêm
    //     if (!allRoomChoosen.includes(newRoom)) {
    //         allRoomChoosen.push(newRoom);

    //         console.log('This is choosen room:', allRoomChoosen);

    //         // Cập nhật state
    //         this.setState({
    //             allRoomChoosen: [...allRoomChoosen], // Tạo mảng mới từ mảng đã thay đổi
    //         });
    //     } else {
    //         console.log('Room already chosen:', newRoom);
    //     }
    // };





    // Hàm để cập nhật các ngày trong state dựa trên ngày thực tế


    render() {

        const { currentDate, selectedDate, selectedDate1, getAllUserBooking, selectedDate2, selectedDate3 } = this.state;
        const monthYear = currentDate.toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' });
        console.log("check state allbooking ", this.state.getAllUserBooking)
        console.log('allclient', this.state.allclient)
        const day = currentDate.getDate(); // Lấy ngày
        const month = currentDate.getMonth() + 1; // Lấy tháng (bắt đầu từ 0 nên cần +1)
        const year = currentDate.getFullYear(); // Lấy năm //

        console.log('firstname', this.state.allRoomChoosen)
        console.log('lastname', this.state.lastname)

        console.log('cmnd', this.state.cmnd)

        console.log('gender', this.state.gender)


        console.log('datebirth', this.state.datebirth)
        console.log('email', this.state.email)
        console.log('address', this.state.address)
        console.log('firstname', this.state.fullname)
        console.log('all room from state', this.state.allRoom)








        return (

            < React.Fragment >

                <div className='container-bookinghotel'>
                    <div className='container-bookinghotel-box1'>
                        <div className='container-bookinghotel-box1-list1'>
                            <div className='room'>
                                <div className='room1'><i class="fa-solid fa-bed"></i></div>
                                <div className='room2'>Lịch theo phòng</div>


                            </div>
                            <div className='styperoom'>
                                <div className='styperoom1'><i class="fa-solid fa-calendar-days"></i></div>
                                <div className='styperoom2'>Lịch theo lọai phòng</div>

                            </div>

                            <div className='calcendar'>
                                <div className='calcendar1'><i class="fa-solid fa-calendar-check"></i></div>
                                <div className='calcendar2'>Xem theo ngày</div>

                            </div>

                            <div className='search'>
                                <div className='search1'><i class="fa-solid fa-magnifying-glass"></i></div>
                                <div className='search2'>Tìm kiếm</div>

                            </div>

                            <div onClick={this.createbooking} className='create'>
                                <div className='create1'><i class="fa-solid fa-plus"></i></div>
                                <div className='create2'>Thêm mới</div>

                            </div>



                        </div>
                        <div className='container-bookinghotel-box1-list2'>
                            <div className='container-bookinghotel-box1-list2--list1'>


                                <div className='box1-list2-text'>Từ Ngày</div>
                                <div className='box1-list2-date'>
                                    <div className='box1-list2-date-1'>{selectedDate ? (
                                        <div className="selected-date">
                                            {selectedDate.toLocaleDateString('vi-VN')}
                                        </div>
                                    ) : (`${day}/${month}/ ${year}`)}</div>
                                    <div onClick={this.datepicker1} className='box1-list2-date-2'><i class="fa-regular fa-calendar"></i></div>




                                </div>

                                {this.state.datepicker1 && <div className='box1-list2-tabledate'>

                                    <div className="date-picker">
                                        <div className="date-picker-header">
                                            <button onClick={() => this.changeMonth(-1)} className="date-picker-nav">{"<"}</button>
                                            <span>{monthYear}</span>
                                            <button onClick={() => this.changeMonth(1)} className="date-picker-nav">{">"}</button>
                                        </div>
                                        <div className="calendar-grid">
                                            {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, index) => (
                                                <div key={index} className="calendar-day-name">
                                                    {day}
                                                </div>
                                            ))}
                                            {this.renderDays()}
                                        </div>
                                        {selectedDate && (
                                            <div className="selected-date">
                                                Ngày đã chọn: {selectedDate.toLocaleDateString('vi-VN')}
                                            </div>
                                        )}
                                    </div>


                                </div>}


                            </div>
                            <div className='container-bookinghotel-box1-list2--list2'>
                                <div className='box1-list2-text'>Đến Ngày</div>
                                <div className='box1-list2-date'>
                                    <div className='box1-list2-date-1'>
                                        {selectedDate1 ? (
                                            <div className="selected-date">
                                                {selectedDate1.toLocaleDateString('vi-VN')}
                                            </div>
                                        ) : (`${day}/${month}/ ${year}`)}
                                    </div>
                                    <div onClick={this.datepicker2} className='box1-list2-date-2'><i class="fa-regular fa-calendar"></i></div>
                                </div>
                                {this.state.datepicker2 && <div className='box1-list2-tabledate'>

                                    <div className="date-picker">
                                        <div className="date-picker-header">
                                            <button onClick={() => this.changeMonth1(-1)} className="date-picker-nav">{"<"}</button>
                                            <span>{monthYear}</span>
                                            <button onClick={() => this.changeMonth1(1)} className="date-picker-nav">{">"}</button>
                                        </div>
                                        <div className="calendar-grid">
                                            {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, index) => (
                                                <div key={index} className="calendar-day-name">
                                                    {day}
                                                </div>
                                            ))}
                                            {this.renderDays1()}
                                        </div>
                                        {selectedDate1 && (
                                            <div className="selected-date">
                                                Ngày đã chọn: {selectedDate1.toLocaleDateString('vi-VN')}
                                            </div>
                                        )}
                                    </div>


                                </div>}
                            </div>

                            <div className='container-bookinghotel-box1-list2--list3'>
                                <div className='container-bookinghotel-box1-list2--list3-item1'>
                                    <div className='container-bookinghotel-box1-list2--list3-item1-input'>
                                        <select className='cus-input' id="fruits" name="fruits">


                                            {this.state.valueStypeRoom.map((item, index) => (
                                                <option key={index} value={item.TenLP}>{item.TenLP}</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className=''><i class="fa-solid fa-caret-down"></i></div>


                                </div>

                            </div>

                            <div className='container-bookinghotel-box1-list2--list4'>
                                <div className='container-bookinghotel-box1-list2--list4-item1'>
                                    <input className='input-item1' placeholder='Tên Phòng'></input>

                                </div>

                            </div>

                        </div>
                        <div className='container-bookinghotel-box1-list3'>
                            <div className='container-bookinghotel-box1-list3-item1'>
                                <div className='list3-item1-box'></div>
                                <div className='list3-item1-text'>Đã nhận phòng</div>
                            </div>
                            <div className='container-bookinghotel-box1-list3-item2'>
                                <div className='list3-item1-box'></div>
                                <div className='list3-item1-text'>Chưa nhận phòng</div>
                            </div>
                            <div className='container-bookinghotel-box1-list3-item3'>
                                <div className='list3-item1-box'></div>
                                <div className='list3-item1-text'>Trả phòng</div>
                            </div>


                        </div>
                        {this.state.listRoomReady && <div className='container-bookinghotel-box1-list4'>
                            <div>
                                <div className=''>PHÒNG STANDARD TRỐNG </div>

                                <div className='container-bookinghotel-box1-list4-item1'>

                                    {this.state.allRoom.map((item, index) => (
                                        ((item.MATT == 1 && item.MALP == 1) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                            <div className='item1-date'>
                                                <div className='item1-date--list1'>
                                                    <div className=''>PHÒNG:{item.MAP}</div>
                                                    <div className=''> TẦNG:{item.Tang}</div>



                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.MOTA}</div>
                                                    <div className=''> </div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>Trạng thái:</div>
                                                    <div className=''> {
                                                        (item.MATT == 1 && "Sẵn Sàng") ||
                                                        (item.MATT == 2 && "Chưa Dọn") ||
                                                        (item.MATT == 3 && "Đã Đặt ") ||
                                                        (item.MATT == 4 && "Bảo Trì") ||
                                                        (item.MATT == 5 && "Đang Thuê")



                                                    }</div>



                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>Lựa Chọn</div>
                                                    <button value={JSON.stringify({ MAP: item.MAP, MOTA: item.MOTA })} onClick={this.handleChoosenRoom}
                                                        class="custom-button">Chosen </button>
                                                    <button value={JSON.stringify({ MAP: item.MAP, MOTA: item.MOTA })} onClick={this.handleChoosenRoomMove} class="custom-button custom-button-move "> Move </button>

                                                </div>


                                            </div>

                                        </div>)



                                    ))


                                    }





                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className=''>PHÒNG VIP TRỐNG </div>

                                    <div className='container-bookinghotel-box1-list4-item1'>

                                        {this.state.allRoom.map((item, index) => (
                                            ((item.MATT == 1 && item.MALP == 2) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                                <div className='item1-date'>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>PHÒNG:{item.MAP}</div>
                                                        <div className=''> TẦNG:{item.Tang}</div>



                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>{item.MOTA}</div>
                                                        <div className=''> </div>


                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>Trạng thái:</div>
                                                        <div className=''> {
                                                            (item.MATT == 1 && "Sẵn Sàng") ||
                                                            (item.MATT == 2 && "Chưa Dọn") ||
                                                            (item.MATT == 3 && "Đã Đặt ") ||
                                                            (item.MATT == 4 && "Bảo Trì") ||
                                                            (item.MATT == 5 && "Đang Thuê")



                                                        }</div>



                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>Lựa Chọn</div>
                                                        <button value={JSON.stringify({ MAP: item.MAP, MOTA: item.MOTA })}
                                                            class="custom-button">Chosen </button>
                                                        <button value={item.MAP} onClick={this.handleChoosenRoomMove} class="custom-button custom-button-move "> Move </button>

                                                    </div>


                                                </div>

                                            </div>)



                                        ))


                                        }





                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div className=''>PHÒNG SUPER TRỐNG </div>

                                    <div className='container-bookinghotel-box1-list4-item1'>

                                        {this.state.allRoom.map((item, index) => (
                                            ((item.MATT == 1 && item.MALP == 3) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                                <div className='item1-date'>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>PHÒNG:{item.MAP}</div>
                                                        <div className=''> TẦNG:{item.Tang}</div>



                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>{item.MOTA}</div>
                                                        <div className=''> </div>


                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>Trạng thái:</div>
                                                        <div className=''> {
                                                            (item.MATT == 1 && "Sẵn Sàng") ||
                                                            (item.MATT == 2 && "Chưa Dọn") ||
                                                            (item.MATT == 3 && "Đã Đặt ") ||
                                                            (item.MATT == 4 && "Bảo Trì") ||
                                                            (item.MATT == 5 && "Đang Thuê")



                                                        }</div>



                                                    </div>
                                                    <div className='item1-date--list1'>
                                                        <div className=''>Lựa Chọn</div>
                                                        <button value={JSON.stringify({ MAP: item.MAP, MOTA: item.MOTA })}
                                                            onClick={this.handleChoosenRoom} class="custom-button">Chosen </button>
                                                        <button value={item.MAP} onClick={this.handleChoosenRoomMove} class="custom-button custom-button-move "> Move </button>

                                                    </div>


                                                </div>

                                            </div>)



                                        ))


                                        }





                                    </div>
                                </div>
                            </div>









                        </div>}
                        {this.state.listBookingRoom && <div className='container-bookinghotel-box1-list4'>
                            <div>
                                <div className=''>DANH SÁCH PHIẾU ĐẶT STANDARD</div>

                                <div className='container-bookinghotel-box1-list4-item1'>

                                    {getAllUserBooking.map((item, index) => (
                                        ((item.MALP == 1) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                            <div className='item1-date'>
                                                <div className='item1-date--list1'>
                                                    <div className=''>PHÒNG:{item.MAP}</div>
                                                    <div className=''> TẦNG:{item.Tang}</div>



                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.HotenKH}</div>
                                                    <div className=''>{item.Ngaydat.split("T")[0]}</div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.MOTA}</div>
                                                    <div className=''></div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>Trạng thái</div>
                                                    <div className=''> {
                                                        (item.MATTSR == 1 && "Đã Đặt") ||
                                                        (item.MATTSR == 2 && "Đã Nhận Phòng") ||
                                                        (item.MATTSR == 3 && "Check Out") ||
                                                        (item.MATTSR == 4 && "Bảo Trì") ||
                                                        (item.MATTSR == 5 && "Đang Thuê")


                                                    }</div>


                                                </div>


                                            </div>

                                        </div>)



                                    ))


                                    }





                                </div>
                            </div>
                            <div>
                                <div className=''>DANH SÁCH PHIẾU ĐẶT VIP</div>

                                <div className='container-bookinghotel-box1-list4-item1'>

                                    {getAllUserBooking.map((item, index) => (
                                        ((item.MALP == 2) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                            <div className='item1-date'>
                                                <div className='item1-date--list1'>
                                                    <div className=''>PHÒNG:{item.MAP}</div>
                                                    <div className=''> TẦNG:{item.Tang}</div>



                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.HotenKH}</div>
                                                    <div className=''>{item.Ngaydat.split("T")[0]}</div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.MOTA}</div>
                                                    <div className=''></div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>Trạng thái</div>
                                                    <div className=''> {
                                                        (item.MATTSR == 1 && "Đã Đặt") ||
                                                        (item.MATTSR == 2 && "Đã Nhận Phòng") ||
                                                        (item.MATTSR == 3 && "Check Out") ||
                                                        (item.MATTSR == 4 && "Bảo Trì") ||
                                                        (item.MATTSR == 5 && "Đang Thuê")


                                                    }</div>


                                                </div>


                                            </div>

                                        </div>)



                                    ))


                                    }





                                </div>
                            </div>

                            <div>
                                <div className=''>DANH SÁCH PHIẾU ĐẶT SUPER</div>

                                <div className='container-bookinghotel-box1-list4-item1'>

                                    {getAllUserBooking.map((item, index) => (
                                        ((item.MALP == 3) && <div className='container-bookinghotel-box1-list4-item1-room-row'>
                                            <div className='item1-date'>
                                                <div className='item1-date--list1'>
                                                    <div className=''>PHÒNG:{item.MAP}</div>
                                                    <div className=''> TẦNG:{item.Tang}</div>



                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.HotenKH}</div>
                                                    <div className=''>{item.Ngaydat.split("T")[0]}</div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>{item.MOTA}</div>
                                                    <div className=''></div>


                                                </div>
                                                <div className='item1-date--list1'>
                                                    <div className=''>Trạng thái</div>
                                                    <div className=''> {
                                                        (item.MATTSR == 1 && "Đã Đặt") ||
                                                        (item.MATTSR == 2 && "Đã Nhận Phòng") ||
                                                        (item.MATTSR == 3 && "Check Out") ||
                                                        (item.MATTSR == 4 && "Bảo Trì") ||
                                                        (item.MATTSR == 5 && "Đang Thuê")


                                                    }</div>


                                                </div>


                                            </div>

                                        </div>)



                                    ))


                                    }





                                </div>
                            </div>









                        </div>}


                        <div className='container-bookinghotel-box1-list5'></div>






                    </div>
                    {this.state.createbooking && <div className='container-bookinghotel-box2'>

                        <div className='container-bookinghotel-box2-list1'>
                            <div className='container-bookinghotel-box2-list1-item1'>ĐẶT PHÒNG</div>
                            <div className='container-bookinghotel-box2-list1-item2'><i class="fa-solid fa-floppy-disk"></i>&nbsp;LƯA</div>

                        </div>
                        <div className='container-bookinghotel-box2-list2'>
                            <div className=''>Thông tin khách hàng</div>
                            <div onClick={this.modalcreate} className=''><i class="fa-solid fa-user-plus"></i></div>


                        </div>
                        <div className='container-bookinghotel-box2-list3'>
                            <div className='box2-list3'>
                                <div className='box2-list3-item1'>Ngày nhận phòng</div>
                                <div className='box2-list3-item2'>
                                    <div className=''>{selectedDate2 ? (
                                        <div className="selected-date">
                                            {selectedDate2.toLocaleDateString('vi-VN')}
                                        </div>
                                    ) : (`${day}/${month}/ ${year}`)}</div>
                                    <div onClick={this.datepicker3} className=''><i class="fa-regular fa-calendar"></i></div>
                                </div>
                                {this.state.datepicker3 && <div className='box2-list3-item2-date'>
                                    <div className='box1-list2-tabledate'>

                                        <div className="date-picker">
                                            <div className="date-picker-header">
                                                <button onClick={() => this.changeMonth(-1)} className="date-picker-nav">{"<"}</button>
                                                <span>{monthYear}</span>
                                                <button onClick={() => this.changeMonth(1)} className="date-picker-nav">{">"}</button>
                                            </div>
                                            <div className="calendar-grid">
                                                {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, index) => (
                                                    <div key={index} className="calendar-day-name">
                                                        {day}
                                                    </div>
                                                ))}
                                                {this.renderDays2()}
                                            </div>
                                            {selectedDate && (
                                                <div className="selected-date">
                                                    Ngày đã chọn: {selectedDate.toLocaleDateString('vi-VN')}
                                                </div>
                                            )}
                                        </div>


                                    </div>


                                </div>}

                            </div>
                            <div className='box2-list3'>
                                <div className='box2-list3-item1'>Ngày trả phòng</div>
                                <div className='box2-list3-item2'>
                                    <div className=''> <div className=''>{selectedDate3 ? (
                                        <div className="selected-date">
                                            {selectedDate3.toLocaleDateString('vi-VN')}
                                        </div>
                                    ) : (`${day}/${month}/ ${year}`)}</div>
                                    </div>
                                    <div onClick={this.datepicker4} className=''><i class="fa-regular fa-calendar"></i></div>
                                </div>
                                {this.state.datepicker4 && <div className='box2-list3-item2-date box2-list3-item2-date-cus'>
                                    <div className='box1-list2-tabledate'>

                                        <div className="date-picker">
                                            <div className="date-picker-header">
                                                <button onClick={() => this.changeMonth(-1)} className="date-picker-nav">{"<"}</button>
                                                <span>{monthYear}</span>
                                                <button onClick={() => this.changeMonth(1)} className="date-picker-nav">{">"}</button>
                                            </div>
                                            <div className="calendar-grid">
                                                {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day, index) => (
                                                    <div key={index} className="calendar-day-name">
                                                        {day}
                                                    </div>
                                                ))}
                                                {this.renderDays3()}
                                            </div>
                                            {selectedDate3 && (
                                                <div className="selected-date">
                                                    Ngày đã chọn: {selectedDate3.toLocaleDateString('vi-VN')}
                                                </div>
                                            )}
                                        </div>


                                    </div>


                                </div>}
                            </div>


                        </div>
                        <div className='container-bookinghotel-box2-list2'>
                            <div className=''>Tiền trả trước</div>
                            <div className=''><input type='text'></input></div>


                        </div>
                        <div className='container-bookinghotel-box2-list2'>
                            <div className=''>Giá thỏa thuận</div>
                            <div className=''><input type='text'></input></div>
                        </div>
                        <div className='container-bookinghotel-box2-list2'>
                            <div className=''>Ghi chú</div>
                            <input type='text'></input>


                        </div>
                        <div className='container-bookinghotel-box2-list2'>
                            <div className='container-bookinghotel-box2-list2-item1'>Phòng đặt </div>
                            <div onClick={this.createRoom} className='container-bookinghotel-box2-list2-item2'><i class="fa-solid fa-plus"></i>THÊM PHÒNG</div>
                        </div>
                        <div className='container-bookinghotel-box2-list2 container-bookinghotel-box2-list2-cusdetail'>DETAIL ROOM</div>
                        <div className='container-bookinghotel-box2-list8'>
                            <div className='box2-list8'>
                                <div className='box2-list8-item1'>Số phòng </div>
                                <div className='box2-list8-item2'>
                                    {this.state.allRoomChoosen.map((item, index) => (
                                        <div className=''>
                                            {item.MAP}

                                        </div>

                                    ))

                                    }



                                </div>

                            </div>
                            <div className='box2-list8'>
                                <div className='box2-list8-item1'>Loại Phòng</div>
                                <div className='box2-list8-item2'>
                                    {this.state.allRoomChoosen.map((item, index) => (
                                        <div className=''>
                                            {item.MOTA}

                                        </div>

                                    ))

                                    }



                                </div>
                            </div>


                        </div>




                    </div>}










                </div>
                {
                    this.state.modalcreate && <div className='container-modal-mate'>
                        <div className='container-modal'>
                            <div className='container-modal-box1'>Nhập thông tin khách hàng</div>
                            <div className='container-modal-box2'>
                                <div className='container-modal-box2-list1'>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>First Name</div>
                                        <input name="firstname" onChange={this.handleChange} value={this.state.firstname} placeholder='Nhap First Name ' type='text' className='custom-input'></input>
                                    </div>

                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Last Name</div>

                                        <input name="lastname" onChange={this.handleChange} value={this.state.lastname} placeholder='Nhập Last Name' type='text' className='custom-input'></input>
                                    </div>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Full Name</div>

                                        <input name="fullname" onChange={this.handleChange} value={this.state.fullname} placeholder='Nhập FullName' type='text' className='custom-input'></input>
                                    </div>

                                </div>
                                <div className='container-modal-box2-list1'>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>CMND</div>
                                        <input name="cmnd" onChange={this.handleChange} value={this.state.cmnd} placeholder='Nhap CMND' type='text' className='custom-input'></input>
                                    </div>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Giới Tính</div>

                                        <input name="gender" onChange={this.handleChange} value={this.state.gender} placeholder='Nhập Giới Tính' type='text' className='custom-input'></input>
                                    </div>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Ngày Sinh</div>

                                        <input name="datebirth" onChange={this.handleChange} value={this.state.datebirth} placeholder='Nhập Ngày Sinh' type='text' className='custom-input'></input>
                                    </div>

                                </div>

                                <div className='container-modal-box2-list1'>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Number Phone</div>
                                        <input name="numberphone" onChange={this.handleChange} value={this.state.numberphone} placeholder='Nhập number' type='text' className='custom-input'></input>
                                    </div>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Email</div>

                                        <input name="email" onChange={this.handleChange} value={this.state.email} placeholder='Nhập Email' type='text' className='custom-input'></input>
                                    </div>
                                    <div className='container-modal-box2-list1-item1'>
                                        <div className='input-label'>Địa chỉ</div>

                                        <input name="address" onChange={this.handleChange} value={this.state.address} placeholder='Nhập Địa Chỉ' type='text' className='custom-input'></input>
                                    </div>

                                </div>

                            </div>
                            <div className='container-modal-box3'>
                                <div onClick={this.cancerModal} className='container-modal-box3-list1'>Cancer</div>
                                <div onClick={this.handleGetAllClient} className='container-modal-box3-list2'>Submit</div>
                            </div>






                        </div>

                    </div>
                }


                <div className='test'>

                    {this.state.allRoom.map((item, index) => (

                        (item.MATT == 1 && <div className=''>{item.MAP}</div>)





                    ))}


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

export default connect(mapStateToProps, mapDispatchToProps)(BookingHotel);
