import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './HomeHotel.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';




class HomeHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: '31/10', value: 0 },
                { name: '01/11', value: 10 },
                { name: '02/11', value: 20 },
                { name: '03/11', value: 15 },
                { name: '04/11', value: 25 },
                { name: '05/11', value: 30 },
                { name: '06/11', value: 35 },
                { name: '07/11', value: 40 },
                { name: '08/11', value: 45 },
                { name: '09/11', value: 50 },
                { name: '10/11', value: 55 },
            ]
        };
    }

    componentDidMount() {
        this.updateDates(); // Gọi hàm cập nhật ngày khi component mount
    }

    // Hàm để cập nhật các ngày trong state dựa trên ngày thực tế
    updateDates() {
        const today = new Date();
        const updatedData = this.state.data.map((item, index) => {
            // Lấy ngày hiện tại và cộng thêm index để tạo các ngày tiếp theo
            const newDate = new Date(today);
            newDate.setDate(today.getDate() + index); // Thêm index vào ngày hiện tại để tạo ra các ngày liên tiếp
            const day = String(newDate.getDate()).padStart(2, '0'); // Đảm bảo ngày có hai chữ số
            const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Đảm bảo tháng có hai chữ số
            const formattedDate = `${day}/${month}`;

            // Trả về một bản sao của item với name được cập nhật
            return { ...item, name: formattedDate };
        });

        this.setState({ data: updatedData }); // Cập nhật lại state với mảng dữ liệu mới
    }

    render() {


        return (

            <React.Fragment>

                <div className='container-homehotel'>

                    <div className='contaner-homehotel-box1'>
                        <div className='contaner-homehotel-box1--list1'>
                            <div className='contaner-homehotel-box1--list1-item1'>
                                <div className='contaner-homehotel-box1--list1-item1-text1'>
                                    <div className='contaner-homehotel-box1--list1-item1-text1--logo'><i _ngcontent-c5="" className="fas fa-retweet icon-warning cus "></i></div>
                                    <div className='contaner-homehotel-box1--list1-item1-text1-play'>
                                        <div className='contaner-homehotel-box1--list1-item1-text1-play-list1'>

                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus1'> Thuê trong ngày</div>
                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus2'>0 lượt</div>


                                        </div>


                                    </div>

                                </div>


                            </div>
                            <div className='contaner-homehotel-box1--list1-item2'>
                                <div><i _ngcontent-c5="" class="fas fa-sync text-muted"></i></div>
                                <div className=''>Cập nhập</div>



                            </div>



                        </div>
                        <div className='contaner-homehotel-box1--list2'>
                            <div className='contaner-homehotel-box1--list1-item1'>
                                <div className='contaner-homehotel-box1--list1-item1-text1'>
                                    <div className='contaner-homehotel-box1--list1-item1-text1--logo'><i _ngcontent-c5="" class="fas fa-door-open text-primary cus"></i></div>
                                    <div className='contaner-homehotel-box1--list1-item1-text1-play'>
                                        <div className='contaner-homehotel-box1--list1-item1-text1-play-list1'>

                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus1'> Phòng chờ</div>
                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus2'>0 lượt</div>


                                        </div>


                                    </div>

                                </div>


                            </div>
                            <div className='contaner-homehotel-box1--list1-item2'>
                                <div><i _ngcontent-c5="" class="fas fa-key text-muted"></i></div>
                                <div className=''>Thuê phòng</div>



                            </div>

                        </div>

                        <div className='contaner-homehotel-box1--list3'>
                            <div className='contaner-homehotel-box1--list1-item1'>
                                <div className='contaner-homehotel-box1--list1-item1-text1'>
                                    <div className='contaner-homehotel-box1--list1-item1-text1--logo'><i _ngcontent-c5="" class="fas fa-door-closed text-warning cus"></i></div>
                                    <div className='contaner-homehotel-box1--list1-item1-text1-play'>
                                        <div className='contaner-homehotel-box1--list1-item1-text1-play-list1'>

                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus1'> Phòng đang thuê</div>
                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus2'>0 lượt</div>


                                        </div>


                                    </div>

                                </div>


                            </div>
                            <div className='contaner-homehotel-box1--list1-item2'>
                                <div><i _ngcontent-c5="" class="fas fa-reply text-muted"></i></div>
                                <div className=''>Thuê phòng & Trả phòng</div>



                            </div>

                        </div>

                        <div className='contaner-homehotel-box1--list4'>
                            <div className='contaner-homehotel-box1--list1-item1'>
                                <div className='contaner-homehotel-box1--list1-item1-text1'>
                                    <div className='contaner-homehotel-box1--list1-item1-text1--logo'><i _ngcontent-c5="" class="fas fa-broom text-danger cus"></i></div>
                                    <div className='contaner-homehotel-box1--list1-item1-text1-play'>
                                        <div className='contaner-homehotel-box1--list1-item1-text1-play-list1'>

                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus1'>Phòng cần dọn </div>
                                            <div className='contaner-homehotel-box1--list1-item1-text1-play-list1-cus2'>0 lượt</div>


                                        </div>


                                    </div>

                                </div>


                            </div>
                            <div className='contaner-homehotel-box1--list1-item2'>
                                <div><i _ngcontent-c5="" class="fas fa-broom text-muted"></i></div>
                                <div className=''>Trả phòng</div>



                            </div>
                        </div>




                    </div>

                    <div className='contaner-homehotel-box2'>
                        <div className="contaner-homehotel-box2-list1">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={this.state.data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" label={{ value: '', position: 'insideBottomRight', offset: -10 }} />
                                    <YAxis
                                        label={{
                                            value: 'Lượt thuê phòng',
                                            angle: -90,
                                            position: 'insideLeft',
                                            offset: 15,  // Điều chỉnh chiều ngang (trái/phải)
                                            dy: 26, // Điều chỉnh theo chiều dọc (lên/xuống)

                                            style: { fontSize: '14px', fill: '#333', fontWeight: 'bold', dy: 60 }
                                        }}
                                    />

                                    <Tooltip />
                                    <Line type="monotone" dataKey="value" stroke="#a8385d" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className='contaner-homehotel-box2-list2'>

                            <div className='contaner-homehotel-box2-list2-item1'>
                                <div className='text1'>Nhật ký hoạt động</div>
                                <div className=''><i class="fa-solid fa-ellipsis-vertical"></i></div>

                            </div>
                            <div className='contaner-homehotel-box2-list2-item2'>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>
                                <div className='contaner-homehotel-box2-list2-item2-1'>
                                    <div className='contaner-homehotel-box2-list2-item2-1-status'>
                                        <div className='status-1'><i class="fa-solid fa-tag"></i></div>
                                        <div className='status-text'>Tạo yêu cầu dọn phòng L102</div>


                                    </div>
                                    <div className='contaner-homehotel-box2-list2-item2-1-time'>
                                        <div className=''><i class="fa-regular fa-clock"></i></div>
                                        <div className=''> 09/11/2024 16:32</div>
                                        <div className='contaner-homehotel-box2-list2-item2-1-time-email'>
                                            <div className=''><i class="fa-solid fa-person"></i></div>
                                            <div className=''>uongngocson</div>

                                        </div>


                                    </div>




                                </div>

                                <div className='contaner-homehotel-box2-list2-item2-2'></div>




                            </div>





                        </div>




                    </div>







                </div>






            </React.Fragment>








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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHotel);
