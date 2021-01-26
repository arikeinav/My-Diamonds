import React, { Component } from 'react'
import { connect } from "react-redux";
import { loadUsers,updateUser } from "../store/actions/userAction"
import {withRouter} from 'react-router-dom';
import {UsersTable} from '../cmps/UsersTable.jsx'

 class _Users extends Component {

componentDidMount=()=> {
    this.props.loadUsers()
}

onToggleUser=(user)=>{
    user.isBlocked=!user.isBlocked
    this.props.updateUser(user)
}


    render() {
        const {loggedInUser}=this.props
        return (
            <div>
                {loggedInUser&&loggedInUser.isAdmin&&<UsersTable users={this.props.users} onToggleUser={this.onToggleUser} />}
               {/* <UsersTable users={this.props.users} onToggleUser={this.onToggleUser}/> */}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users:state.userReducer.users,
      loggedInUser: state.userReducer.loggedInUser,
    };
  };
  const mapDispatchToProps = {
    loadUsers,
    updateUser
   
  };
  
  export const Users = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Users));