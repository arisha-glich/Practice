import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    {/* App component which already wraps everything in BrowserRouter and SurveyProvider */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
