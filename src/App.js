import React from 'react';
import './App.css';
import SalonBooking from './SalonBooking';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Verlnyk</h1>
        <h5>Meet Our Experts to know about us</h5>
      </header>
      {/* <marquee>Book a slot for Free to meet our experts in our office from Monday to sunday at 9:00am to 6:00pm</marquee> */}
      <main>
        <h3>Book your slot at Verlnyk</h3>
        <table border="2px">
          <h4>Slots in Red Color are already Booked,Slots in Blue color are Ready to book</h4>
        <SalonBooking />
        </table>
      </main>
    </div>
  );
}

export default App;
