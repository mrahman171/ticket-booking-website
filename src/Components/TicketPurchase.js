import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const TicketPurchase = ({ event }) => {
  const navigate = useNavigate();
  const navigateToPayment = () => {

    navigate('/Payment');
  };
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {

      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {

      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotalCost = () => {

    const seatCost = selectedSeats.length * event.price;
    const taxes = seatCost * 0.1;
    const fees = selectedSeats.length * 2;
    const total = seatCost + taxes + fees;
    setTotalCost(total);
  };

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Price: {event.price}</p>

      <h3>Select Seats:</h3>
      <div className="seat-selection">
        {event.seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatSelection(seat)}
          >
            {seat.name}
          </button>
        ))}
      </div>

      <button className="payment" onClick={calculateTotalCost}>Calculate Total Cost</button>

      {selectedSeats.length > 0 && (
        <div>
          <h3>Selected Seats:</h3>
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat.id}>{seat.name}</li>
            ))}
          </ul>

          <h3>Total Cost:</h3>
          <p>{totalCost}</p>

          <div className="seat-selection">

            <button className="payment" onClick={navigateToPayment} >Payment

            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketPurchase;
