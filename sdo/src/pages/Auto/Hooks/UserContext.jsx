import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};