import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            temValue: '',
            userObj: {}
        }
    }
    
    getUserInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserInfoApp(info)
    }

    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser getUserInfo = {(info) => this.getUserInfo(info)}
            userEditObject = {this.props.userEditObject} changeEditUserStatus = {() => this.props.changeEditUserStatus()}/>
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            temValue: event.target.value
        });
        // this.props.checkConnectProps(this.state.temValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick = {() => this.props.ketNoi()}>Đóng lại</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick = {() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
            
            {this.isShowEditForm()}
            <div className="form-group">
                <div className="btn-group">
                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Nhập tên thành viên" style={{width: '620px'}} />
                <div className="btn btn-info mb-2" onClick={(dl) => this.props.checkConnectProps(this.state.temValue)}>Tìm</div>
                </div>
                <div className="btn-group1">
                    
                    {this.hienThiNut()}
                </div>
            </div>
            <hr/>
            </div>

        );
    }
}

export default Search;