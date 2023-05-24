import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "../App.css";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`data.json`);
        const eventData = await response.json();
         const selectedEvent = eventData.find((event) => event.id === parseInt(eventId));
        setEvent(selectedEvent);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <div className="event-details-page-container">
      <h1>Event Details</h1>
      {event ? (
        <div className="event-details-card">
          <h2 className="event-title">{event.title}</h2>
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
          <Link to="/Event" className="back-to-events-link">
            Back to Events
          </Link>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetailsPage;
