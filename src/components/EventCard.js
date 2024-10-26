import React from "react";
// import "./EventCard.css";

function EventCard({ event, onClick }) {
    return (
        <div className="event-card" onClick={onClick}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
        </div>
    );
}

export default EventCard;
