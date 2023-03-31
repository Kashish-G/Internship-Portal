import React from 'react';
import "./LandingPage.css";

const LandingPage = () => {
  return (
  <div className='main'>
    <div className='navbar'>
       <div className='logo'>
        Internship Portal
       </div>
       <div className='home'>
        Home
       </div>
       <div className='course'>
        Course
       </div>
       <div className='research'>
        Research
       </div>
       <div className='interview'>
        Interview
       </div>
       <div className='login'>
        Log In
       </div>
       <button className='registerbtn'>
     
       Registration

       </button>
    </div>
    <div className='first-section'>
    <img className="semicircle" alt="" src="/semicircle.svg" />
    <div className='heading-1'>Launch, Learn, Grow</div>
    <div className='rectangle'></div>
    <div className='heading-2'>Start Today</div>
    <img src='/star-icon.svg' className='star-icon'></img>
    <div className='subtitle'>Unleash your potential with us</div>
    <button className='get-startedbtn'>Get Started</button>
    <button className='browsebtn'>Browse Internships</button>
    <img src='/arrow-icon.svg' className='arrow-icon'></img>
    <div className='star-rec'></div>
    <img src='/star.svg' className='star'></img>
    <div className='sub-text'>Most of the students have given a five star review for us.</div>
    <img src='/landingpage-image.svg' className='landingpage-image'></img>
    </div>
    <div className='second-section'>
      <div className='search-div'></div>
      <img src='/search-1.svg' className='search-1'></img>
      <input placeholder='Role Name' className='role-div'></input>
      <img src='/company-name.svg' className='company-name'></img>
      <input placeholder='Company Name' className='company-div'></input>
      <button className='search-btn'>Search</button>
      <img src='/search-2.svg' className='search-2'></img>
      <div className='line'></div>
    </div>
  </div>
  )
}

export default LandingPage;