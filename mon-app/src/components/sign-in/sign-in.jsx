import React from 'react';
import './sign-in.css';
import { Link } from 'react-router-dom';

function SingIn() {
  return (
    <div className="bg-dark">
        <form className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
          <label className="label-wrapper">
            Username
          </label>
          <input type="text" className="input-wrapper"/>
          <label className="label-wrapper">
            Password
          </label>
          <input type="password" className="input-wrapper"/>
          <div>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          
          <Link to={"/UserPage"}>
            <input type="submit" value="Sign in" className="sign-in-button"/>
          </Link>
        </form>
    </div>
  )
}
export default SingIn;
