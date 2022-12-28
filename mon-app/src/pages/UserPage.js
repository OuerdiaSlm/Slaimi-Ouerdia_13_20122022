import React from 'react';
import Account from '../components/account/account';
import Footer from '../components/footer/footer';
import Header from '../components/header/headerNav';
import UsersName from '../components/usersName/usersName';
import './page.css';


function UserPage() {
  return (
    <div className="global-div-userPage">
      <header className="">
      <Header/>
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