import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <BrowserRouter basename="/portfolio">
=======
    <BrowserRouter basename='portfolio'>
>>>>>>> Stashed changes
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
