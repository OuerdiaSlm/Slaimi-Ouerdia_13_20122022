import React from "react"
import './headerNav.css';
import logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



  function NavSignOut() {
    const firstName = useSelector((state) => state.user.userFirstName);
    const lastName = useSelector((state) => state.user.userLastName);

    return (
      <div className="global-div-header">
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <header className="">
          <div className="Barre-navigation">
            
            <Link to={"/"}><img src={logo} className="logo" alt="" /></Link>
            
            <Link to={"/"}>
              <div className="signIn-Link">
                <div className="icon-name-singOut">
                <i className="fa fa-user-circle"></i>
                <h3>{firstName} </h3>
                </div>
                <div className="icon-name-singOut">
                <i className="fa fa-sign-out"></i>
                <h3>Sign Out</h3>
                </div>
              </div>
            </Link>
          </div>
        </header>
      </div>
    )
  }
  export default NavSignOut;