import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import logo from './Images/Logo1.png';

import Home from "./Components/Home";
import Class from "./Components/Class";
import Promo from "./Components/Promo";
import Online from "./Components/Online";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Teams from "./Components/Teams";
import Ethic from "./Components/Ethic";

function App() {
  let navBar = document.querySelectorAll('.nav-link');
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function(a){
    a.addEventListener("click", function(){
      navCollapse.classList.remove("show");
    })
  })
  return (
    <Router>
		<div className="container">
			<header className="row">
      <nav className="nav-head navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 text-center">
        <div className="container">
          <img className="logo px-5" src={logo} width={250}></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3 ps-5">
              <li className="nav-item pe-5">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/class">Class</Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/promo">Promo</Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/online">Online Class</Link>
              </li>
              <li className="nav-item pe-5">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="btn btn-outline-info" type="submit"><Link className="nav-link text-decoration-none text-dark " to="/signin">Sign In/ Sign Up</Link></button>
          </div>
        </div>
      </nav>
			</header>
			<section className="row route_comp">
				<div className="col-sm-12">
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route exact path="/class" element={<Class/>} />
						<Route exact path="/promo" element={<Promo/>} />
						<Route exact path="/online" element={<Online/>} />
						<Route exact path="/contact" element={<Contact/>} />
						<Route exact path="/signin" element={<SignIn/>} />
						<Route exact path="/signup" element={<SignUp/>} />
						<Route exact path="/team" element={<Teams/>} />
						<Route exact path="/ethic" element={<Ethic/>} />
					</Routes>
				</div>
			</section>
			
			<section className="row foot-sec">
        <div className="container pt-5 ps-5 bg-light">
          <div className="row">
            <div className="col-md-8 pt-5">
              <h5 className="text-dark h5_div10">ABOUT</h5>
              <p className="text-dark p_div10"><b>Address</b><br/>XYZ City, XYZ State, XYZ Country, PIN - XXXX.
              <br/><b>Phone</b><br/>0123456789
              <br/><b>Email</b><br/>abc@gmail.com
              </p>
            </div>
            <div className="col-md-4 half-foot pt-5">
              <div>
                <h5 className="text-dark h5_1div10">ABOUT</h5>
                <div className="para1">
                  <p><Link className="text-decoration-none text-dark" to="/team">Team</Link><br/><Link className="text-decoration-none text-dark " to="/signin">Join us</Link> <br/><Link className="text-decoration-none text-dark" to="/ethic">Ethic</Link><br/><Link className="text-decoration-none text-dark" to="/online">Goals</Link></p>
                </div>
              </div>
              <div className="mx-5">
                <h5 className="text-dark h5_1div10">ABOUT</h5>
                <div className="para1">
                  <p><Link className="text-decoration-none text-dark" to="/team">Team</Link><br/><Link className="text-decoration-none text-dark " to="/signin">Join us</Link> <br/><Link className="text-decoration-none text-dark" to="/ethic">Ethic</Link><br/><Link className="text-decoration-none text-dark" to="/online">Goals</Link></p>
                </div>
              </div>
              <div>
                <h5 className="text-dark h5_1div10">ABOUT</h5>
                <div className="para1">
                  <p><Link className="text-decoration-none text-dark" to="/team">Team</Link> <br/><Link className="text-decoration-none text-dark " to="/signin">Join us</Link> <br/><Link className="text-decoration-none text-dark" to="/ethic">Ethic</Link><br/><Link className="text-decoration-none text-dark" to="/online">Goals</Link></p>
                </div>
              </div>
            </div>
            <div>
              <img className="img-fluid img_div10 mt-3" width={150} src={logo}/>
            </div>
          </div>
        </div>
        <div className="foot-img mt-5"></div>
			</section>
		</div>
	</Router>
  );
}

export default App;
