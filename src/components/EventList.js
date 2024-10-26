import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import events from '../data/events.json';

function EventList() {
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchQuery] = useState("");

    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        setFilteredEvents(
            events.filter(
                (event) =>
                    event.name.toLowerCase().includes(lowercasedQuery) ||
                    event.location.toLowerCase().includes(lowercasedQuery)
            )
        );
    }, [searchQuery]);

    return (
        <div className="event-list">
            {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
            ))}
            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
    );
}

export default EventList;
