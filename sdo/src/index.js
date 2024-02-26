import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from '../src/components/AuthContext';
import {QueryClient, QueryClientProvider } from "react-query";

const root = document.getElementById('root');
const queryClient = new QueryClient();

const createRoot = ReactDOM.createRoot(root);
createRoot.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
