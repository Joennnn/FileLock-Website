import React from 'react'
import './details.css';

const Details = ({ imgUrl, date, title }) => {
  return (
    <div className="fl__meeting-container_details">
        <div className="fl__meeting-container_details-image">
            <img src={imgUrl} alt="meeting_image" />
        </div>
        <div className="fl__meeting-container_details-content">
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>View more</p>
        </div>
    </div>
  );
}

export default Details
