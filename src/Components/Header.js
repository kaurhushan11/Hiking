import React from "react";
import {Link} from "react-router-dom";

import logo from '../Images/Logo1.png';


function Header(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg bg-white py-4 fixed-top">
          <div className="container-fluid">
            <img src={logo} className="img-fluid mx-5" width={140}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-3 mt-3">
                <li className="nav-item px-3">
                  <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to = "/class">Class</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to = "/promo">Promo</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to = "/online">Online Class</Link>
                </li>
                <li className="nav-item px-3">
                  <Link className="nav-link" to ="/contact">Contact</Link>
                </li>
              </ul>
              <button className="btn btn-outline-success me-5 ms-3" type="submit">Sign In/Sign Up</button>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default Header;