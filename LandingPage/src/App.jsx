import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import FormProvider from './Hooks/FormContext'; // Adjust path as necessary
import MultiStepForm from './Forms/MultiStepForm'; // Adjust path as necessary
import './index.css'; // Ensure Tailwind CSS is imported

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FormProvider>
        <MultiStepForm /> 
      </FormProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
