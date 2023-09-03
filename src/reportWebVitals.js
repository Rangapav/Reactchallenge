import React, { useState } from 'react';
import Room from './RoomList';

function RoomList({ rooms }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <div key={room.id} className="room" onClick={() => setSelectedRoom(room)}>
          <h2>{room.name}</h2>
          {selectedRoom === room && (
            <Room room={room} setSelectedRoom={setSelectedRoom} />
          )}
        </div>
      ))}
    </div>
  );
}

export default RoomList;
