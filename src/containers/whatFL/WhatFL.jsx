import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatFL.css';

const WhatFL = () => {
  return (
    <div className="filelock__whatfl section__margin" id="fl">
      <div className="filelock__whatfl-feature">
        <Feature 
          title="What is FileLock" 
          text="A program where users can store confidential data onto a directory where it can be securely stored and then retrieved at the user's behest. Used by people from all sorts of occupations, secure file storage is crucial in today's ever growing cyber-reliant society." 
        />
      </div>
      <div className="filelock__whatfl-heading">
        <h1 className="gradient__text">
          Security at your fingertips
        </h1>
      </div>
      <div className="filelock__whatfl-container">
        <Feature 
          title="Password required on program start" 
          text="Unauthorised users will not be able to use or access the program." 
        />
        <Feature 
          title="Password protected actions" 
          text="Unauthorised users will not be able to perform actions on the program." 
        />
        <Feature 
          title="Drag and Drop" 
          text="Allows user to easily drag and drop the files into the program." 
        />
      </div>
  </div>
  )
}

export default WhatFL
