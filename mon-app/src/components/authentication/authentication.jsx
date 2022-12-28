import React from "react"
import './autentication.css';

  function Authentication() {
    return (
      <div className="global-div-authentication">
        <h1>Welcome back</h1>

        <form className="autentication-form">
          <div className="autentication-input-text">
            <input type="text" placeholder="Tonny" className="autentication-input"/>
            <input type="text" placeholder="Jarvis" className="autentication-input"/>
          </div>
          

          <div className="autentication-input-button">
            <input type="button" value="Save" className="button"/>
          <input type="button" value="Cancel" className="button"/>
          </div>
          
        </form>
        
      </div>
    )
  }
  export default Authentication;