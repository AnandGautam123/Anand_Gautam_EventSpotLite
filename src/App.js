import React, { useState } from "react";
import "./App.css";
import EventCard from "./components/EventCard";
import Modal from "./components/Modal"; // Correct casing
import events from "./data/events.json"; // Correct variable name

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Filter events based on search query
    const filteredEvents = events.filter((event) =>  // Updated to use 'events'
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div>
            <header className="navbar">
                <h1>EventSpot Lite</h1>
                <input
                    type="text"
                    placeholder="Search by event name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </header>
            <main className="event-list">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
                ))}
            </main>
            {selectedEvent && (
                <Modal event={selectedEvent} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default App;
