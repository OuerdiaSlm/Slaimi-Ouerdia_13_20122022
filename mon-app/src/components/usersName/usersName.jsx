import React from "react"
import './usersName.css';

  function UsersName() {
    return (
      <div className="global-usersName-button">
        <div className="userName-div">
          <h1 className="userName">Welcome back</h1>
          <h1 className="userName">Tony Jarvis!</h1>
        </div>
        <button type="button" className="edit-button">Edit Name</button>
      </div>
      
    )
  }
  export default UsersName;