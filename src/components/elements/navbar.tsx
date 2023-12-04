import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{
  return(
    <header className="header-area">
  <div className="navbar-area">
    <div className="container">
      <nav className="site-navbar">
        <Link to="/" className="site-logo">
          <img src="https://stefimester.hu/wp-content/uploads/stefimester-motrio2.png" alt="" />
        </Link>

        <ul>
          <li>
            <Link to="/">Kezdőlap</Link></li>
          <li>
            <Link to="/about">Rólunk</Link></li>
          <li>
            <Link to="/services">Fó szolgáltatásom</Link></li>
          <li>
            <Link to="/contacts">Kapcsolat</Link></li>
        </ul>
      </nav>
    </div>
  </div>

  
</header> 
  )
}

export default NavBar