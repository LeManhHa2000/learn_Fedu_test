import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  deleteUser = (idUser) => {
    
    var temp = this.state.data;
    
    temp = temp.filter(item => item.id !== idUser);
    this.setState({
      data: temp
    });
  }

  getUserInfoApp = (info) => {
    
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
   
    this.setState({
      userEditObject: user
    });
    
  }

  getNewUserData = (name,tel,Permission) => {

    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
    console.log(this.state.data);
    
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  render() {
  var ketqua = [];

  this.state.data.forEach((item) => {
    if(item.name.indexOf(this.state.searchText) !== -1) {
      ketqua.push(item);
    }
  })
  // console.log(ketqua);
  return (
    <div>
      <Header/>
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search getUserInfoApp = {(info) => this.getUserInfoApp(info)} userEditObject = {this.state.userEditObject}
            ketNoi={()=>this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} checkConnectProps = {(dl) => this.getTextSearch(dl)} 
            editUserStatus = {this.state.editUserStatus} changeEditUserStatus = {() => this.changeEditUserStatus()}/>
            <TableData deleteUser = {(idUser) => this.deleteUser(idUser)}
            editFun = {(user) => this.editUser(user)} dataUserProps = {ketqua} changeEditUserStatus = {() => this.changeEditUserStatus()}/>
            <AddUser add = {(name,tel,Permission) => {this.getNewUserData(name,tel,Permission)}} hienThiForm = {this.state.hienThiForm}/>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
