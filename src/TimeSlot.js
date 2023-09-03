import React from 'react';

function TimeSlot({ slot, isBooked, isSelected, handleBooking, handleCancelBooking }) {
  const handleClick = () => {
    if (isBooked) {
      alert('This slot is already booked.');
    } else if (isSelected) {
      alert('You have selected this slot.');
    } else {
      handleBooking(slot);
    }
  };

  const slotStyle = {
    backgroundColor: isBooked ? 'red' : isSelected ? 'blue' : 'green',
  };

  return (
    <div className="time-slot" style={slotStyle} onClick={handleClick}>
      {slot}
      {isBooked && <button className="cancel-button" onClick={() => handleCancelBooking(slot)}>Cancel</button>}
    </div>
  );
}

export default TimeSlot;
