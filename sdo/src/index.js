import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from '../src/components/AuthContext';
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from './pages/Auto/Hooks/UserContext';

const root = document.getElementById('root');
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  root
);
