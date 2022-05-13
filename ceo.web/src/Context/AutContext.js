import React, { createContext, useState } from "react";

export const AutContext = createContext();

export const DataProvider = ({ children }) => {
  const [Aut, setAut] = useState([]);
  console.log(Aut);
  return (
    <AutContext.Provider value={{ Aut, setAut }}>
      {children}
    </AutContext.Provider>
  );
};
