import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { divide } from 'lodash';
import './Footer.scss'
import logo from '../../assets/images/logo.png';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import fanpage from '../../assets/images/fanpage.png';




// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers';
// import TextField from '@mui/material/TextField';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const StyledDatePickerWrapper = styled.div`
  position: relative;
  width: 300px;
  margin-top: 20px;

  .ant-picker {
    border-radius: 8px;
    border: 2px solid #4caf50;
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
    color: #4caf50;
    font-weight: bold;
  }

  .ant-picker-clear {
    color: #4caf50;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #4caf50;
  margin-bottom: 20px;
`;





class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null, // Lưu trữ giá trị ngày được chọn
            date: null,
        };
    }
    // handleDateChange = (newValue) => {
    //     this.setState({ selectedDate: newValue });
    // };
    // handleChange = (date, dateString) => {
    //     console.log(date, dateString); // In ra đối tượng ngày và chuỗi ngày
    //     this.setState({ date });
    // };

    render() {


        return (


            <div class="indochinaqueen-main-footer">
                <div className='indochinaqueen-main-footer-box1'>
                    <div className='indochinaqueen-main-footer-box1-list1'>
                        <div className=''><img src={logo}></img></div>
                        <div className=''>La Marina offers lunch and dinner cruises on the Seine in the heart of the City of Lights, panoramic boats, refined cuisine made with market produce, warm and professional service… Not to mention the passage in front of the illuminated Eiffel Tower. So many elements combined to make you spend a magical and unforgettable moment</div>


                    </div>
                    <div className='indochinaqueen-main-footer-box1-list2'>
                        <div className='indochinaqueen-main-footer-box1-list2-item1'>
                            <div className=''><i class="fa-solid fa-location-dot"></i></div>
                            <div className=''>Port Solferino, at the foot of the Musée d’Orsay, 75007 Paris Paris Marina opening hours</div>



                        </div>
                        <div className='indochinaqueen-main-footer-box1-list2-item2'>
                            <div className=''><i class="fa-solid fa-clock"></i></div>
                            <div className=''>From 12.30pm to 2pm and from 6.45pm to 11.15pm
                            </div>

                        </div>


                    </div>
                    <div className='indochinaqueen-main-footer-box1-list3'>

                        <div className='indochinaqueen-main-footer-box1-list3-list1'>
                            <img className='indochinaqueen-main-footer-box1-list3-thanhtoan' src='https://www.marina-de-paris.com/wp-content/themes/genesis-bootstrap-master/images/logo-banques.png.webp' ></img>
                            <div className='indochinaqueen-main-footer-box1-list3-booking'>
                                <div className=''>ĐẶT BÀN NGAY</div>
                                <div className=''></div>

                            </div>
                        </div>
                        {/* <div className='indochinaqueen-main-footer-box1-list3-fanpage'><img src={fanpage}></img></div> */}
                    </div>
                    <div className='indochinaqueen-main-footer-box1-list4'>
                        <div className='indochinaqueen-main-footer-box1-list4-tag'>

                            <div className=''>Site Map /</div>

                            <div className=''>Who are we /</div>

                            <div className=''>Contact /</div>

                            <div className=''>General conditions of sale and use /</div>

                            <div className=''>  FAQ / </div>

                            <div className=''> Legal notices /</div>

                            <div className=''> Barge rental Paris </div>


                        </div>
                        <a href='https://www.facebook.com/profile.php?id=100012752974320' className=''>
                            <div className=''>Copyright 2021 © Development and Power by NGỌC SƠN
                            </div>

                        </a>


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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
