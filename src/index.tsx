import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App/App';

import './reset.css';
import './styles.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);