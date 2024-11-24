import React, { useState, useEffect } from 'react';
//State Management
const Gallery = () => {
    //tours: An array to hold the fetched tour data
    const [tours, setTours] = useState([]);
    // loading: A boolean to indicate whether the data is currently being fetched
    const [loading, setLoading] = useState(true);
    // error: A string to hold any error message if the fetch fails
    const [error, setError] = useState(null);

    // Fetch tour data from API
    // The useEffect hook is used to fetch data from the API when the component mounts
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // If the fetch is successful, the data is stored in the tours state. If it fails, an error message is saved in the error state
                setTours(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    // Remove a tour from the list
    const removeTour = (id) => {
        const updatedTours = tours.filter(tour => tour.id !== id);
        setTours(updatedTours);
    };

    // Toggle description visibility
    const toggleDescription = (id) => {
        const updatedTours = tours.map(tour => 
            tour.id === id ? { ...tour, showDescription: !tour.showDescription } : tour
        );
        setTours(updatedTours);
    };
// If loading is true, a loading message is displayed
    if (loading) {
        return <p>Loading tours...</p>;
    }
// If there’s an error, it displays an error message
    if (error) {
        return <p>Error fetching tours: {error}</p>;
    }
// Once the data is fetched successfully, it maps over the tours array and renders each tour's details including name, price, description, and image
// The "Not Interested" button removes a tour from the list by filtering it out based on its ID
// The "Read More" / "Show Less" button toggles the visibility of the tour description by updating each tour's state with a showDescription property
    return (
        <div className="gallery">
            <h1>Available Tours</h1>
            <div className="tour-list">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-card">
                        <img src={tour.image} alt={tour.name} />
                        <h2>{tour.name}</h2>
                        <p>Price: ${tour.price}</p>
                        {tour.showDescription && <p>{tour.description}</p>}
                        <button onClick={() => toggleDescription(tour.id)}>
                            {tour.showDescription ? 'Show Less' : 'Read More'}
                        </button>
                        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;