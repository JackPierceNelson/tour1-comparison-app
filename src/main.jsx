import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App'; // Import your main App component
import './styles.css'; // Import your CSS styles

// Get the root element from the HTML where the React app will be mounted
const rootElement = document.getElementById('root');

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);