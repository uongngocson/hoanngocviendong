import React from 'react';
import './modal.scss'; // Thêm CSS cho modal

const Modal = ({ show, onClose, title, children }) => {
    if (show) {
        return null; // Nếu show là false, modal sẽ không hiển thị  nếu show là false đổi thành true mới chạy còn là true thì đổi thành false không chạy dữ nguyên
    }

    return (

        <React.Fragment>
            <div className="modal-overlay">

                <h2>{title}</h2>
                {/* <button onClick={onClose} className="modal-close-btn">
                    &times;
                </button> */}

                {children}

            </div>




            {/* <button onClick={onClose} className="modal-close-btn-cus">
                &times;
            </button> */}







        </React.Fragment >



    )
};


export default Modal;
