import React from 'react';
import './sign-in.css';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setUsersData} from "../../feature/users.slice"

function SingIn() {
  const [email,setEmail]=useState()
  const [psd,setPsd]=useState()
  const dispatch=useDispatch()

  const signInClick=(e) => {
    
    console.log(email, psd)
    try {
      const config = {
        Headers: {
          "Content-type":"application/json"
        }
      }
    const data = axios.post('http://localhost:3001/api/v1/user/login', {
      email :email,
      password : psd
      
    },
    config
    ).then(res=>{
      console.log(res.data.body.token)
      dispatch(setUsersData(res.data.body.token))
    })
    
    } catch (error){
      console.log(error)
    }
  };
  return (
    <div className="bg-dark">
        <form className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
          <label className="label-wrapper">
            Username
          </label>
          <input type="text" className="input-wrapper" onChange={(e)=>setEmail(e.target.value)}/>
          <label className="label-wrapper">
            Password
          </label>
          <input type="password" className="input-wrapper" onChange={(e)=>setPsd(e.target.value)}/>
          <div>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <Link to={"/UserPage"}>
          <input type="submit" value="Sign in" className="sign-in-button" onClick={(e)=>signInClick(e)}/>
          </Link>
        </form>
    </div>
  )
}
export default SingIn;
