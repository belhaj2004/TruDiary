import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css";
import Logo from "../assets/trudiary_size1.png";
import { CookiesProvider, useCookies } from "react-cookie";

function Navbar() {

  const loc = useLocation();
  const [cookies, setCookie] = useCookies(["user"]);
  console.log(cookies);

  // console.log(loc.state);

  const [loginValue, setLoginValue] = useState('Login');

  if (cookies.user != null) {
      return (
        <div className="navbar">
            <div className="leftSide">
                <img src = {Logo}/>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/knowledge-hub"> Knowledge Hub </Link>
                {/* <Link>Support Groups</Link> */}
                {/* <Link to="/login"> {loginValue} </Link> */}
                <Link to="/my-info">My Info</Link>
                <Link>Welcome, {cookies.user.name}!</Link>
            </div>
    
        </div>
      );
    
  } else {
    return (
      <div className="navbar">
          <div className="leftSide">
              <img src = {Logo}/>
          </div>
          <div className="rightSide">
              <Link to="/"> Home </Link>
              <Link to="/knowledge-hub"> Knowledge Hub </Link>
              <Link>Services</Link>
              <Link>Support Groups</Link>
              {/* <Link to="/login"> {loginValue} </Link> */}
              <Link to="/my-info">My Info</Link>
              {/* <Link>Welcome, {cookies.user.name}!</Link> */}
          </div>
  
      </div>
    );
  }
  }
  

export default Navbar