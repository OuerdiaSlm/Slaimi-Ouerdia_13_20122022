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
    const token = useSelector((state) => state.user.token);
  
    const [prenom,setPrenom]=useState()
    const [nom,setNom]=useState()
    const [newPrenom,setNewPrenom]=useState()
    const [newNom,setNewNom]=useState()
    let [verifChange,setVerif]=useState(false)

    useEffect(()=>{
    
       axios.post('http://localhost:3001/api/v1/user/profile', 
       {key:'value'},

      {headers:{Authorization: `Bearer ${token}`} },

      ).then(res=>{
        setPrenom(res.data.body.firstName)
        setNom(res.data.body.lastName)
        console.log(res.data.body.firstName)

        dispatch (setUserInfo([res.data.body.firstName,res.data.body.lastName]))
      })

    })

    //Changement de nom au click
    const editName=(e)=>{
      e.preventDefault()
     setVerif(!verifChange)
    }

    const modifier=()=>{
      //axios.put(bjbcl.profile),{firstName:newPrenom}
      console.log(newPrenom,newNom)
      axios.put('http://localhost:3001/api/v1/user/profile', 
      {firstName:newPrenom,
      lastName:newNom},

      {headers:{Authorization: `Bearer ${token}`} },
      
      )
      .then(res=>{
        console.log(res.data.body.firstName)
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
            <input  onChange={(e)=>{setNewPrenom (e.target.value); console.log(newPrenom)}}/>
            <input  onChange={(e)=>{setNewNom (e.target.value)}}/>
            <button onClick={()=>{modifier()}}>Changer</button>
          </div>
          :
          console.log("faux")
        }
       
      </div>
      
    )
  }
  export default UsersName;