import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './AllListUser.scss'
import AddUserStudent from './AddUserStudent'
import { getALLUser } from "../../../services/userService"
class AllListUser extends Component {





    state = {
        addstudent: false,
        userlist: true,
        users: []

    }




    componentDidMount = async () => {

        let response = await getALLUser();
        console.log("Response từ API:", response); // In ra để kiểm tra dữ liệu từ API

        // Cập nhật state với mảng `user` từ `response`
        this.setState({
            users: response.user || [] // Đảm bảo là mảng
        });





        // <h2>ID:{user.id}</h2>
        // <p>username: {user.username}</p>
        // <p>email: {user.email}</p>
        // <p>fullname: {user.full_name}</p>
        // <p>Role_ID: {user.role_id}</p>
        // <p>isactive: {user.is_active}</p>
        // <p>first_name: {user.first_name}</p>
        // <p>LastName: {user.last_name}</p>
        // <p>Gender: {user.gender}</p>
        // <p>Address: {user.address}</p>
        // <p>imguser: {user.imguser}</p>
        // <p>phone: {user.phone}</p>
        // <p>course: {user.courses}</p>
        // <p>BirthDay: {user.birthday}</p>









        // Giả lập gọi API lấy dữ liệu người dùng
        // const mockUsers = Array.from({ length: 10000 }, (_, index) => ({
        //     stickbox: index + 1,
        //     id: index + 1,
        //     username: `User ${index + 1}`,
        //     email: `user${index + 1}@example.com`,
        //     phone: index + 1234567,
        //     gender: Math.floor(Math.random() * 2),
        //     class: index + 1,
        //     dayjoin: '25/03/2003',
        //     active: Math.floor(Math.random() * 1000),
        //     address: '125/10 Lê Đức Thọ F17',
        //     role: `HOCSINH ${index + 1}`,
        // }));

    }
    addstudent = () => {

        this.setState({
            addstudent: true,
            userlist: false


        })
    }

    handleStateChange = (newState) => {
        this.setState({
            userlist: newState.userlist,
            addstudent: newState.addstudent,
        });
    };

    render() {
        console.log('checkkkkkkkkkkkkkkkkkk', this.props.isLoggedIn)
        const { users } = this.state
        console.log('uisssssssssssssssssssss')
        // const renderUsers = users.map((user, index) => {
        //     return (
        //         <tr className='body-table' key={index}>



        //             <td className='body-table--checkbox'><input className='body-table--checkbox-i' type='checkbox'></input></td>
        //             <td>{user.id}</td>
        //             <td><img className='body-table-img' src={user.imguser}></img></td>
        //             <td >{user.username}</td>
        //             <td >{user.email}</td>

        //             <td>{user.phone}</td>
        //             <td>{user.gender}</td>
        //             <td>{user.courses}</td>
        //             <td>{user.is_active == true ? "1" : "0"}</td>
        //             <td>{user.address}</td>
        //             <td>{user.birthday}</td>
        //             <td>{user.role_id}</td>
        //             <td><i class="fa-solid fa-ellipsis-vertical"></i></td>




        //         </tr>
        //     );
        // });



        return (
            <React.Fragment>

                {this.state.userlist && <div className="userlist" >
                    <div className='userlist-header'>
                        <div className='userlist-header-1'>
                            <div className='userlist-header-1-con1'>
                                <div className='userlist-header-1-con1-item1'>Students</div>
                                <div className='userlist-header-1-con1-item2'>
                                    <div className=''>Dashboard /

                                    </div>
                                    <div className=''>Peoples /</div>

                                    <div className=''>Students Grid </div>

                                </div>
                            </div>
                            <div className='userlist-header-1-con2'>
                                <div className='userlist-header-1-con2-refresh'><i class="fa-solid fa-arrows-rotate"></i>Refresh</div>
                                <div className='userlist-header-1-con2-Print'><i class="fa-solid fa-print"></i>Print</div>
                                <div className='userlist-header-1-con2-Export'><i class="fa-solid fa-copy"></i>Export<i class="fa-solid fa-chevron-down"></i></div>
                                <div onClick={this.addstudent} className='userlist-header-1-con2-Add'><i class="fa-solid fa-plus"></i>Add Student</div>


                            </div>


                        </div>
                        <div className='userlist-header-2'>
                            <div className='userlist-header-2-con1'>Students Grid</div>
                            <div className='userlist-header-2-con2'>
                                <div className='userlist-header-2-con2-time'>10/14/2024 - 10/20/2024</div>
                                <div className='userlist-header-2-con2-filter'>Filter</div>

                                <div className='userlist-header-2-con2-logo'>Logo1</div>

                                <div className='userlist-header-2-con2-logo2'>Logo2</div>

                                <div className='userlist-header-2-con2-az'>Sort by A-Z</div>

                            </div>



                        </div>



                    </div>
                    <div className='userlist-body'>

                        {users.map((item, index) => {

                            return (
                                <div key={index} className='userlist-body-box1'>
                                    <div className='userlist-body-box1-item1'>
                                        <div className='userlist-body-box1-item1-con1'>
                                            <div className='userlist-body-box1-item1-con1-cus1'>{index}</div>
                                            <div className='userlist-body-box1-item1-con1-cus2'>
                                                <div className=''><i class="fa-regular fa-circle-dot"></i>{item.is_active == true ? "ACTIVE" : "UNACTIVE"}</div>
                                                <div className=''><i class="fa-solid fa-ellipsis-vertical"></i></div>

                                            </div>

                                        </div>
                                        <div className='userlist-body-box1-item1-con2'>
                                            <img src={item.imguser} className='userlist-body-box1-item1-con2-logo'></img>
                                            <div className='userlist-body-box1-item1-con2-box2'>
                                                <div className=''>{item.full_name}</div>
                                                <div className=''>{item.courses}</div>

                                            </div>

                                        </div>
                                        <div className='userlist-body-box1-item1-con3'>
                                            <div className=''>
                                                <div className='userlist-body-box1-item1-con3--list'>Roll No</div>
                                                <div className=''>{item.id}</div>

                                            </div>
                                            <div className=''>
                                                <div className='userlist-body-box1-item1-con3--list'>Gender</div>
                                                <div className=''>{item.gender == 0 ? "MEN" : "FEMALE"}</div>

                                            </div>

                                            <div className=''>
                                                <div className='userlist-body-box1-item1-con3--list'>Join On</div>
                                                <div className=''>Date</div>

                                            </div>

                                        </div>
                                        <div className='userlist-body-box1-item1-con4'>
                                            <div className='userlist-body-box1-item1-con4-item1'>
                                                <div className=''><i class="fa-solid fa-message"></i></div>
                                                <div className=''><i class="fa-solid fa-phone"></i></div>
                                                <div className=''><i class="fa-solid fa-envelope"></i></div>

                                            </div>
                                            <div className='userlist-body-box1-item1-con4-item2'>ADD free</div>

                                        </div>
                                    </div>







                                </div>)




                        })}














                    </div>
                    <div className='userlist-footer'>Loading More</div>




                </div>
                }
                {this.state.addstudent && this.props.isLoggedIn && <div className=''>< AddUserStudent

                    userlist={this.state.userlist}
                    addstudent={this.state.addstudent}
                    onStateChange={this.handleStateChange}



                /></div>}
            </React.Fragment>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(AllListUser);
