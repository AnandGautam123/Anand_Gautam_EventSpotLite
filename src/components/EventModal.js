import React from 'react';
import { motion } from 'framer-motion';

function EventModal({ event, onClose }) {
    if (!event) return null;

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose}>X</button>
                <h2>{event.name}</h2>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <img src={event.image} alt={event.name} />
                <p>{event.description}</p>
            </motion.div>
        </motion.div>
    );
}

export default EventModal;
