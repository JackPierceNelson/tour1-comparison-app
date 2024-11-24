import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours }) => {
    return (
        <div className="gallery">
            <h1>Available Tours</h1>
            <div className="tour-list">
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;