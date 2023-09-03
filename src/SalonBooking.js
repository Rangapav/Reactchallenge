import React from 'react';
// import './SalonBooking.css';
import Room from './Room';

function SalonBooking() {
  return (
    <div className="salon-booking">
      <Room roomName="Monday" />
      <Room roomName="Tuesday" />
      <Room roomName="Wednesday" />
      <Room roomName="Thursday" />
      <Room roomName="Friday" />
      <Room roomName="Staurday" />
    </div>
  );
}

export default SalonBooking;
