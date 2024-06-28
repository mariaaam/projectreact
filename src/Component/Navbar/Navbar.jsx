import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
   
 <section className='bgColor py-3 '>
 <nav className="navbar navbar-expand-lg text-white  container">


  <Link className="navbar-brand text-white fs-2 fw-bold" to="/">START FRAMEWORK</Link>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item ms-3 fw-bold fs-5">
        <Link className="nav-link" to="/About">ABOUT</Link>
      </li>
      <li className="nav-item ms-3 fw-bold fs-5">
        <Link className="nav-link" to="/PORTFOLIO">PORTFOLIO</Link>
      </li>
     
      <li className="nav-item ms-3 fw-bold fs-5">
        <Link className="nav-link" to="/CONTACT">CONTACT</Link>
      </li>
      
    </ul>
  </div>
</nav>


 </section>


  
 

    
    </>
  }
}

