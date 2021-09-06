
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"



const NavBar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
<nav className="navbar navbar-expand-lg navbar-dark   bg-dark rounded" variant="light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Locations
      </Link>
    
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
    
    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Home
          </NavLink>
        <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>        
          <NavLink className="nav-item nav-link" to="/list">
            Add restaurants
          </NavLink>
          <NavLink className="nav-item nav-link" to="/restaurants">
            Restaurants
          </NavLink>
          <NavLink className="nav-item nav-link" to="/contactus">
            Contact us
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Log in
          </NavLink>
        
      </div>
    </div>
  </div>
</nav>
  );
};

export default NavBar;

