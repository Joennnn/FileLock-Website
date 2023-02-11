import React from 'react'
import securefile from '../../assets/securefile.png';
import './header.css';

const Header = () => (
  <div className="filelock__header section__padding" id="home">
    <div className="filelock__header-content">
      <h1 className="gradient__text">
        Secure your files with FileLock
      </h1>
      <p>
        A program that encrypts your sensitive documents. <br />
        Safely and securely encrypts all the files you need. 
      </p>

      <div className="filelock__header-content__button">
        <button type="button" onClick={() => window.location.href = "#fl"}>Learn More</button>
      </div>
    </div>
    <div className="filelock__header-image">
      <img src={securefile} alt="secure folder"/>
    </div>
  </div>
);

export default Header
