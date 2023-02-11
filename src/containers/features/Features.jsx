import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Convenient and Quick',
    text: 'Drag the files you wish to encrypt into the program and encrypt it with a push of a button.',
  },
  {
    title: 'Secure',
    text: 'User will be prompted to enter their password whenever they wish to perform certain actions.',
  },
  {
    title: 'Uses AES Encryption',
    text: 'Files are encrypted and zipped using Pickle, a python library.',
  },
  {
    title: 'Unlimited number of files to be encrypted',
    text: 'Unlimited number of files can be added to the program for encryption.',
  },
];

const Features = () => {
  return (
    <div className="fl__features section__padding" id="features">
    <div className="fl__features-heading">
      <h1 className="gradient__text">
        Features that FileLock Provide <br />
        Take Control of your Security. <br />
        Secure your Files Today. 
      </h1>
    </div>
    <div className="fl__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features