import axios from '../axios'

// const cors = require('cors');
// const app = express();

// app.use(cors({ origin: 'http://localhost:3000' }));
// app.use(cors({ credentials: true, origin: true }));




const handleLogin = (email, password_hash) => {

    return axios.post('/api/login', { email, password_hash });




}
const getALLUser = (user) => {
    return axios.post('/api/getAllUser', { user });


}


const getALlNhanVien = (data) => {

    return axios.post('/api/rooms', { data });



}

const getAllstypeRoom = (data) => {
    return axios.get('/api/rooms', { data });
}

const getAllUserBooking = (data) => {
    return axios.get('/api/list/booking', { data })
}

const gettAllRoom = (data) => {
    return axios.get('/api/all/rooms', { data });
}



const handlecreate = (data) => {
    return axios.post('/api/createuser', { data });
}

const handleUsertest1000 = (data) => {
    return axios.post('/api/createusertest', { data });
}

const createUsersystemservice = (data) => {
    return axios.post('/api/createsystemStudent', { data });
}

const createDetailBooking = (data) => {
    return axios.post('/api/room/createdetailbooking', { data })
    // alert(JSON.stringify(data))
}

const createPhieuDP = (data) => {
    return axios.post('/api/room/createphieudp', { data })
}




export { createDetailBooking, handleLogin, handlecreate, handleUsertest1000, getALLUser, createUsersystemservice, getALlNhanVien, getAllstypeRoom, gettAllRoom, getAllUserBooking, createPhieuDP }