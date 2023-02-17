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
          <p><a href="https://www.dropbox.com/scl/fo/amrd8a5dyfv13lgsqcsh9/h?dl=0&rlkey=o0jh3qow2zpgpw611oitms8td">Document</a></p>
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
                <p><a href="https://www.dropbox.com/scl/fo/amrd8a5dyfv13lgsqcsh9/h?dl=0&rlkey=o0jh3qow2zpgpw611oitms8td">Document</a></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar