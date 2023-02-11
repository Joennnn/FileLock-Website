import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='filelock__navbar'>
      <div className="filelock__navbar-links">
        <div className="filelock__navbar-links_logo">
          <img src={logo} alt="logo" />
          <p>FileLock</p>
        </div>
        <div className="filelock__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#fl">FileLock</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#members">Team</a></p>
          <p><a href="https://drive.google.com/drive/u/0/folders/1VP5qe7dSaYNPgu3ZeDiKBJ4cjT15wRxk">Document</a></p>
        </div>
        <div className="filelock__navbar-menu">
          {toggleMenu
            ? <AiOutlineMenu color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <AiOutlineClose color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="filelock__navbar-menu_container scale-up-center">
              <div className="filelock__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#fl">FileLock</a></p>
                <p><a href="#features">Features</a></p>
                <p><a href="#members">Team</a></p>
                <p><a href="https://drive.google.com/drive/u/0/folders/1VP5qe7dSaYNPgu3ZeDiKBJ4cjT15wRxk">Document</a></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar