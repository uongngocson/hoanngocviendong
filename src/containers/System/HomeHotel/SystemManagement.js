import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './SystemManagement.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';




class SystemManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    // Hàm để cập nhật các ngày trong state dựa trên ngày thực tế


    render() {


        return (

            <React.Fragment>
                <div className='container-stock'>
                    <div className=''></div>
                    <div className='container-stock-box1'>
                        <div className='container-stock-box1--list1'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-signal"></i></div>
                            <div className='container-stock-box1--list1--item2'>Tình trạng kho</div>

                        </div>
                        <div className='container-stock-box1--list2'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-down-long"></i></div>
                            <div className='container-stock-box1--list1--item2'>Nhập kho</div>
                        </div>

                        <div className='container-stock-box1--list3'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-down-long"></i></div>
                            <div className='container-stock-box1--list1--item2'>Điều chỉnh kho</div>
                        </div>

                        <div className='container-stock-box1--list4'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-signal"></i></div>
                            <div className='container-stock-box1--list1--item2'>Kiểm kho </div>
                        </div>



                    </div>
                    <div className='container-stock-box1'>
                        <div className='container-stock-box1--list1'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-signal"></i></div>
                            <div className='container-stock-box1--list1--item2'>Tình trạng kho</div>

                        </div>
                        <div className='container-stock-box1--list2'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-down-long"></i></div>
                            <div className='container-stock-box1--list1--item2'>Nhập kho</div>
                        </div>

                        <div className='container-stock-box1--list3'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-down-long"></i></div>
                            <div className='container-stock-box1--list1--item2'>Điều chỉnh kho</div>
                        </div>

                        <div className='container-stock-box1--list4'>
                            <div className='container-stock-box1--list1--item1'><i class="fa-solid fa-signal"></i></div>
                            <div className='container-stock-box1--list1--item2'>Kiểm kho </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SystemManagement);
