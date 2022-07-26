import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    
    // contexts
    import { TravelProvider } from './contexts/TravelContext';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <TravelProvider>
          <App />
        </TravelProvider>
      </React.StrictMode>
    );