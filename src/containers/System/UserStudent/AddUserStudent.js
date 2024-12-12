import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createUsersystemservice } from '../../../services/userService'
import './AddUserStudent.scss'
class AddUserStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // imageSrc: '',
            userlist: this.props.userlist,
            addstudent: this.props.addstudent,
            username: '',
            password: '',
            passwordagain: '',
            passwordcompare: '',
            email: '',
            RoleID: '',
            firstname: '',
            lastname: '',
            fullname: '',
            address: '',
            gender: '',
            birthday: '',
            phone: '',
            allsubmit: [],
            messageemail: '',
            messagePassword: '',
            messpasswordtrue: '',
            statuspassword: ''



        };
    }
    validatePasswordchuan = (password) => {
        const errors = [];

        // Độ dài mật khẩu (ít nhất 8 ký tự)
        if (password.length < 8) {
            errors.push("Min 8 characters.");
        }

        // Chứa ít nhất một chữ cái thường
        if (!/[a-z]/.test(password)) {
            errors.push("One lowercase letter.");
        }

        // Chứa ít nhất một chữ cái hoa
        if (!/[A-Z]/.test(password)) {
            errors.push("One uppercase");
        }

        // Chứa ít nhất một số
        if (!/[0-9]/.test(password)) {
            errors.push("At least one digit");
        }

        // Chứa ít nhất một ký tự đặc biệt
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.push("At least one special character.");
        }

        // Không có chuỗi ký tự liên tục
        const continuousPattern = /(.)\1{2,}/; // 3 ký tự giống nhau liên tiếp
        if (continuousPattern.test(password)) {
            errors.push("No more than two consecutive identical characters.");
        }

        // Trả về kết quả kiểm tra
        if (errors.length === 0) {
            return { valid: true, message: "Password is valid" };
        } else {
            return { valid: false, message: errors.join(" ") };
        }


    }

    // Ví dụ sử dụng


    handleChangepassword1 = (event) => {
        let checkpasstrue = this.validatePasswordchuan(event.target.value)


        this.setState({
            messpasswordtrue: checkpasstrue.message,

            password: event.target.value
        })










    }
    handleChangepassword2 = (event) => {
        let checkpasstrue = this.validatePasswordchuan(event.target.value)

        this.setState({
            messpasswordtrue: checkpasstrue.message,


            passwordagain: event.target.value
        })







    }

    handlecomparepassword = () => {
        const { password, passwordagain } = this.state
        if (password === passwordagain) {


            this.setState({

                passwordcompare: password,
                statuspassword: 200,
                messagePassword: "password yes"


            })

        } else {
            this.setState({

                passwordcompare: '',
                statuspassword: 400,
                messagePassword: "password no đúng"


            })


        }


    }









    componentDidUpdate(prevProps, prevState) {
        // Chỉ gọi handlecomparepassword nếu password hoặc passwordagain đã thay đổi
        if (prevState.password !== this.state.password || prevState.passwordagain !== this.state.passwordagain) {
            this.handlecomparepassword();
        }
    }




    componentDidMount() {



    }

    handlesubmiteUser = async (event) => {
        if (this.state.passwordcompare == '') {
            alert("Password not valid")

        } else {
            this.setState(
                (prev) => ({
                    ...prev,
                    allsubmit: { ...prev }
                }),
                () => {
                    let allsubmit = this.state.allsubmit
                    createUsersystemservice(allsubmit)
                    alert(JSON.stringify(allsubmit))


                }

            );
        }



    };




    handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) { // Kiểm tra file có phải là ảnh
            const reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ imageSrc: e.target.result }); // Đặt ảnh đã đọc vào state
            };
            reader.readAsDataURL(file); // Đọc ảnh dưới dạng URL
        } else {
            console.log('File không phải là ảnh hoặc không hợp lệ');
        }
    };
    removeimg = () => {
        this.setState({
            imageSrc: ''



        })


    }

    returnadd = async () => {

        await this.setState({
            userlist: true,
            addstudent: false


        })
        this.props.onStateChange({
            userlist: this.state.userlist,
            addstudent: this.state.addstudent
        });
    }
    validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.length < 6 || email.length > 254) {
            return { valid: false, message: "Email phải dài từ 6 đến 254 ký tự." };
        }

        if (!regex.test(email)) {
            return { valid: false, message: "Email không đúng định dạng." };
        }

        const [localPart, domain] = email.split('@');

        if (localPart.length > 64) {
            return { valid: false, message: "Phần tên của email không được dài quá 64 ký tự." };
        }

        if (domain.length < 3 || domain.length > 253) {
            return { valid: false, message: "Tên miền không đúng độ dài yêu cầu." };
        }

        if (domain.startsWith('-') || domain.endsWith('-')) {
            return { valid: false, message: "Tên miền không hợp lệ." };
        }

        const domainParts = domain.split('.');
        if (domainParts.some(part => part.length === 0)) {
            return { valid: false, message: "Tên miền không hợp lệ." };
        }

        return { valid: true, message: "Email hợp lệ." };
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        this.setState({
            [name]: value, // Cập nhật giá trị của trường có 'name' tương ứng
        });

        // let checkvalidateemail = validateEmail(email);




    };



    render() {
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhh=======', this.state.userlist)
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhkkkkk=======', this.state.addstudent)
        console.log("all state", this.state)

        return (
            <React.Fragment>
                <div>check:{this.state.messpasswordtrue}</div>
                <div>check:{this.state.password}</div>

                <div>check:{this.state.passwordagain}</div>

                <div>check4:{this.state.messagePassword}</div>

                <div className="text-centerrer" >
                    <div className='container-adduser'>

                        <div className='container-adduser-header'>
                            <div className='container-adduser-header-item1'>Add Student</div>
                            <div className='container-adduser-header-item2'>

                                <div className=''> Dashboard /
                                </div>
                                <div className=''> Students /
                                </div>
                                <div className=''> Add Student
                                </div>
                            </div>

                        </div>
                        <div className='container-adduser-body'>
                            <div className='container-adduser-body-box1'>

                                <div className='container-adduser-body-box-item1'>
                                    <div className='container-adduser-body-box-item1--list1'><i class="fa-solid fa-info"></i></div>
                                    <div className='container-adduser-body-box-item1--list2'> Personal Information</div>
                                </div>
                                <div className='container-adduser-body-box-item2'>


                                    {/* <div className='container-adduser-body-box-item2--list1'><i class="fa-solid fa-image"></i></div> */}

                                    <div className="container-adduser-body-box-item2--list1">
                                        {this.state.imageSrc ? (
                                            <img src={this.state.imageSrc} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />
                                        ) : (
                                            <i className="fa-solid fa-image"></i>
                                        )}
                                    </div>
                                    <div className='container-adduser-body-box-item2--list2'>
                                        <div className="container-adduser-body-box-item2--list2--folder">
                                            <label className="custom-file-upload">
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    onChange={this.handleImageUpload}
                                                    accept="image/png, image/jpeg, image/jpg, image/svg+xml"
                                                />
                                                <span className='custom-file-upload-1'>Upload</span>


                                            </label>
                                            <span onClick={this.removeimg} className='custom-file-upload-2'>Remove</span>

                                            <span className='custom-file-upload-3'>Upload image size 4MB, Format JPG, PNG, SVG</span>

                                        </div>
                                    </div>
                                </div>

                                <div className='container-adduser-body-box-item3'>

                                    <div className='container-adduser-body-box-item3-list1'>

                                        <div className='container-adduser-body-box-item3-list1-Academic'>
                                            <div className='text-name'>
                                                Username

                                            </div>

                                            <div className='container-adduser-body-box-item3-list1-Academic--input'>
                                                <input value={this.state.username} name='username' onChange={this.handleChange} type="text"></input>

                                            </div>


                                        </div>
                                        <div className='container-adduser-body-box-item3-list1-idnumber'>
                                            <div className='text-name'>
                                                Password


                                            </div>

                                            <div className='container-adduser-body-box-item3-list1-Academic--input'>
                                                <input value={this.state.password} name='password' onChange={this.handleChangepassword1} type="password"></input>


                                            </div>
                                        </div>
                                        <div className='container-adduser-body-box-item3-list1-Admission'>
                                            <div className='text-name'>

                                                Password again

                                            </div>

                                            <div className=''>
                                                <input value={this.state.passwordagain} name='passwordagain' onChange={this.handleChangepassword2} type="password"></input>


                                            </div>
                                        </div>
                                        <div className='container-adduser-body-box-item3-list1-rollnumber'>
                                            <div className='text-name'>
                                                Email

                                            </div>

                                            <div className=''>
                                                <input value={this.state.email} name='email' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>
                                        <div className='container-adduser-body-box-item3-list1-status'>
                                            <div className='text-name'>
                                                Rolo ID

                                            </div>

                                            <div className=''>
                                                {/* <select id="cars" name="cars">
                                                    <option value="volvo">Volvo</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select> */}
                                                <input value={this.state.RoleID} name='RoleID' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='container-adduser-body-box-item3-list2'>
                                        <div className=''>
                                            <div className='text-name'>
                                                Fisrt Name

                                            </div>

                                            <div className=''>
                                                <input value={this.state.firstname} name='firstname' onChange={this.handleChange} type="text"></input>

                                            </div>


                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Last Name

                                            </div>

                                            <div className=''>
                                                <input value={this.state.lastname} name='lastname' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>

                                                FullName

                                            </div>

                                            <div className=''>
                                                <input value={this.state.fullname} name='fullname' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Adress


                                            </div>

                                            <div className=''>
                                                <input value={this.state.address} name='address' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Gender

                                            </div>

                                            <div className=''>
                                                <input value={this.state.gender} name='gender' onChange={this.handleChange} type="text"></input>


                                            </div>
                                        </div>
                                    </div>

                                    <div className='container-adduser-body-box-item3-list3'>
                                        <div className=''>
                                            <div className='text-name'>
                                                Date of birth

                                            </div>

                                            <div className=''>
                                                <input value={this.state.birthday} name='birthday' onChange={this.handleChange} type="text"></input>

                                            </div>


                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Blood Group


                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>

                                                House

                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Religion
                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Category

                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                    </div>

                                    <div className='container-adduser-body-box-item3-list4'>
                                        <div className=''>
                                            <div className='text-name'>
                                                Primary contact number

                                            </div>

                                            <div className=''>
                                                <input value={this.state.phone} name='phone' onChange={this.handleChange} type="text"></input>

                                            </div>


                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Section
                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>

                                                Caste

                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Mother tongue
                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-name'>
                                                Language known

                                            </div>

                                            <div className=''>
                                                <input type="text"></input>


                                            </div>
                                        </div>
                                    </div>




                                </div>






                            </div>
                            <div className='container-adduser-body-box2'>
                                <div className='container-adduser-body-box2-list'>
                                    <div onClick={this.returnadd} className='container-adduser-body-box2-list1'>
                                        Cancer</div>
                                    <div onClick={this.handlesubmiteUser} className='container-adduser-body-box2-list2'>ADD Student</div>

                                </div>
                            </div>




                        </div>




                    </div>




                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserStudent);
