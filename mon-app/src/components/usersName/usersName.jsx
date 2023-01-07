import React from "react"
import './usersName.css';
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import axios from "axios"

  function UsersName() {
    // recupere le token dans le store redux
    const token = useSelector((state) => state.user.token);
  
    const [prenom,setPrenom]=useState()
    const [nom,setNom]=useState()
    
    useEffect(()=>{
    
       axios.post('http://localhost:3001/api/v1/user/profile', 
       {key:'value'},

      {headers:{Authorization: `Bearer ${token}`} },

      ).then(res=>{
        console.log(res.data.body.firstName)
        setPrenom(res.data.body.firstName)
        setNom(res.data.body.lastName)
      })
    })

    return (
      <div className="global-usersName-button">
        <div className="userName-div">
          <h1 className="userName">Welcome back</h1>
          <h1 className="userName">{prenom} {nom}</h1>
        </div>
        <button type="button" className="edit-button">Edit Name</button>
      </div>
    )
  }
  export default UsersName;