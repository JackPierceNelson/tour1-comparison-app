import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Displays a loading message while data is being fetched and renders the Gallery component once the data is available
import Gallery from './Gallery';
import './styles.css';

function App() {
    //The useState hook is used to manage the state of tours and loading status
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch tour data from API
    // The useEffect hook fetches tour data from an API when the component mounts
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project'); // Replace with your API endpoint
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);
// The react-router-dom library is utilized for routing between different components/pages
// Updated App.jsx with Toolbar
    return (
        <Router>
            <div className="App">
                
                    <h1>Tour Comparison App</h1>
                </div>
                {loading ? (
                    <p>Loading tours...</p>
                ) : (
                    <Routes>
                        <Route path="/" exact>
                            <Gallery tours={tours} />
                        </Route>
                    </Routes>
                )}
            
        </Router>
    );
}

export default App;


// Setup root component with global state and routing