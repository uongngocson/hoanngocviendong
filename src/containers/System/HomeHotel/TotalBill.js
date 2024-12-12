import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './TotalBill.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';




class TotalBill extends Component {
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
                    <div className='container-Stock-box1'>
                        <div className=''></div>
                        <div className=''></div>

                        <div className=''></div>

                        <div className=''></div>



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

export default connect(mapStateToProps, mapDispatchToProps)(TotalBill);
