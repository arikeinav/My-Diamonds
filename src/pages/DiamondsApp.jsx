import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {DiamondsTable} from '../cmps/DiamondsTable.jsx'
import {DiamondsAcc} from '../cmps/DiamondsAcc.jsx'
import { connect } from "react-redux";
import { setLogedInUser} from "../store/actions/userAction"
import { loadDiamonds } from "../store/actions/diamondAction"
import {UserMsgModal} from "../cmps/UserMsgModal.jsx"




 class _DiamondsApp extends Component {
   

  componentDidMount=()=> {
      this.loadDiamonds()
      this.props.setLogedInUser();
  }

  
 loadDiamonds =()=>{
   this.props.loadDiamonds()
   
  }

    render() {
       const {diamonds}= this.props
       const user= this.props.loggedInUser

        return (
            <div >
               <h1 className="main-h1">Diamonds list</h1>
               {(user)?<DiamondsAcc diamonds={diamonds}/>:<UserMsgModal contant={{header:'OOPSSSS',body:'you need to sign in '}}/>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      loggedInUser: state.userReducer.loggedInUser,
      diamonds: state.diamondReducer.diamonds,
    };
  };
  const mapDispatchToProps = {
    setLogedInUser,
    loadDiamonds
  };
  
  export const DiamondsApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(_DiamondsApp));