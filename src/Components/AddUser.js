import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // console.log(name);
        // console.log(value);

        this.setState({
            [name]: value
        });

        //đóng gói
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col">
                <form>
                <div className="card border-primary mb-3 mt-2">
                <div className="card-header">Thêm mới User vào hệ thống</div>
                <div className="card-body text-primary">
                    <div className="form-group">
                    <input type="text" className="form-control" name = "name" onChange={(event) => {this.isChange(event)}} aria-describedby="helpId" placeholder="User name" />
                    </div><div className="form-group">
                    <input type="text" className="form-control" name="tel" onChange={(event) => {this.isChange(event)}} aria-describedby="helpId" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                    <select className="custom-select" name="Permission" onChange={(event) => {this.isChange(event)}} required>
                        <option value>Chọn quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => {this.props.add(this.state.name, this.state.tel, this.state.Permission)}} value="Thên mới" />
                    </div>
                    </div>
                </div>
                </form>
                </div>
            )
        }
    }

    render() {

        return (
            
            <div>
                
                {/* {this.hienThiNut()} */}
                {this.kiemTraTrangThai()}

                
            </div>
            

        );
    }
}

export default AddUser;