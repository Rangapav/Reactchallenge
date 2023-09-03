import React, { useState } from 'react';
// import './SalonBooking.css';
import TimeSlot from './TimeSlot';

function Room({ roomName }) {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');

  const availableSlots = [
    '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am',
    '12:00pm', '12:30pm', '01:00pm', '03:00pm', '03:30pm', '04:00pm',
    '04:30pm', '05:00pm', '05:30pm', '06:00pm',
  ];

  const handleBooking = (slot) => {
    if (bookedSlots.includes(slot)) {
      alert('This slot is already booked.');
    } else {
      setBookedSlots([...bookedSlots, slot]);
      setSelectedSlot(slot);
      alert('Your slot for '+  roomName  + ' at '+ slot + ' is booked.');
    }
  };

  const handleCancelBooking = (slot) => {
    if (bookedSlots.includes(slot)) {
      const updatedSlots = bookedSlots.filter((bookedSlot) => bookedSlot !== slot);
      setBookedSlots(updatedSlots);
      setSelectedSlot('');
      alert('Your booking at ' + slot + ' is canceled.');
    }
  };

  return (
    <div className="room">
      <h3>{roomName}</h3>
      <div className="time-slots">
        {availableSlots.map((slot) => (
          <TimeSlot
            key={slot}
            slot={slot}
            isBooked={bookedSlots.includes(slot)}
            isSelected={selectedSlot === slot}
            handleBooking={handleBooking}
            handleCancelBooking={handleCancelBooking}
          />
        ))}
      </div>
    </div>
  );
}

export default Room;
