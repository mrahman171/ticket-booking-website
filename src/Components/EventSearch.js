import React, {  useState  } from 'react';
import "../App.css";
 

const EventSearch = ({ onSearch }) => {
 
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [date, setDate] = useState('');
  const [artist, setArtist] = useState('');

   

  return (
    <div className="event-search-container">
      <h2 className="event-search-title">Event Search</h2>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="event-search-input"
        />
      </div>
      <div>
        <label>Event Type:</label>
        <input
          type="text"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="event-search-input"
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="event-search-input"
        />
      </div>
      <div>
        <label>Artist/Performer:</label>
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="event-search-input"
        />
      </div>
      <button  className="event-search-button">
        Search
      </button>
       
    </div>
  );
};

export default EventSearch;
