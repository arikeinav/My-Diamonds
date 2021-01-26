import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from "../store/actions/userAction";
import TextField from "@material-ui/core/TextField"
import {UserMsgModal} from "./UserMsgModal.jsx"

class _Login extends Component {
  state = {
isBlocked:false,
    msg: "",
    loginCred: {
      username: "",
      password: "",
    },
  };


  

  loginHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({msg:"",
      loginCred: {
        ...prevState.loginCred,
        [name]: value,
      },
    }));
  };

  doLogin = async (ev) => {
    ev.preventDefault();
    const { username, password } = this.state.loginCred;
    if (!username || !password) {
      return this.setState({ msg: "Please enter user/password" });
    }
try{
    const userCreds = { username, password };
    await this.props.login(userCreds)
      this.props.onCloseModal()
      this.setState({ loginCred: { username: "", password: "" } });
    }
    catch (err){
      if (err==='Invalid') this.setState({ msg: "There isn't an account for this user" })
      if (err==='blocked') {
        this.setState({ isBlocked: true })
      }
    }
  }

  render() {
    return (
      <div >
        <h3>Login to My diamonds
        </h3>
        {this.state.isBlocked&&<UserMsgModal onClose={()=>this.setState({isBlocked: false})} contant={{header:'blocked!!!',body:'please contact'}}/>}
        <form className="login-page" onSubmit={this.doLogin}>
              <TextField
            id="outlined-basic"
            type="text"
            name="username"
            value={this.state.loginCred.username}
            onChange={this.loginHandleChange}
            label="Username"
            variant="outlined"
          />

          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            value={this.state.loginCred.password}
            onChange={this.loginHandleChange}
            autoComplete="current-password"
            variant="outlined"
          />
          <br/>
          
     {this.state.msg &&<div className="error-msg"> <h5>{this.state.msg}</h5></div>} 
     <br/>
     <br/>
          <button className="btn login-btn">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.loggedInUser,
  };
};
const mapDispatchToProps = {

  login,
};


export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);
