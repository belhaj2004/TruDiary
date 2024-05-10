import React from 'react';
import InstaIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        {/* <div className="contacts">
            <a href= "https://www.instagram.com/georgiatech/">
                <InstaIcon /> 
            </a>
            <a href= "https://www.facebook.com/georgiatech">
                <FacebookIcon /> 
            </a>
            <a href= "https://twitter.com/GeorgiaTech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <TwitterIcon /> 
            </a>
            <a href= "https://www.linkedin.com/school/georgia-institute-of-technology/">
                <LinkedInIcon /> 
            </a>
        </div> */}
    </div>
  );
}

export default Footer