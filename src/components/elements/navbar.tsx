import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
  return(
    <header className="header-area">
  <div className="navbar-area">
    <div className="container">
      <nav className="site-navbar">
        <Link to="#home" className="site-logo">logo</Link>

        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/download">download</Link></li>
          <li><Link to="/contacts">contact</Link></li>
        </ul>

        <button className="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div>

  
</header> 
  )
}

export default NavBar