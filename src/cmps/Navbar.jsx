import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Login } from "./Login";
import { Submit } from "./Submit";
import { Modal } from "./Modal";
import { logout, setLogedInUser } from "../store/actions/userAction";

class _NavBar extends React.Component {
 
  state = {
    isLogged: false,
    isSignIn: false,
    isModalShow: false,
    isIn: false,
  };

  componentDidMount = () => {
    this.loadUser();
  };

  loadUser = async () => {
    await this.props.setLogedInUser();
    if (this.props.loggedInUser) this.setState({ isIn: true });
  };

 

  onIsLogged = () => {
    this.setState({ isLogged: true, isModalShow: true, isSignIn: false });
  };
  onIsSubmit = () => {
    this.setState({ isSignIn: true, isModalShow: true, isLogged: false });
  };

  onCloseModal = () => {
    this.setState({
      isSignIn: false,
      isModalShow: false,
      isLogged: false,
      isIn: true,
    });
  };
  onClose = () => {
    this.setState({ isSignIn: false, isModalShow: false, isLogged: false });
  };
  onLoginHere = () => {
    this.setState({ isSignIn: false, isLogged: true });
  };
  onLogOut = () => {
    this.setState({ isIn: false });
    this.props.logout();
  };

  render() {
    const { loggedInUser } = this.props;
    return (
      <nav className="nav-bar flex ">
        <div className="navdiv-s">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navdiv-s">
          <NavLink to="/diamonds">My Diamonds</NavLink>
        </div>
        {loggedInUser && loggedInUser.isAdmin && (
          <NavLink className="navdiv-s " to="/users">
            Users
          </NavLink>
        )}
        <div className="flex log">
          {" "}
          <div
            className={`navdiv-s signup ${!this.state.isIn ? "" : "hide"}`}
            onClick={this.onIsSubmit}
          >
            Sign Up
          </div>
          <div
            className={`navdiv-s login  ${!this.state.isIn ? "" : "hide"}`}
            onClick={this.onIsLogged}
          >
            Login
          </div>
        </div>

        <div
          className={`navdiv-s signup ${!this.state.isIn ? "hide" : ""}`}
          onClick={this.onLogOut}
        >
          LogOut
        </div>

        {this.state.isLogged && (
          <Modal
            isForLog={true}
            onClose={this.onClose}
            children={<Login onCloseModal={this.onCloseModal} />}
          />
        )}
        {this.state.isSignIn && (
          <Modal
            onLoginHere={this.onLoginHere}
            isForLog={true}
            onClose={this.onClose}
            children={<Submit onCloseModal={this.onCloseModal} />}
          />
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.loggedInUser,
  };
};
const mapDispatchToProps = {
  logout,
  setLogedInUser,
};

export const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(_NavBar));
