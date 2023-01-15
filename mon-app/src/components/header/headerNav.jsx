import React from "react"
import './headerNav.css';
import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import {useSelector} from'react-redux'


  function Header() {
    return (
      <div className="global-div-header">
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <header className="">
          <div className="Barre-navigation">
            
            <Link to={"/"}><img src={logo} className="logo" alt="" /></Link>
            <Link to={"/SingInPage"}>
              <div className="signIn-Link">
                <i className="fa fa-user-circle"></i>
                <h3>Sign in</h3>
              </div>
            </Link>
          </div>
        </header>
      </div>
    )
  }
  export default Header;