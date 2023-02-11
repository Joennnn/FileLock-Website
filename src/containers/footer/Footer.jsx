import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="fl__footer section__padding">
    <div className="fl__footer-heading">
      <h1 className="gradient__text">
        Download FileLock Today
      </h1>
    </div>

    <div className="fl__footer-btn">
      <a href="https://mega.nz/file/gvYU3TCY#_2HyTrRZ6ER3a4zEuEQExTOXLC0_9JAjkWXvLTv7v3Q"><p>Download FileLock</p></a>
    </div>

    <div className="fl__footer-links">
      <div className="fl__footer-links_div">
        <h4>Get in touch</h4>
        <a href="https://github.com/Joennnn/FileLock"><p>FileLock GitHub</p></a>
        <a href="#members"><p>Meet the team</p></a>
      </div>
    </div>

    <div className="fl__footer-copyright">
      <p>@2022 FileLock. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
