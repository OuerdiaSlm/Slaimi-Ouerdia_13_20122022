import React from 'react';
import './sign-in.css';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setUsersData} from "../../feature/users.slice"
import {useNavigate} from "react-router-dom";

function SingIn() {
  const [email,setEmail]=useState()
  const [psd,setPsd]=useState()
  let [errorMsg, setErrorMsg]=useState(false)

  const dispatch=useDispatch()
  const navigate = useNavigate();


  const signInClick=(e) => {
    e.preventDefault()
    console.log(email, psd)
    
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
      dispatch(setUsersData(res.data.body.token))
  
      // redirection
      navigate("/UserPage")
     
    }).catch((error)=>{
      // bolen = !bolen
      setErrorMsg(!errorMsg)
    })
    
 
  };
  return (
    <div className="bg-dark">
        <form className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {errorMsg ? <p>Aucuns utilisateurs</p> : console.log("errorMsg = false")}
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
         
          <input type="submit" value="Sign in" className="sign-in-button" onClick={(e)=>signInClick(e)}/>
          
        </form>
    </div>
  )
}
export default SingIn;
