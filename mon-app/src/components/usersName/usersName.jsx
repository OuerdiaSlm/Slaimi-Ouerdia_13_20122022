import React from "react"
import './usersName.css';
import {useEffect, useState} from "react"
import { useSelector } from "react-redux";
import axios from "axios"
import {setUserInfo} from "../../feature/users.slice"
import { useDispatch } from "react-redux";


  function UsersName() {
    // recupere le token dans le store redux
    const dispatch=useDispatch()
    let token = useSelector((state) => state.user.token);
  
    const [prenom,setPrenom]=useState()
    const [nom,setNom]=useState()
    const [newPrenom,setNewPrenom]=useState()
    const [newNom,setNewNom]=useState()
    let [verifChange,setVerif]=useState(false)

//stockage du token redux dans localStorage
    if(token){
      localStorage.setItem("token",token)
    }
    else{
// si il n'ya pas de token de redux on récupere celui du localstorage
     const newToken=localStorage.getItem("token")
     token=newToken
    }
    useEffect(()=>{
// si il n'ya a pas de token du tout on affiche une page vide
      if(!token){
        document.body.innerHTML="NOT FOUND"
      }
      
       axios.post('http://localhost:3001/api/v1/user/profile', 
       {key:'value'},

      {headers:{Authorization: `Bearer ${token}`} },

      ).then(res=>{
        setPrenom(res.data.body.firstName)
        setNom(res.data.body.lastName)
        dispatch (setUserInfo([res.data.body.firstName,res.data.body.lastName]))
        
      })
    })

    //Changement de nom au click
    const editName=(e)=>{
      e.preventDefault()
     setVerif(!verifChange)
    }

    const modifier=()=>{
      axios.put('http://localhost:3001/api/v1/user/profile', 
      {firstName:newPrenom,
      lastName:newNom},

      {headers:{Authorization: `Bearer ${token}`} },
      
      )
      .then(res=>{
        setPrenom(res.data.body.firstName)
        setNom(res.data.body.lastName)
      })
    }

    return (
      <div className="global-usersName-button">
        <div className="userName-div">
          <h1 className="userName">Welcome back</h1>


          <h1 className="userName">{prenom} {nom}</h1>
        </div>
        <button type="button" className="edit-button" onClick={(e)=>{editName(e)}}>Edit Name</button>
        
        {verifChange ? 
          <div> 
            <div> 
            <input  className="edit-input" onChange={(e)=>{setNewPrenom (e.target.value)}}/>
            <input  className="edit-input" onChange={(e)=>{setNewNom (e.target.value)}}/>
            
          </div>
          <button className="edit-button" onClick={()=>{modifier()} }>Change</button>
          </div>
          :
          console.log("Aucune modification possible")
        }
       
      </div>
      
    )
  }
  export default UsersName;