import { yellow } from '@mui/material/colors';
import React from 'react';
import {Link} from 'react-router-dom';
import Background from '../assets/childbirth-e1657762521491.webp';
import '../styles/Home.css';

function Home() {

  return (
    <div className="home" /**style={{backgroundImage: `url(${Background})`}}**/>
      <div className="headerContainer">
        <h1>TruDiary</h1>
        <p> Welcome! Login or sign up below to get started.</p>
        <Link to="/sign-up">
          <button> REGISTER </button>
        </Link>
        <Link to="/login">
          <button> LOGIN </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home