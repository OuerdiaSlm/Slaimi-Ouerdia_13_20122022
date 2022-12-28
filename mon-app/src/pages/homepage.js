import React from 'react';
import Features from '../components/features/features';
import Footer from '../components/footer/footer';
import Header from '../components/header/headerNav';
import IndexBanner from '../components/indexBanner/indexBanner';


function Homepage() {
  return (
    <div className="global-div-homepage">
      <header className="">
      <Header/>
      </header>
      <IndexBanner/>
      <Features/>
      <Footer/>
    </div>
  )
}
export default Homepage;
