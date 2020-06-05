import React from 'react';
import '../App.css';
import '../styles/header.css'
import "./Footer.css"
import fb from '../files/fb.png';
import instagram from '../files/instagram.png';
import twitter from '../files/twitter.png';

function Footer() {
  return (
    <div className="Div-Absolute-Footer"  >
      <div className="container" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <div className="spc-btw" >
          <p className="">
            &copy;{new Date().getFullYear()} ALL right reserved
          </p>

          <div className="icons">
            <p>
              <a href=""><img className="logo-img" src={fb} alt="" /></a>
            </p>
            <p>
              <a href=""><img className="logo-img" src={instagram} alt="" /></a>
            </p>
            <p>
              <a href=""><img className="logo-img" src={twitter} alt="" /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
