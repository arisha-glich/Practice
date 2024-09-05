import React from 'react';
import ReactDOM from 'react-dom';
import FormProvider from './Hooks/FormContext'; // Adjust path as necessary
import FormSteps from './Forms/FormSteps'; // Adjust path as necessary
import MultiStepForm from './Forms/MultiStepForm';
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
    <MultiStepForm/>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
