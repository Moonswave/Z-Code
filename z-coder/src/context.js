import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

return (
    <AppContext.Provider value={{
      
    }}>
      {children}
    </AppContext.Provider>
  );
}