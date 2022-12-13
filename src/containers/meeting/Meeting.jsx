import React from 'react'
import Details from '../../components/details/Details';
import { image01 } from './imports.js'
import './meeting.css';

const Meeting = () => {
  return (
  <div className="fl__meeting section__padding" id="meeting">
    <div className="fl__meeting-heading">
      <h1 className="gradient__text">
        We have lots of meeting <br />
      </h1>
    </div>
    <div className="fl__meeting-container">
      <div className="fl__meeting-container_groupA">
        <Details imgUrl={image01} date="Dec 12, 2022" title="Meeting 01" />
      </div>
      <div className="fl__meeting-container_groupB">
        <Details imgUrl={image01} date="Dec 12, 2022" title="Meeting 02" />
        <Details imgUrl={image01} date="Dec 12, 2022" title="Meeting 03" />
        <Details imgUrl={image01} date="Dec 12, 2022" title="Meeting 04" />
        <Details imgUrl={image01} date="Dec 12, 2022" title="Meeting 05" />
      </div>
    </div>
  </div>
  )
}

export default Meeting