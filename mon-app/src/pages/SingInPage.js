import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/headerNav';
import SingIn from '../components/sign-in/sign-in';


function SingInPage() {
  return (
    <div className="global-div-SingInPage">
      <header className="">
        <Header/>
      </header>
      <SingIn/>
      <Footer/>
    </div>
  )
}
export default SingInPage;
