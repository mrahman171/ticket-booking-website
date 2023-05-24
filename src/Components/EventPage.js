import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
 

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
      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h2 className="event-title">{event.title}</h2>
          <div className="event-details">
            <div className="event-info">
              <span className="event-info-label">Date:</span>
              <span className="event-info-value">{event.date}</span>
            </div>
            <div className="event-info">
              <span className="event-info-label">Time:</span>
              <span className="event-info-value">{event.time}</span>
            </div>
            <div className="event-info">
              <span className="event-info-label">Location:</span>
              <span className="event-info-value">{event.location}</span>
            </div>
            <div className="event-info">
              <span className="event-info-label">Price:</span>
              <span className="event-info-value">{event.price}</span>
            </div>

             


          </div>
          <Link to={`/Event/${event.id}`} className="view-details-link">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
