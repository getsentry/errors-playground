import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/index.css';
import './styles/reset.css';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/utilities.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
