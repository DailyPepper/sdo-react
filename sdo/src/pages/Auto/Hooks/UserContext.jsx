import React, { createContext, useState, useCallback } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSetUsername = useCallback((newUsername) => {
    setUsername(newUsername);
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setLoggedIn, username, handleSetUsername }}>
      {children}
    </UserContext.Provider>
  );
};
