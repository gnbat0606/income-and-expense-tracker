"use client";

import { createContext, useContext } from "react";

export const AncestorContext = createContext(null);

export const AncestorProvider = ({ children }) => {
  const ancestor = "knife";
  return (
    <AncestorContext.Provider value={{ ancestor }}>
      {children}
    </AncestorContext.Provider>
  );
};
const loginHandleFunction = async (email, password) => {
  console.log(email, password);

  const token = "token";
};

export const useAncestor = () => {
  const ancestor = useContext(AncestorContext);
  return ancestor;
};
