import React from 'react';
import Account from '../components/account/account';
import Footer from '../components/footer/footer';
import NavSignOut from '../components/header/headerNavSignOut';
import UsersName from '../components/usersName/usersName';
import './page.css';


function UserPage() {
  return (
    <div className="global-div-userPage">
      <header className="">
      <NavSignOut/>
      </header>
      <div className="usersContent">
        <UsersName/>
        <Account/>
      </div>
      
      <Footer/>
    </div>
  )
}
export default UserPage;