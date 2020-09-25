import React from 'react';
import './Destination.css';

const Destination = () => {
  return (
    <div className="desForm">
      <p>Origin</p>
      <input className="nameForm" type="text" placeholder="Put your origin name" required/>
      <p>Destination</p>
      <input className="nameForm" type="text" placeholder="Put your destination name" required/>
      <p>From</p>
      <input className="nameForm" type="text" placeholder="Date" required/>
      <p>To</p>
      <input className="nameForm" type="text" placeholder="Date" required/>
      <br/>
      <button className="bookBtn"><a href="login">Start Booking</a> </button>
    </div>
  );
};

export default Destination;