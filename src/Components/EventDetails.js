import React, { useState, useEffect } from 'react';
 
import "../App.css";
import TicketPurchase from '../Components/TicketPurchase';

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch('data.json');
        const eventData = await response.json();
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <div className="event-page-container">
      <h1>TicketPurchase</h1>
      {events.map((event) => (
        <div key={event.id} className="event-card">
          
          <div className="event-details">
             

            <div className="event-details-info">
              <span className="event-details-label">Seating Chart:</span>
              <TicketPurchase event={event} />
            </div>


          </div>
           
        </div>
      ))}
    </div>
  );
};

export default EventPage;
