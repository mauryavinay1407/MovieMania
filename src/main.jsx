import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { MovieProvider } from './context/MovieContext.jsx';
import { AIAssistantProvider } from './context/AIAssistantContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <AIAssistantProvider>
        <App />
      </AIAssistantProvider>
    </MovieProvider>
  </StrictMode>
);
