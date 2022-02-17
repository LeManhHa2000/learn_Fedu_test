import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUsers = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        editFunClick = {(user) => this.props.editFun(value)} id = {value.id} name = {value.name} key = {key} stt = {key} tel = {value.tel} permission={value.Permission}></TableDataRow>
    ))

    render() {
        return (
            <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                </tr>
                </thead>
                <tbody>
            
                    {this.mappingDataUsers()}
                </tbody>
            </table>
            </div>

        );
    }
}

export default TableData;