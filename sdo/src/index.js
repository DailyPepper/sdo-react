import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from '../src/components/AuthContext';

const root = document.getElementById('root');

const createRoot = ReactDOM.createRoot(root);
createRoot.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
