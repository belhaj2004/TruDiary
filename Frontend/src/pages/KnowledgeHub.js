import React, {useState} from 'react';
import {useLocation, Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles/KnowledgeHub.css';
import Navbar from '../components/Navbar';
import { CookiesProvider, useCookies } from "react-cookie";


export function KnowledgeHub() {

  // window.location.reload();

  const loc = useLocation();
  const [cookies, setCookie] = useCookies(["user"]);

  console.log(loc);

  const [name, setName] = useState(loc.state ? loc.state.name : '');

  // console.log(cookies);
  console.log(cookies);

  if (cookies.user.role === 'admin') {
    console.log('admin user setting');
    return (
      <div classname="knowledgehub" style={{'background-color': '#cccccc', 'height': '100vh'}}>
              <h1 style={{'background-color': '#cccccc', 'margin': '0px'}}>Knowledge Hub</h1><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="/eventsread">Events (User)</Link></Button><br/><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="/events">Events (Admin)</Link></Button><br/><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="articles-list">Articles</Link></Button><br/><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="supportGroupsList">Support Groups</Link></Button><br/><br/>
      </div>
    );
  } else {
    return (
      <div classname="knowledgehub" style={{'background-color': '#cccccc', 'height': '100vh'}}>
              <h1 style={{'background-color': '#cccccc', 'margin': '0px'}}>Knowledge Hub</h1><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="/eventsread">Events</Link></Button><br/><br/>
              {/* <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="/events">Events (Admin)</Link></Button><br/><br/> */}
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="articles-list">Articles</Link></Button><br/><br/>
              <Button style={{'background-color': '#25292C', 'color': '#ffffff'}}><Link style={{'color': '#ffffff', textDecoration: 'none' }} to="supportGroupsList">Support Groups</Link></Button><br/><br/>
      </div>
    );
  }

}