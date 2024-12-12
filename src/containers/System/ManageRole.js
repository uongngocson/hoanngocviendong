import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageRole.scss'
class ManageRole extends Component {





    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="text-center" >Cấp độ </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageRole);
