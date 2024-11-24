import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Displays a loading message while data is being fetched and renders the Gallery component once the data is available
import Gallery from './components/Gallery';
import './styles.css';

const App = () => {
    //The useState hook is used to manage the state of tours and loading status
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch tour data from API
    // The useEffect hook fetches tour data from an API when the component mounts
    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://api.example.com/tours'); // Replace with your API endpoint
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
            <div className="app">
                <div className="toolbar">
                    <h1>Tour Comparison App</h1>
                </div>
                {loading ? (
                    <p>Loading tours...</p>
                ) : (
                    <Switch>
                        <Route path="/" exact>
                            <Gallery tours={tours} />
                        </Route>
                    </Switch>
                )}
            </div>
        </Router>
    );
};

export default App;
